"use client";

import { useEffect, useState } from "react";
import { BRAND } from "@/types/brand";
import Cookies from "cookies-js";
import { useRouter } from "next/navigation";

const CoursesTable = () => {
  const [courses, setCourses] = useState<BRAND[]>([]);
  const router = useRouter(); // Directly importing useRouter here
  

  useEffect(() => {
    const fetchCourses = async () => {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `${Cookies.get('token')}`);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      try {
        const response = await fetch("http://localhost:5000/api/course/all", requestOptions);

        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }

        const result = await response.json();
        setCourses(result); // assuming the response contains an array of courses
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleViewCourse = (courseId) => {
    // router.push(`/lessons/${courseId}`);
    router.push(`/lessons?id=${encodeURIComponent(courseId)}`); 
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      
      <button className="bg-green-500 p-3 m-3 rounded text-white ml-auto mr-4"> <a href="/courses/new">Add Course</a> </button>
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">All Courses</h4>
      

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Title</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base truncate">Description</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">Actions</h5>
          </div>
        </div>

        {courses.map((course, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-3 ${
              key === courses.length - 1 ? "" : "border-b border-stroke dark:border-strokedark"
            }`}
            key={course._id}
          >

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{course.title}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{course.desc}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button
                className="bg-blue-500 text-white rounded py-1 px-3"
                onClick={() => handleViewCourse(course._id)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesTable;
