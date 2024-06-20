"use client"

import React, { useState } from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import { useRouter } from 'next/navigation';
import * as XLSX from 'xlsx'; 

const Reports = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reportType, setReportType] = useState('');
  const [reportData, setReportData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchReport = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/data/approved?startDate=${startDate}&&endDate=${endDate}`, {
        method: "GET",
        redirect: "follow"
      });

      if (!response.ok) throw new Error("Failed to fetch report data");

      const result = await response.json();
      setReportData(result.data);
    } catch (error) {
      console.error("Error fetching report data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reportType === "datacontroller") {
      fetchReport();
    }
    if (reportType === "dataprocessor") {
      fetchReport();
    }
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(reportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    XLSX.writeFile(wb, "report.xlsx");
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit} className="w-full flex flex-row mx-auto justify-between  dark:bg-dark p-2 ">
        <div className="w-1/4">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 ml-2">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 pl-3 pr-2 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="w-1/4">
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 pl-3 pr-10 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="w-1/4">
          <label htmlFor="reportType" className="block text-sm font-medium text-gray-700">Report Type</label>
          <select
            id="reportType"
            name="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            className="mt-1 gap-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select Report Type</option>
            <option value="dataprocessor">Data Processor Certificate Issued Report</option>
            <option value="datacontroller">Data Controller Certificate Issued Report</option>
            {/* <option value="dpotrainings">DPO Trainings Report</option> */}
          </select>
        </div>
        <div className="w-1/6">
          <button
            type="submit"
            className="w-full mt-5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Report
          </button>
        </div>
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="overflow-x-auto mt-5">
          <h2 className='text-2xl font-bold'>Data Controller Certificate Issued Report</h2>
          <button
            onClick={exportToExcel}
            className="mt-5 py-2 px-4 mb-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download Excel
          </button>
          <table className="table-auto border-collapse w-full text-left border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Entity Name</th>
                <th className="border border-gray-300 px-4 py-2">Registration Number</th>
                <th className="border border-gray-300 px-4 py-2">License Number</th>
                <th className="border border-gray-300 px-4 py-2">Law Number</th>
                <th className="border border-gray-300 px-4 py-2">Presidential Order Number</th>
                <th className="border border-gray-300 px-4 py-2">Nature of Entity</th>
                <th className="border border-gray-300 px-4 py-2">Entity Sector</th>
                <th className="border border-gray-300 px-4 py-2">Entity Address</th>
                <th className="border border-gray-300 px-4 py-2">Phone Number</th>
                <th className="border border-gray-300 px-4 py-2">Email Address</th>
                <th className="border border-gray-300 px-4 py-2">Website</th>
                <th className="border border-gray-300 px-4 py-2">DPO Name</th>
                <th className="border border-gray-300 px-4 py-2">DPO Phone Number</th>
                <th className="border border-gray-300 px-4 py-2">DPO Email Address</th>
                <th className="border border-gray-300 px-4 py-2">Representative Name</th>
                <th className="border border-gray-300 px-4 py-2">Representative Phone Number</th>
                <th className="border border-gray-300 px-4 py-2">Representative Address</th>
                <th className="border border-gray-300 px-4 py-2">Representative Email Address</th>
                <th className="border border-gray-300 px-4 py-2">Representative Website</th>
                <th className="border border-gray-300 px-4 py-2">Category of Data Subjects</th>
                <th className="border border-gray-300 px-4 py-2">Purpose of Data Processing</th>
                <th className="border border-gray-300 px-4 py-2">Transfer of Personal Data Outside Rwanda</th>
                <th className="border border-gray-300 px-4 py-2">Transfer Country</th>
                <th className="border border-gray-300 px-4 py-2">Categories of Personal Data</th>
                <th className="border border-gray-300 px-4 py-2">Sensitive Personal Data</th>
                <th className="border border-gray-300 px-4 py-2">Additional Information</th>
                <th className="border border-gray-300 px-4 py-2">Declaration Name</th>
                <th className="border border-gray-300 px-4 py-2">Declaration Designation</th>
                <th className="border border-gray-300 px-4 py-2">Declaration Date</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((data, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{data.entity_name}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.registration_number}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.license_number}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.law_number}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.presidential_order_number}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.nature_of_entity}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.entity_sector}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.entity_address}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.phone_number}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.email_address}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.website}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.dpo_name}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.dpo_phone_number}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.dpo_email_address}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.representative_name}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.representative_phone_number}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.representative_address}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.representative_email_address}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.representative_website}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.category_of_data_subjects}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.purpose_of_data_processing}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.transfer_of_personal_data_outside_rwanda ? "Yes" : "No"}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.transfer_country}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.categories_of_personal_data}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.sensitive_personal_data ? "Yes" : "No"}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.additional_information}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.declaration_name}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.declaration_designation}</td>
                  <td className="border border-gray-300 px-4 py-2">{new Date(data.declaration_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button
            onClick={exportToExcel}
            className="mt-5 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download Excel
          </button> */}
        </div>
      )}
    </DefaultLayout>
  );
};

export default Reports;





