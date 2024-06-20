"use client"
import { Entity } from "@/types/entity";
import React, { useState,useRef, useEffect } from 'react';
import Modal from "./Modal";
import { Dialog } from 'primereact/dialog';
// import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const TableThree = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [entityType, setEntityType] = useState('Data Controller');
  const [selectedType, setSelectedType] = useState('Data Processor');
  const [entityData,setEntityData]=useState([])

  // function get_data(){
  //   const requestOptions = {
  //     method: "GET",
  //   };
    
  //   fetch("http://localhost:8000/data-processor/", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setEntityData(result)
  //       console.log(result)})
  //     .catch((error) => console.error(error));
  // }

  // useEffect(()=>{
  //   get_data();
  // })

  const getDataProcessor = () => {
    const requestOptions = {
      method: 'GET',
    };

    fetch('http://localhost:5000/api/processor/all', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEntityData(result.data);
        console.log(result.data);
      })
      .catch((error) => console.error(error));
  };

  const getDataController = () => {
    const requestOptions = {
      method: 'GET',
    };

    fetch('http://localhost:5000/api/data/all', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEntityData(result.data);
        console.log(result.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (selectedType === 'Data Processor') {
      getDataProcessor();
    } else {
      getDataController();
    }
  }, [selectedType]);


  // Dialog

  // const toast = useRef<Toast>(null);


  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  // const currentRows = entityData.slice(startIndex, endIndex);

  const openDialog = (data) => {
    setSelectedData(data);
    setVisible(true); // Open the dialog when a row is clicked
  };

  const hideDialog = () => {
    setSelectedData(null);
    setVisible(false); // Close the dialog when it's hidden
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    const type= e.target.value
    if (type === 'Data Processor') {
      getDataProcessor();
    } else {
      getDataController();
    }
  };

  
  function handleApprove(id:number){

    console.log(id)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({});

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw
    };

    if(selectedType==="Data Processor"){
      fetch(`http://localhost:5000/api/processor/approve/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        getDataProcessor
        toast.success("Application Approved Successfully")
      })
      .catch((error) => console.error(error));
    }
    else{
      fetch(`http://localhost:5000/api/data/approve/${id}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        getDataController();
        toast.success("Application Approved Successfully")
      })
      .catch((error) => console.error(error));
    }
    

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");


    // const requestOptions = {
    //   method: "PUT",
    //   headers: myHeaders
    // };

    // fetch(`http://127.0.0.1:8000/data-processor/${id}/approve/`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log("Approved successfuly")
    //     // if (toast.current) {
    //     //   toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have Approved', life: 3000 });
    //     // }
    //     getDataProcessor();
    //     console.log(result)
    //   })
    //   .catch((error) => console.error(error));

  }


  function handleReject(id:number){
    console.log(id)
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({});

    const requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw
    };

    if(selectedType==="Data Processor"){
      fetch(`http://localhost:5000/api/processor/reject/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          toast.success("application rejected successfully")
          console.log(result)
          getDataProcessor();
        })
          
        .catch((error) => console.error(error))
    }
    else{
      fetch(`http://localhost:5000/api/data/reject/${id}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          toast.success("application rejected successfully")
          getDataController();
          console.log(result)})
        .catch((error) => console.error(error))
    }

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");


    // const requestOptions = {
    //   method: "PUT",
    //   headers: myHeaders
    // };

    // fetch(`http://localhost:8000/data-processor/${id}/reject/`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log("Rejected successfuly")
    //     console.log(result)
    //   })
    //   .catch((error) => console.error(error));

  }



  return (
    <div>
      <div>
        <select value={selectedType} onChange={handleTypeChange} className="w-50 h-10 mb-3">
          <option value="Data Processor" className="w-50 h-10">Data Processor</option>
          <option value="Data Controller" className="w-50 h-10">Data Controller</option>
        </select>
      </div>
    
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Entity Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Sector
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Nature of Entity
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Address
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {entityData.map((entityItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {entityItem.entity_name}
                  </h5>
                  <p className="text-sm">{entityItem.phoneNumber}</p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {entityItem.entity_sector}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {entityItem.nature_of_entity}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {entityItem.entity_address}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                {!entityItem.is_approved ? (
                  <div className="flex items-center space-x-3.5">
                    <button onClick={() => openDialog(entityItem)} className="hover:text-primary">
                     
                    </button>
                    <button className="bg-primary p-2 dark:text-white text-white rounded" onClick={() => handleApprove(entityItem._id)}>
                      Approve
                    </button>
                    <button className="bg-slate-400 p-2 dark:text-white text-white rounded" onClick={() => handleReject(entityItem._id)}>
                      Reject
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3.5">
                    <button onClick={() => openDialog(entityItem)} className="hover:text-primary">
                    
                    </button>
                    <div className="text-green-600">Approved</div>
                  </div>
                )}

                 
                  
                  {/* <ConfirmDialog />
                  <div className="card flex flex-wrap gap-2 justify-content-center">
                      <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                      <Button onClick={confirm2} icon="pi pi-times" label="Delete"></Button>
                  </div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="bg-secondary text-black px-4 py-2 rounded"
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {Math.ceil(entityData.length / rowsPerPage)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= entityData.length}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>

      
        {/* <Dialog header="Header" visible={visible} style={{ width: '50vw',backgroundColor:"white",padding:"5rem" }} onHide={() => {if (!visible) return; setVisible(false); }}>
                <p className="m-0">
                  Data
                </p>
        </Dialog> */}
<Dialog
  header={selectedData?.entityName || 'Header'}
  visible={visible}
  style={{ width: '50vw', backgroundColor: 'white', padding: '1rem' }}
  onHide={hideDialog}
>
  {selectedData && (
    <div className="gap-2 card rounded">

      <p className="text-sm font-medium">ID: {selectedData.id}</p>
      <p className="text-sm font-medium">Entity Name: {selectedData.entityName}</p>
      <p className="text-sm font-medium">Registration Number: {selectedData.registrationNumber}</p>
      <p className="text-sm font-medium">License Number: {selectedData.licenseNumber}</p>
      <p className="text-sm font-medium">Law Number: {selectedData.lawNumber}</p>
      <p className="text-sm font-medium">Presidential Order Number: {selectedData.presidentialOrderNumber}</p>
      <p className="text-sm font-medium">Nature of Entity: {selectedData.natureOfEntity}</p>
      <p className="text-sm font-medium">Entity Sector: {selectedData.entitySector}</p>
      <p className="text-sm font-medium">Entity Address: {selectedData.entityAddress}</p>
      <p className="text-sm font-medium">Phone Number: {selectedData.phoneNumber}</p>
      <p className="text-sm font-medium">Email Address: {selectedData.emailAddress}</p>
      <p className="text-sm font-medium">Website: {selectedData.website}</p>
      <p className="text-sm font-medium">DPO Name: {selectedData.dpoName}</p>
      <p className="text-sm font-medium">DPO Phone Number: {selectedData.dpoPhoneNumber}</p>
      <p className="text-sm font-medium">DPO Email Address: {selectedData.dpoEmailAddress}</p>
      <p className="text-sm font-medium">Representative Name: {selectedData.representativeName}</p>
      <p className="text-sm font-medium">Representative Phone Number: {selectedData.representativePhoneNumber}</p>
      <p className="text-sm font-medium">Representative Address: {selectedData.representativeAddress}</p>
      <p className="text-sm font-medium">Representative Email: {selectedData.representativeEmail}</p>
      <p className="text-sm font-medium">Representative Website: {selectedData.representativeWebsite}</p>
      <p className="text-sm font-medium">Category of Data Subjects: {selectedData.categoryOfDataSubjects}</p>
      <p className="text-sm font-medium">Purpose of Data Processing: {selectedData.purposeOfDataProcessing}</p>
      <p className="text-sm font-medium">Transfer of Personal Data Outside Rwanda: {selectedData.transferOfPersonalDataOutsideRwanda ? 'Yes' : 'No'}</p>
      <p className="text-sm font-medium">Transfer Country: {selectedData.transferCountry}</p>
      <p className="text-sm font-medium">Categories of Personal Data: {selectedData.categoriesOfPersonalData}</p>
      <p className="text-sm font-medium">Sensitive Personal Data: {selectedData.sensitivePersonalData ? 'Yes' : 'No'}</p>
      <p className="text-sm font-medium">Additional Information: {selectedData.additionalInformation}</p>
      <p className="text-sm font-medium">Declaration Name: {selectedData.declarationName}</p>
      <p className="text-sm font-medium">Declaration Designation: {selectedData.declarationDesignation}</p>
      <p className="text-sm font-medium">Declaration Date: {selectedData.declarationDate}</p>
    </div>
  )}
</Dialog>

<ToastContainer/>
    </div>
    </div>
  );
};

export default TableThree;
