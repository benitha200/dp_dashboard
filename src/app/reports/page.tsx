"use client"
import React, { useState } from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { useRouter } from 'next/navigation';

const Reports = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportType, setReportType] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., navigate to a new page with the report data
    router.push(`/reports?startDate=${startDate}&endDate=${endDate}&reportType=${reportType}`);
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto shadow-3 dark:bg-dark p-10 gap-10">
        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 pl-3 pr-10 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 pl-3 pr-10 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">
            Report Type
          </label>
          <select
            id="reportType"
            name="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select report type</option>
            <option value="dataprocessor">Data Processor Certificate Issued Report</option>
            <option value="inventory">Data Processor Certificate Issued Report</option>
          </select>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Report
          </button>
        </div>
      </form>
      
    </DefaultLayout>
  );
};

export default Reports;


