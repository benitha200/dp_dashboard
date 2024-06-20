"use client"
import React, { useState } from 'react';

const AddLessonForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData();
    formdata.append('title', title);
    formdata.append('content', content);
    if (videoFile) {
      formdata.append('videoUrl', videoFile);
    }

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    fetch('http://localhost:5000/api/lesson/create/667080130f3c4fc79a28cc56', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className=''>
      <div className="flex flex-col gap-9 ">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm w-1/2 border mx-auto border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add Lesson
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
                  placeholder="Enter lesson title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-4.5">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Upload Video <span className="text-meta-1">*</span>
                </label>
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => setVideoFile(e.target.files[0])}
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Type your description"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>

              <button type="submit" className="flex w-1/2 mx-auto justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Add Lesson
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddLessonForm;
