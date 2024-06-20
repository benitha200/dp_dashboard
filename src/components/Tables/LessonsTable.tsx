"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/types/brand";
import Cookies from "cookies-js";
import { useRouter } from 'next/navigation';

const LessonsTable = () => {
  const router = useRouter();
  const [lessons, setLessons] = useState([]);
  

  useEffect(() => {
    const fetchCourses = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `${Cookies.get('token')}`);

      const searchParams = new URLSearchParams(window.location.search);
      const idParam = searchParams.get("id");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      try {
        const response = await fetch(`http://localhost:5000/api/lesson/course/${idParam}`, requestOptions);

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const result = await response.json();
        setLessons(result.data); // assuming the response contains an array of courses

//         const myHeaders = new Headers();
// myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY2NmMzMDUyOTYwZGFkMTZmNWQ1Yzg4NSIsInVzZXJuYW1lIjoiY2hyaXMiLCJlbWFpbCI6ImNocmlzQGdtYWlsLmNvbSIsInJvbGUiOiJkcG8iLCJfX3YiOjB9LCJpYXQiOjE3MTg3MzQ4NzAsImV4cCI6MTcxODczODQ3MH0.021out2jFRjoIx_i4CvxoUQLWo6gWp5pLl6KGPuH8h4");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("localhost:5000/api/lesson/course/667080130f3c4fc79a28cc56", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleViewCourse = (courseId) => {
    router.push(`/course/${courseId}`); // Utilizing the useRouter hook to redirect to the course detail page
    // window.location.href = `http://localhost:3001/lessons/${courseId}`;
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">

        <button className="bg-green-500 p-3 m-3 rounded text-white ml-auto mr-4"><a href="/lessons/new">Add Lesson</a> </button>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Introduction to Data Protection Lessons</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Lesson Title</h5>
          </div>
          <div className="p-2.5 text-left xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Description</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
          </div>
        </div>

        {lessons.map((lesson, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 ${
              key === lesson.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"
            }`}
            key={lesson._id}
          >

            <div className="flex items-left justify-left p-2.5 xl:p-5">
              <p className="text-meta-3">{lesson.title}</p>
            </div>

            <div className="flex items-left justify-left p-2.5 xl:p-5">
                <p className="text-black dark:text-white overflow-hidden truncate">
                    {lesson.content}
                </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button
                className="bg-blue-500 text-white rounded py-1 px-3 w-25"
                onClick={() => handleViewCourse(lesson._id)}
              >
                View
              </button>
              <button
                className="bg-teal-500 ml-2 text-white rounded py-1 px-3 w-25"
                onClick={() => handleViewCourse(lesson._id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonsTable;
