"use client"
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { useRouter } from 'next/navigation';
import { useState } from "react";

const Calendar = () => {
  const router = useRouter();
  // Define an array of lessons
  const lessons = ['Lesson 1: Understanding Data Protection', 'Lesson 2: Legal Frameworks and Regulations', 'Lesson 3: Data Protection Strategies and Policies', 'Lesson 4: Data Security Measures', 'Lesson 5: Data Protection in Practice', 'Lesson 6: Future Trends and Emerging Issues in Data Protection'];

  // Define an array of lesson content
  const lessonContent = [
    {
      title: 'Lesson 1: Understanding Data Protection',
      content: [
        'In the first lesson, students will be introduced to the fundamental concepts and principles of data protection. The lesson begins with a definition of data protection and an explanation of its growing importance in the digital era.',
        'Students will learn key terminology, such as data subject, data controller, and data processor, and understand what constitutes personal data.',
        'The lesson will cover the core principles of data protection, including lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, confidentiality, and accountability.',
        'Through interactive discussions and a quiz, students will gain a solid foundation in the basics of data protection.'
      ],
      videoUrl: 'https://www.youtube.com/embed/8xoOLerFOwg',
      questions: [
        { question: 'What is the definition of data protection?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
        { question: 'Who is a data subject?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
        // Add more questions here
      ]
    },
    {
      title: 'Lesson 2: Legal Frameworks and Regulations',
      content: [
        'The second lesson focuses on the various legal frameworks and regulations that govern data protection worldwide. Students will receive an overview of major laws such as the GDPR (Europe), CCPA (California), HIPAA (USA), and PIPEDA (Canada), along with other significant global regulations.',
        'The lesson will delve into the rights of data subjects under these laws, such as the right to access, rectification, erasure, and data portability.',
        'It will also outline the responsibilities of organizations, highlighting the differences between data controllers and processors, and the importance of conducting Data Protection Impact Assessments (DPIAs).',
        'Through case studies and group discussions, students will explore the real-world implications of these regulations and the consequences of non-compliance.'
      ],
      videoUrl: 'https://www.youtube.com/embed/8xoOLerFOwg',
      questions: [
        { question: 'What is GDPR?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
        { question: 'What is a data controller?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
        // Add more questions here
      ]
    },
    {
      title: 'Lesson 3: Data Protection Strategies and Policies',
      content: [
        'In the third lesson, students will learn how to develop and implement effective data protection strategies and policies. This lesson will guide students through the process of identifying data protection goals and aligning them with business objectives.',
        'Students will learn about the essential elements of a robust data protection policy, including data handling procedures and compliance measures.',
        'Practical exercises, such as drafting a data protection policy and conducting a DPIA, will help students apply these concepts in real-world scenarios.'
      ],
      videoUrl: 'https://www.youtube.com/embed/SuNtmCgIhiM',
      questions: [
        { question: 'What is a data protection policy?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
        { question: 'What is DPIA?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
        // Add more questions here
      ]
    },
    {
      title: 'Lesson 4: Data Security Measures',
      content: [
        'Lesson four covers the technical and organizational measures necessary to ensure data security. Students will learn about encryption techniques, pseudonymization, and anonymization as methods to protect data.',
        'The lesson will also discuss access controls, identity management, and the importance of regular employee training.',
        'Common data security threats, such as phishing, malware, and insider threats, will be examined, along with strategies to mitigate these risks.',
        'The lesson will outline the steps to develop a comprehensive data breach response plan and actions to take following a breach.',
        'Hands-on activities, including demonstrations of encryption tools and a role-playing exercise for data breach response, will reinforce the lesson content.'
      ],
      videoUrl: 'https://www.youtube.com/embed/Abta0j826Bk',
      questions: [
        { question: 'What is encryption?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
        { question: 'What is a data breach?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
        // Add more questions here
      ]
    },
    {
      title: 'Lesson 5: Data Protection in Practice',
      content: [
        'The fifth lesson focuses on the practical application of data protection principles within organizations. Students will learn about the role and responsibilities of Data Protection Officers (DPOs) and the importance of their independence.',
        'The lesson will cover the necessity of regular training and awareness programs for employees to ensure compliance with data protection policies.',
        'Students will also learn about vendor and third-party management, emphasizing the need for thorough due diligence and effective contracts.',
        'Procedures for handling Data Subject Access Requests (DSARs) will be detailed, ensuring students understand how to process these requests compliantly.',
        'Practical simulations and case studies will provide students with hands-on experience.'
      ],
      videoUrl: 'https://www.youtube.com/embed/LV9w8Ajs1Sw',
      questions: [
        { question: 'Who is a DPO?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
        { question: 'What is a DSAR?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
        // Add more questions here
      ]
    },
    {
      title: 'Lesson 6: Future Trends and Emerging Issues in Data Protection',
      content: [
        'The final lesson explores the future trends and emerging issues in data protection. Students will discuss the impact of new technologies, such as artificial intelligence, machine learning, and the Internet of Things (IoT), on data protection.',
        'The lesson will examine anticipated changes in data protection laws and the potential for new international standards.',
        'Ethical considerations surrounding data collection and use will be debated, focusing on balancing innovation with privacy.',
        'The lesson will also address the challenges of cross-border data transfers and the evolving threat landscape.',
        'Through group discussions and predictive analysis exercises, students will prepare for future developments in data protection.'
      ],
      videoUrl: 'https://www.youtube.com/embed/acijNEErf-c',
      questions: [
        { question: 'What is AI?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
        { question: 'What is IoT?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
        // Add more questions here
      ]
    }
  ];

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isQuizVisible, setIsQuizVisible] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState(Array(5).fill(''));
  const [quizAttempts, setQuizAttempts] = useState(0);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');

  const goToNextLesson = () => {
    if (isQuizVisible) {
      setIsQuizVisible(false);
      const correctAnswers = lessonContent[currentLessonIndex].questions.filter((q, i) => q.answer === quizAnswers[i]).length;
      const scorePercentage = (correctAnswers / lessonContent[currentLessonIndex].questions.length) * 100;

      if (scorePercentage >= 80) {
        setMessage(`You passed the quiz with a score of ${scorePercentage}%.`);
        setQuizAttempts(0);
        setProgress((currentLessonIndex + 1) / lessons.length * 100);
        if (currentLessonIndex < lessons.length - 1) {
          setCurrentLessonIndex(currentLessonIndex + 1);
        } else {
          router.push('/profile');
        }
      } else {
        setMessage(`You failed the quiz with a score of ${scorePercentage}%. Please try again.`);
        if (quizAttempts === 1) {
          setQuizAttempts(0);
          if (currentLessonIndex > 0) {
            setCurrentLessonIndex(currentLessonIndex - 1);
          }
        } else {
          setQuizAttempts(quizAttempts + 1);
        }
      }
    } else {
      setIsQuizVisible(true);
    }
  };

  const goToPreviousLesson = () => {
    if (isQuizVisible) {
      setIsQuizVisible(false);
    } else {
      if (currentLessonIndex > 0) {
        setCurrentLessonIndex(currentLessonIndex - 1);
      }
    }
  };

  const handleQuizAnswerChange = (index:number, answer:string) => {
    const newQuizAnswers = [...quizAnswers];
    newQuizAnswers[index] = answer;
    setQuizAnswers(newQuizAnswers);
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Course" />

      {/* ====== Progress Bar Start ====== */}
      <div className="w-full bg-gray-200 h-6 rounded-md mb-4 relative">
        <div
          className="bg-blue-500 h-full rounded-md"
          style={{ width: `${Math.round(progress)}%` }}
        ></div>
        <div className="absolute inset-0 flex justify-center items-center text-white font-semibold">
          {Math.round(progress)}%
        </div>
      </div>
      {/* ====== Progress Bar End ====== */}

      {/* ====== Layout Start ====== */}
      <div className="flex">
        {/* ====== Lessons List Section Start ====== */}
        <div className="w-1/4 p-4 border-r">
          <h2 className="text-xl font-bold mb-4">Lessons</h2>
          <ul>
            {lessons.map((lesson, index) => (
              <li key={index} className={`mb-2 ${index === currentLessonIndex ? 'font-bold' : ''}`}>
                {lesson}
              </li>
            ))}
          </ul>
        </div>
        {/* ====== Lessons List Section End ====== */}

        {/* ====== Course Content Section Start ====== */}
        <div className="w-3/4 p-4">
          {isQuizVisible ? (
            <div className="card">
              <h1 className="text-2xl font-bold mb-4">Quiz for {lessonContent[currentLessonIndex].title}</h1>
              {lessonContent[currentLessonIndex].questions.map((question, index) => (
                <div key={index} className="mb-4">
                  <p>{question.question}</p>
                  {question.options.map((option, i) => (
                    <div key={i}>
                      <input
                        type="radio"
                        id={`question-${index}-option-${i}`}
                        name={`question-${index}`}
                        value={option}
                        checked={quizAnswers[index] === option}
                        onChange={() => handleQuizAnswerChange(index, option)}
                      />
                      <label htmlFor={`question-${index}-option-${i}`}>{option}</label>
                    </div>
                  ))}
                </div>
              ))}
              <button onClick={goToNextLesson} className="bg-primary text-white py-2 px-4 rounded">
                Submit Quiz
              </button>
              {message && <div className="mt-4 text-center font-semibold">{message}</div>}
            </div>
          ) : (
            <div className="card">
              <h1 className="text-2xl font-bold mb-4">{lessonContent[currentLessonIndex].title}</h1>
              <div className="relative w-full overflow-hidden mb-4" style={{ height: '50vh' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={lessonContent[currentLessonIndex].videoUrl}
                  allowFullScreen
                  title={`Lesson ${currentLessonIndex + 1} Video`}
                ></iframe>
              </div>
              {lessonContent[currentLessonIndex].content.map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          )}
          <div className="mt-4 flex justify-between">
            <button onClick={goToPreviousLesson} disabled={currentLessonIndex === 0 && !isQuizVisible} className="mr-2 bg-secondary text-black py-2 px-4 rounded">
              Previous
            </button>
            <button onClick={goToNextLesson} className="bg-primary text-white py-2 px-4 rounded">
              {isQuizVisible ? 'Submit Quiz' : (currentLessonIndex === lessons.length - 1 ? 'Take Assessment' : 'Next')}
            </button>
          </div>
        </div>
        {/* ====== Course Content Section End ====== */}
      </div>
      {/* ====== Layout End ====== */}
    </div>
  );
}

export default Calendar;