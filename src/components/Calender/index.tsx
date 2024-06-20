"use client";

import React, { useState, useEffect } from "react";
import Cookies from "cookies-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `${Cookies.get("token")}`);
  const searchParams = new URLSearchParams(window.location.search);
  const idParam = searchParams.get("id");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch(`http://localhost:5000/api/lesson/course/${idParam}`, requestOptions);
  const data = await response.json();
  return data;
};

const fetchQuestions = async (lessonId) => {
  const requestOptions = {
    method: "GET",
  };

  const response = await fetch(`http://localhost:5000/api/quest/lesson/${lessonId}`, requestOptions);
  const data = await response.json();
  return data;
};

const QuestionModal = ({ questions, closeModal, handleSubmitQuiz }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questionsPerPage = 3;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOption,
    });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleQuizSubmit = () => {
    let calculatedScore = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question._id] === question.answer) {
        calculatedScore += 1;
      }
    });
    const percentageScore = (calculatedScore / questions.length) * 100;

    if (percentageScore > 80) {
      toast.success(`Congratulations! You scored ${percentageScore.toFixed(2)}%. Good luck in the next lesson!`);
    } else {
      toast.error(`Oops! You scored ${percentageScore.toFixed(2)}%. You may need to repeat the lesson.`);
    }

    setScore(percentageScore);
    setShowResults(true);
  };

  useEffect(() => {
    if (showResults) {
      handleSubmitQuiz(score);
    }
  }, [showResults]);

  const startIndex = currentPage * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;
  const questionsToDisplay = questions.slice(startIndex, endIndex);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <ToastContainer />
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "5px",
          width: "50%",
          position: "relative",
        }}
      >
        <h2>Questions</h2>
        {questionsToDisplay.map((q, index) => (
          <div key={q._id} style={{ marginBottom: "10px" }}>
            <p>
              <strong>
                {startIndex + index + 1}. {q.question}
              </strong>
            </p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {q.options.map((option, i) => (
                <li
                  key={i}
                  style={{
                    color:
                      showResults && option === q.answer
                        ? "green"
                        : showResults && selectedAnswers[q._id] === option
                        ? "red"
                        : "black",
                  }}
                >
                  <input
                    type="radio"
                    name={`question-${q._id}`}
                    value={option}
                    checked={selectedAnswers[q._id] === option}
                    onChange={() => handleOptionChange(q._id, option)}
                    disabled={showResults}
                  />
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          {currentPage > 0 && (
            <button className="bg-slate-500 text-white rounded" onClick={handlePreviousPage} style={{ padding: "10px 20px" }}>
              Previous
            </button>
          )}
          {currentPage < totalPages - 1 && (
            <button className="bg-teal-500 text-white rounded" onClick={handleNextPage} style={{ padding: "10px 20px" }}>
              Next
            </button>
          )}
          {currentPage === totalPages - 1 && !showResults && (
            <button className="bg-teal-500 text-white rounded" onClick={handleQuizSubmit} style={{ padding: "10px 20px" }}>
              Submit
            </button>
          )}
          {showResults && (
            <>
              <div>
                <p>Your Score: {score.toFixed(2)}%</p>
              </div>
              <button onClick={closeModal} style={{ padding: "10px 20px" }}>
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const ProgressBar = ({ progress }) => (
  <div style={{ height: "5px", background: "#ccc", width: "100%", marginBottom: "10px" }}>
    <div style={{ height: "5px", background: "#4caf50", width: `${progress}%` }}></div>
    <div style={{ textAlign: "center", marginTop: "5px" }}>{progress.toFixed(2)}%</div>
  </div>
);

const LessonList = ({ lessons, setCurrentLessonIndex, currentLessonIndex }) => (
  <div style={{ width: "30%", borderRight: "1px solid #ccc", padding: "10px" }}>
    <h2>Lessons</h2>
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {lessons.map((lesson, index) => (
        <li
          key={lesson._id}
          onClick={() => setCurrentLessonIndex(index)}
          style={{
            cursor: "pointer",
            fontWeight: currentLessonIndex === index ? "bold" : "normal",
            padding: "5px 0",
          }}
        >
          Lesson {index + 1}: {lesson.title}
        </li>
      ))}
    </ul>
  </div>
);

const LessonDetail = ({ lesson, handleNext, handlePrevious, isNextDisabled, isPreviousDisabled, handleAssessment }) => {
  if (!lesson) return <div>Loading...</div>;

  return (
    <div style={{ width: "70%", padding: "10px" }}>
      <h2>{lesson.title}</h2>
      <video width="100%" controls>
        <source src={lesson.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{lesson.content}</p>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button
          className="bg-slate-500 text-white rounded"
          onClick={handlePrevious}
          disabled={isPreviousDisabled}
          style={{ padding: "10px 20px", cursor: isPreviousDisabled ? "not-allowed" : "pointer" }}
        >
          Previous
        </button>
        {lesson.isLast && (
          <button
            className="bg-teal-500 text-white rounded"
            onClick={handleAssessment}
            style={{ padding: "10px 20px" }}
          >
            Assessment
          </button>
        )}
        {!lesson.isLast && (
          <button
            className="bg-teal-500 text-white rounded"
            onClick={handleNext}
            disabled={isNextDisabled}
            style={{ padding: "10px 20px", cursor: isNextDisabled ? "not-allowed" : "pointer" }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

const Calendar = () => {
  const [lessons, setLessons] = useState([]);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showQuestions, setShowQuestions] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setLessons(result.data);
    };

    getData();
  }, []);

  const fetchQuestions = async (lessonId) => {
    const requestOptions = {
      method: "GET",
    };

    const response = await fetch(`http://localhost:5000/api/quest/lesson/${lessonId}`, requestOptions);
    const data = await response.json();
    return data;
  };

  const handleNext = async () => {
    const currentLessonId = lessons[currentLessonIndex]._id;
    const result = await fetchQuestions(currentLessonId);
    setQuestions(result.data);
    setShowQuestions(true);
  };

  const handleAssessment = async () => {
    const currentLessonId = lessons[currentLessonIndex]._id;
    const result = await fetchQuestions(currentLessonId);
    setQuestions(result.data);
    setShowQuestions(true);
  };

  const closeModal = () => {
    setShowQuestions(false);
  };

  const handleSubmitQuiz = async (score) => {
    setShowQuestions(false);
    if (score < 80) {
      if (currentLessonIndex > 0) {
        setCurrentLessonIndex(currentLessonIndex - 1);
      }
    } else {
      if (currentLessonIndex < lessons.length - 1) {
        setCurrentLessonIndex(currentLessonIndex + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const progress = ((currentLessonIndex + 1) / lessons.length) * 100;

  return (
    <div>
      {showQuestions && (
        <QuestionModal
          questions={questions}
          closeModal={closeModal}
          handleSubmitQuiz={handleSubmitQuiz}
        />
      )}

      <ProgressBar progress={progress} />

      <div style={{ display: "flex" }}>
        <LessonList
          lessons={lessons}
          setCurrentLessonIndex={setCurrentLessonIndex}
          currentLessonIndex={currentLessonIndex}
        />

        <LessonDetail
          lesson={lessons[currentLessonIndex]}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          isNextDisabled={currentLessonIndex >= lessons.length - 1}
          isPreviousDisabled={currentLessonIndex <= 0}
          handleAssessment={currentLessonIndex === lessons.length - 1 ? handleAssessment : null}
        />
      </div>
    </div>
  );
};

export default Calendar;

