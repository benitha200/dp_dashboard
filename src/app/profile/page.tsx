"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useRouter } from "next/navigation";
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { degrees } from 'pdf-lib';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const Profile = () => {
  const router = useRouter();
  const [userAnswers, setUserAnswers] = useState<number[]>(Array(10).fill(-1)); // Array to store user's selected answers
  const [showResult, setShowResult] = useState(false); // State to control result display

  const questions = [
    "What does GDPR stand for?",
    "What is the purpose of data encryption?",
    "What is a Data Processing Agreement (DPA)?",
    "What is the difference between data controller and data processor?",
    "What are the main principles of data protection under GDPR?",
    "What is the purpose of a Privacy Impact Assessment (PIA)?",
    "What is two-factor authentication?",
    "What is the role of a Data Protection Officer (DPO)?",
    "What is the difference between data minimization and data retention?",
    "What are the consequences of a data breach under GDPR?",
  ];

  const options = [
    ["General Data Protection Regulation", "Global Data Privacy Regulation", "Government Data Processing Regulation", "General Data Processing Requirement"],
    ["To protect data from unauthorized access", "To compress data for storage efficiency", "To delete data permanently", "To anonymize data"],
    ["A legal contract governing data processing activities", "A software tool for data analysis", "A method of data encryption", "A protocol for data sharing"],
    ["Data controller determines the purposes and means of processing, while data processor processes data on behalf of the controller", "There is no difference", "Data processor is responsible for data security, while data controller is responsible for data accuracy", "Data controller is responsible for data security, while data processor determines the purposes and means of processing"],
    ["Lawfulness, fairness, and transparency; purpose limitation; data minimization; accuracy; storage limitation; integrity and confidentiality (security)", "Confidentiality, integrity, and availability", "Purpose limitation, data minimization, accuracy, storage limitation, integrity, and confidentiality", "Consent, notice, and access"],
    ["To identify and mitigate privacy risks associated with data processing activities", "To assess the financial impact of a data breach", "To audit data security controls", "To analyze customer behavior"],
    ["A method of authentication requiring two different forms of identification", "A method of securing data using two different encryption algorithms", "A method of data classification", "A method of data anonymization"],
    ["To ensure compliance with data protection laws and regulations", "To manage data storage infrastructure", "To conduct security vulnerability assessments", "To manage data access controls"],
    ["Data minimization is about reducing the amount of data collected and stored, while data retention is about how long data is kept", "There is no difference", "Data minimization is about minimizing data security risks, while data retention is about data accuracy", "Data minimization is about data accuracy, while data retention is about data security"],
    ["Fines of up to €20 million or 4% of global annual turnover, whichever is higher", "Fines of up to €10 million or 2% of global annual turnover, whichever is higher", "No consequences", "Reputation damage and loss of customer trust"],
  ];

  const correctAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array to store the index of correct answers for each question

  // Function to handle selecting an option for a question
  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  // Function to calculate the total number of correct answers
  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === correctAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  // Function to handle finishing the assessment
  const finishAssessment = () => {
    const confirmation = window.confirm("Are you sure you want to submit?");
    if (confirmation) {
      setShowResult(true); // Display the result
    }
  };

  // Calculate assessment result if it should be displayed
  const score = showResult ? calculateScore() : null;
  const totalQuestions = questions.length;
  const percentage = score !== null ? (score / totalQuestions) * 100 : null;

  // Function to repeat the test
  const repeatTest = () => {
    setUserAnswers(Array(10).fill(-1));
    setShowResult(false);
  };

  // Function to generate a certificate
  const generateCertificate = async () => {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([800, 500]);
    const { width, height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const name = 'Mujawimana Rosine';
    const course = 'Data Protection Practice';

    // Draw the header section with the new color
    const headerHeight = height * 0.2; // 20% of the height
    page.drawRectangle({
      x: 0,
      y: height - headerHeight,
      width,
      height: headerHeight,
      color: rgb(23 / 255, 37 / 255, 84 / 255),
    });

    // Draw the course title in white color
    page.drawText(course, {
      x: width / 2 - (course.length * 6),
      y: height - headerHeight / 2,
      size: 24,
      font,
      color: rgb(1, 1, 1),
    });

    // Draw the certificate text
    page.drawText('Certificate of Completion', {
      x: width / 2 - 150,
      y: height - 50 - headerHeight,
      size: 24,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(`This is to certify that ${name}`, {
      x: width / 2 - 200,
      y: height - 150 - headerHeight,
      size: 18,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText(`has successfully completed the course titled "${course}".`, {
      x: 50,
      y: height - 200 - headerHeight,
      size: 18,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText('This certificate is awarded as a testament to the hard work and dedication demonstrated by', {
      x: 50,
      y: height - 250 - headerHeight,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });
    page.drawText('the recipient throughout the program.', {
      x: 50,
      y: height - 280 - headerHeight,
      size: 16,
      font,
      color: rgb(0, 0, 0),
    });

    // Draw the watermark
    const watermarkText = 'DATA PROTECTION';
    const watermarkFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const watermarkWidth = width * 0.6;
    const watermarkHeight = 100;
    const watermarkX = (width - watermarkWidth); // Center horizontally
    const watermarkY = height / 4; // Center vertically
    page.drawText(watermarkText, {
      x: watermarkX,
      y: watermarkY,
      size: 28,
      font: watermarkFont,
      color: rgb(0.8, 0.8, 0.8), // Light gray color
      rotate: degrees(45),
    });

    // Draw the border
    const borderWidth = 2; // Border width in pixels
    const borderColor = rgb(23 / 255, 37 / 255, 84 / 255); // Border color
    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: height,
      borderWidth,
      borderColor,
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  };

  const printCertificate = async () => {
    const pdfBytes = await generateCertificate();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="Evaluation Test" />
        {!showResult && (
          <div>
            {questions.map((question, questionIndex) => (
              <div key={questionIndex}>
                <h2 className="mb-3 text-xl font-bold">{question}</h2>
                <ul style={{ listStyle: 'none', padding: 0, paddingLeft: "2rem", margin: 0 }}>
                  {options[questionIndex].map((option, index) => (
                    <li key={index} style={{ marginBottom: '1rem' }}>
                      <label className="text-xl">
                        <input
                          type="radio"
                          name={`question${questionIndex}`}
                          value={index}
                          checked={userAnswers[questionIndex] === index}
                          onChange={() => handleOptionSelect(questionIndex, index)}
                        />
                        {option}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="m-2 flex justify-center">
              <button onClick={finishAssessment} className="p-2 bg-black text-white rounded">Submit</button>
            </div>
          </div>
        )}
        {showResult && (
          <div className="flex flex-col justify-center items-center">
            <h2>Assessment Result:</h2>
            <p>Score: {score} / {totalQuestions}</p>
            <div style={{ width: '150px', height: '150px', margin: '20px auto' }}>
              <CircularProgressbar
                value={percentage !== null ? percentage : 0}
                text={`${percentage !== null ? percentage : 0}%`}
                styles={buildStyles({
                  textSize: '22px', // Increased text size
                  pathColor: percentage !== null && percentage >= 70 ? 'green' : 'red',
                  textColor: 'black',
                  trailColor: '#d6d6d6',
                  strokeLinecap: 'round', // Rounded line cap for the progress path
                  pathTransitionDuration: 0.5, // Slow down the progress path transition for a smoother appearance
                  backgroundColor: '#ffffff', // Set background color to white to cover the trail
                })}
              />
            </div>
            {percentage && percentage >= 70 ? (
              <button onClick={printCertificate} className="p-2 bg-primary text-white rounded w-1/4">Print Certificate</button>
            ) : (
              <button onClick={repeatTest} className="p-2 bg-black text-white rounded">Repeat Test</button>
            )}
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Profile;
