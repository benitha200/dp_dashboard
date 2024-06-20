"use client"
import React, { useState } from 'react';

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    imageUrl: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formdata = new FormData();
    formdata.append("title", formData.title);
    formdata.append("desc", formData.desc);
    formdata.append("imageUrl", formData.imageUrl);

    try {
      const response = await fetch("http://localhost:5000/api/course/create", {
        method: "POST",
        body: formdata
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      setSubmitStatus('success');
      setFormData({ title: '', desc: '', imageUrl: null });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-9">
        <div className="rounded-sm w-1/2 border mx-auto border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add Course
            </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Title <span className="text-meta-1">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter course Title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Upload Course Image <span className="text-meta-1">*</span>
                </label>
                <input
                  type="file"
                  name="imageUrl"
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <textarea
                  name="desc"
                  rows={6}
                  placeholder="Type your message"
                  value={formData.desc}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="flex w-1/2 mx-auto justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Add course'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 mt-3 text-center">Course added successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 mt-3 text-center">Error adding course. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourseForm;