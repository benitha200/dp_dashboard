"use client"
import { Entity } from "@/types/entity";
import React, { useState,useRef, useEffect } from 'react';
import Modal from "./Modal";
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';

const entityData1: Entity[] = [
  {
    id: 1,
    entityName: "Intouch Communications",
    registrationNumber: null,
    licenseNumber: null,
    lawNumber: null,
    presidentialOrderNumber: null,
    natureOfEntity: "Private",
    entitySector: "IT",
    entityAddress: "Kigali",
    phoneNumber: "Intouch Communications",
    emailAddress: "company@gmail.com",
    website: null,
    dpoName: "Rosine",
    dpoPhoneNumber: "0785348283",
    dpoEmailAddress: "benitha@gmail.com",
    representativeName: null,
    representativePhoneNumber: null,
    representativeAddress: null,
    representativeEmail: null,
    representativeWebsite: null,
    categoryOfDataSubjects: "Kigali",
    purposeOfDataProcessing: "Intouch Communications",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: null,
    categoriesOfPersonalData: "IT",
    sensitivePersonalData: true,
    additionalInformation: null,
    declarationName: "Tel Company",
    declarationDesignation: "IT",
    declarationDate: "2024-02-05",
  },
  {
    id: 2,
    entityName: "Tech Innovations",
    registrationNumber: "123456",
    licenseNumber: "LIC123456",
    lawNumber: "LAW123",
    presidentialOrderNumber: "PO123",
    natureOfEntity: "Public",
    entitySector: "Technology",
    entityAddress: "Kigali",
    phoneNumber: "Tech Innovations",
    emailAddress: "techinnovations@gmail.com",
    website: "www.techinnovations.com",
    dpoName: "John Doe",
    dpoPhoneNumber: "0785123456",
    dpoEmailAddress: "johndoe@gmail.com",
    representativeName: "Jane Smith",
    representativePhoneNumber: "0785234567",
    representativeAddress: "123 Tech Street",
    representativeEmail: "janesmith@gmail.com",
    representativeWebsite: "www.janesmith.com",
    categoryOfDataSubjects: "Tech Enthusiasts",
    purposeOfDataProcessing: "Data Analysis",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "User Data",
    sensitivePersonalData: false,
    additionalInformation: "None",
    declarationName: "Tech Innovations",
    declarationDesignation: "CEO",
    declarationDate: "2024-03-01",
  },
  {
    id: 3,
    entityName: "Health Services Ltd.",
    registrationNumber: "654321",
    licenseNumber: "LIC654321",
    lawNumber: "LAW654",
    presidentialOrderNumber: "PO654",
    natureOfEntity: "Private",
    entitySector: "Healthcare",
    entityAddress: "Kigali",
    phoneNumber: "Health Services Ltd.",
    emailAddress: "healthservices@gmail.com",
    website: "www.healthservices.com",
    dpoName: "Alice Johnson",
    dpoPhoneNumber: "0785345678",
    dpoEmailAddress: "alicejohnson@gmail.com",
    representativeName: "Bob Brown",
    representativePhoneNumber: "0785456789",
    representativeAddress: "456 Health Avenue",
    representativeEmail: "bobbrown@gmail.com",
    representativeWebsite: "www.bobbrown.com",
    categoryOfDataSubjects: "Patients",
    purposeOfDataProcessing: "Medical Records",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Kenya",
    categoriesOfPersonalData: "Health Data",
    sensitivePersonalData: true,
    additionalInformation: "Confidential",
    declarationName: "Health Services Ltd.",
    declarationDesignation: "CFO",
    declarationDate: "2024-03-15",
  },
  {
    id: 4,
    entityName: "EduCare Foundation",
    registrationNumber: "789123",
    licenseNumber: "LIC789123",
    lawNumber: "LAW789",
    presidentialOrderNumber: "PO789",
    natureOfEntity: "Non-Profit",
    entitySector: "Education",
    entityAddress: "Kigali",
    phoneNumber: "EduCare Foundation",
    emailAddress: "educarefoundation@gmail.com",
    website: "www.educarefoundation.com",
    dpoName: "Michael Green",
    dpoPhoneNumber: "0785567890",
    dpoEmailAddress: "michaelgreen@gmail.com",
    representativeName: "Laura White",
    representativePhoneNumber: "0785678901",
    representativeAddress: "789 Education Road",
    representativeEmail: "laurawhite@gmail.com",
    representativeWebsite: "www.laurawhite.com",
    categoryOfDataSubjects: "Students",
    purposeOfDataProcessing: "Academic Records",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Student Data",
    sensitivePersonalData: false,
    additionalInformation: "N/A",
    declarationName: "EduCare Foundation",
    declarationDesignation: "Chairperson",
    declarationDate: "2024-04-01",
  },
  {
    id: 5,
    entityName: "Green Energy Solutions",
    registrationNumber: "321987",
    licenseNumber: "LIC321987",
    lawNumber: "LAW321",
    presidentialOrderNumber: "PO321",
    natureOfEntity: "Private",
    entitySector: "Energy",
    entityAddress: "Kigali",
    phoneNumber: "Green Energy Solutions",
    emailAddress: "greenenergy@gmail.com",
    website: "www.greenenergy.com",
    dpoName: "Sarah Adams",
    dpoPhoneNumber: "0785789012",
    dpoEmailAddress: "sarahadams@gmail.com",
    representativeName: "David Clark",
    representativePhoneNumber: "0785890123",
    representativeAddress: "321 Green Lane",
    representativeEmail: "davidclark@gmail.com",
    representativeWebsite: "www.davidclark.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Energy Usage Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Uganda",
    categoriesOfPersonalData: "Energy Data",
    sensitivePersonalData: false,
    additionalInformation: "Green Initiative",
    declarationName: "Green Energy Solutions",
    declarationDesignation: "COO",
    declarationDate: "2024-04-15",
  },
  {
    id: 6,
    entityName: "Finance First",
    registrationNumber: "456789",
    licenseNumber: "LIC456789",
    lawNumber: "LAW456",
    presidentialOrderNumber: "PO456",
    natureOfEntity: "Private",
    entitySector: "Finance",
    entityAddress: "Kigali",
    phoneNumber: "Finance First",
    emailAddress: "financefirst@gmail.com",
    website: "www.financefirst.com",
    dpoName: "Linda Brown",
    dpoPhoneNumber: "0785901234",
    dpoEmailAddress: "lindabrown@gmail.com",
    representativeName: "Robert Johnson",
    representativePhoneNumber: "0786012345",
    representativeAddress: "456 Finance Street",
    representativeEmail: "robertjohnson@gmail.com",
    representativeWebsite: "www.robertjohnson.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Financial Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Financial Data",
    sensitivePersonalData: true,
    additionalInformation: "Private Banking",
    declarationName: "Finance First",
    declarationDesignation: "CIO",
    declarationDate: "2024-05-01",
  },
  {
    id: 7,
    entityName: "Agriculture Advances",
    registrationNumber: "987654",
    licenseNumber: "LIC987654",
    lawNumber: "LAW987",
    presidentialOrderNumber: "PO987",
    natureOfEntity: "Public",
    entitySector: "Agriculture",
    entityAddress: "Kigali",
    phoneNumber: "Agriculture Advances",
    emailAddress: "agricultureadvances@gmail.com",
    website: "www.agricultureadvances.com",
    dpoName: "James Wilson",
    dpoPhoneNumber: "0786123456",
    dpoEmailAddress: "jameswilson@gmail.com",
    representativeName: "Patricia Miller",
    representativePhoneNumber: "0786234567",
    representativeAddress: "987 Farm Road",
    representativeEmail: "patriciamiller@gmail.com",
    representativeWebsite: "www.patriciamiller.com",
    categoryOfDataSubjects: "Farmers",
    purposeOfDataProcessing: "Agricultural Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Tanzania",
    categoriesOfPersonalData: "Agricultural Data",
    sensitivePersonalData: false,
    additionalInformation: "Rural Development",
    declarationName: "Agriculture Advances",
    declarationDesignation: "Managing Director",
    declarationDate: "2024-05-15",
  },
  {
    id: 8,
    entityName: "Retail Reach",
    registrationNumber: "654321",
    licenseNumber: "LIC654321",
    lawNumber: "LAW654",
    presidentialOrderNumber: "PO654",
    natureOfEntity: "Private",
    entitySector: "Retail",
    entityAddress: "Kigali",
    phoneNumber: "Retail Reach",
    emailAddress: "retailreach@gmail.com",
    website: "www.retailreach.com",
    dpoName: "Emma Davis",
    dpoPhoneNumber: "0786345678",
    dpoEmailAddress: "emmadavis@gmail.com",
    representativeName: "Daniel Lee",
    representativePhoneNumber: "0786456789",
    representativeAddress: "654 Market Lane",
    representativeEmail: "daniellee@gmail.com",
    representativeWebsite: "www.daniellee.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Sales Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Sales Data",
    sensitivePersonalData: false,
    additionalInformation: "Retail Analytics",
    declarationName: "Retail Reach",
    declarationDesignation: "CMO",
    declarationDate: "2024-06-01",
  },
  {
    id: 9,
    entityName: "Logistics Link",
    registrationNumber: "852963",
    licenseNumber: "LIC852963",
    lawNumber: "LAW852",
    presidentialOrderNumber: "PO852",
    natureOfEntity: "Private",
    entitySector: "Logistics",
    entityAddress: "Kigali",
    phoneNumber: "Logistics Link",
    emailAddress: "logisticslink@gmail.com",
    website: "www.logisticslink.com",
    dpoName: "Olivia Martinez",
    dpoPhoneNumber: "0786567890",
    dpoEmailAddress: "oliviamartinez@gmail.com",
    representativeName: "Mark Rodriguez",
    representativePhoneNumber: "0786678901",
    representativeAddress: "852 Transport Avenue",
    representativeEmail: "markrodriguez@gmail.com",
    representativeWebsite: "www.markrodriguez.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Logistics Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Burundi",
    categoriesOfPersonalData: "Transport Data",
    sensitivePersonalData: false,
    additionalInformation: "Logistics Optimization",
    declarationName: "Logistics Link",
    declarationDesignation: "CTO",
    declarationDate: "2024-06-15",
  },
  {
    id: 10,
    entityName: "Food First",
    registrationNumber: "741852",
    licenseNumber: "LIC741852",
    lawNumber: "LAW741",
    presidentialOrderNumber: "PO741",
    natureOfEntity: "Public",
    entitySector: "Food & Beverage",
    entityAddress: "Kigali",
    phoneNumber: "Food First",
    emailAddress: "foodfirst@gmail.com",
    website: "www.foodfirst.com",
    dpoName: "Charlotte Wilson",
    dpoPhoneNumber: "0786789012",
    dpoEmailAddress: "charlottewilson@gmail.com",
    representativeName: "Henry Thompson",
    representativePhoneNumber: "0786890123",
    representativeAddress: "741 Culinary Street",
    representativeEmail: "henrythompson@gmail.com",
    representativeWebsite: "www.henrythompson.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Order Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Order Data",
    sensitivePersonalData: false,
    additionalInformation: "Food Analytics",
    declarationName: "Food First",
    declarationDesignation: "Head Chef",
    declarationDate: "2024-07-01",
  },
  {
    id: 11,
    entityName: "Media Masters",
    registrationNumber: "963852",
    licenseNumber: "LIC963852",
    lawNumber: "LAW963",
    presidentialOrderNumber: "PO963",
    natureOfEntity: "Private",
    entitySector: "Media",
    entityAddress: "Kigali",
    phoneNumber: "Media Masters",
    emailAddress: "mediamasters@gmail.com",
    website: "www.mediamasters.com",
    dpoName: "Ethan King",
    dpoPhoneNumber: "0786901234",
    dpoEmailAddress: "ethanking@gmail.com",
    representativeName: "Victoria Garcia",
    representativePhoneNumber: "0787012345",
    representativeAddress: "963 Media Avenue",
    representativeEmail: "victoriagarcia@gmail.com",
    representativeWebsite: "www.victoriagarcia.com",
    categoryOfDataSubjects: "Subscribers",
    purposeOfDataProcessing: "Subscription Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Ethiopia",
    categoriesOfPersonalData: "Media Data",
    sensitivePersonalData: false,
    additionalInformation: "Content Distribution",
    declarationName: "Media Masters",
    declarationDesignation: "Editor-in-Chief",
    declarationDate: "2024-07-15",
  },
  {
    id: 12,
    entityName: "Travel Together",
    registrationNumber: "258741",
    licenseNumber: "LIC258741",
    lawNumber: "LAW258",
    presidentialOrderNumber: "PO258",
    natureOfEntity: "Private",
    entitySector: "Travel & Tourism",
    entityAddress: "Kigali",
    phoneNumber: "Travel Together",
    emailAddress: "traveltogether@gmail.com",
    website: "www.traveltogether.com",
    dpoName: "Lucas Robinson",
    dpoPhoneNumber: "0787123456",
    dpoEmailAddress: "lucasrobinson@gmail.com",
    representativeName: "Sophia Martinez",
    representativePhoneNumber: "0787234567",
    representativeAddress: "258 Travel Road",
    representativeEmail: "sophiamartinez@gmail.com",
    representativeWebsite: "www.sophiamartinez.com",
    categoryOfDataSubjects: "Travelers",
    purposeOfDataProcessing: "Travel Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Booking Data",
    sensitivePersonalData: false,
    additionalInformation: "Travel Analytics",
    declarationName: "Travel Together",
    declarationDesignation: "Tour Director",
    declarationDate: "2024-08-01",
  },
  {
    id: 13,
    entityName: "Real Estate Experts",
    registrationNumber: "147852",
    licenseNumber: "LIC147852",
    lawNumber: "LAW147",
    presidentialOrderNumber: "PO147",
    natureOfEntity: "Private",
    entitySector: "Real Estate",
    entityAddress: "Kigali",
    phoneNumber: "Real Estate Experts",
    emailAddress: "realestateexperts@gmail.com",
    website: "www.realestateexperts.com",
    dpoName: "William White",
    dpoPhoneNumber: "0787345678",
    dpoEmailAddress: "williamwhite@gmail.com",
    representativeName: "Emma Johnson",
    representativePhoneNumber: "0787456789",
    representativeAddress: "147 Property Street",
    representativeEmail: "emmajohnson@gmail.com",
    representativeWebsite: "www.emmajohnson.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Property Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "South Africa",
    categoriesOfPersonalData: "Property Data",
    sensitivePersonalData: true,
    additionalInformation: "Real Estate Analysis",
    declarationName: "Real Estate Experts",
    declarationDesignation: "Broker",
    declarationDate: "2024-08-15",
  },
  {
    id: 14,
    entityName: "Fashion Forward",
    registrationNumber: "369852",
    licenseNumber: "LIC369852",
    lawNumber: "LAW369",
    presidentialOrderNumber: "PO369",
    natureOfEntity: "Private",
    entitySector: "Fashion",
    entityAddress: "Kigali",
    phoneNumber: "Fashion Forward",
    emailAddress: "fashionforward@gmail.com",
    website: "www.fashionforward.com",
    dpoName: "Ava Clark",
    dpoPhoneNumber: "0787567890",
    dpoEmailAddress: "avaclark@gmail.com",
    representativeName: "Liam Harris",
    representativePhoneNumber: "0787678901",
    representativeAddress: "369 Fashion Avenue",
    representativeEmail: "liamharris@gmail.com",
    representativeWebsite: "www.liamharris.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Sales Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Customer Data",
    sensitivePersonalData: false,
    additionalInformation: "Fashion Analytics",
    declarationName: "Fashion Forward",
    declarationDesignation: "Designer",
    declarationDate: "2024-09-01",
  },
  {
    id: 15,
    entityName: "Insurance Insight",
    registrationNumber: "753951",
    licenseNumber: "LIC753951",
    lawNumber: "LAW753",
    presidentialOrderNumber: "PO753",
    natureOfEntity: "Private",
    entitySector: "Insurance",
    entityAddress: "Kigali",
    phoneNumber: "Insurance Insight",
    emailAddress: "insuranceinsight@gmail.com",
    website: "www.insuranceinsight.com",
    dpoName: "James Martin",
    dpoPhoneNumber: "0787789012",
    dpoEmailAddress: "jamesmartin@gmail.com",
    representativeName: "Olivia Moore",
    representativePhoneNumber: "0787890123",
    representativeAddress: "753 Policy Lane",
    representativeEmail: "oliviamoore@gmail.com",
    representativeWebsite: "www.oliviamoore.com",
    categoryOfDataSubjects: "Policyholders",
    purposeOfDataProcessing: "Policy Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Nigeria",
    categoriesOfPersonalData: "Insurance Data",
    sensitivePersonalData: true,
    additionalInformation: "Risk Assessment",
    declarationName: "Insurance Insight",
    declarationDesignation: "Underwriter",
    declarationDate: "2024-09-15",
  },
  {
    id: 16,
    entityName: "Automotive Alliance",
    registrationNumber: "159753",
    licenseNumber: "LIC159753",
    lawNumber: "LAW159",
    presidentialOrderNumber: "PO159",
    natureOfEntity: "Private",
    entitySector: "Automotive",
    entityAddress: "Kigali",
    phoneNumber: "Automotive Alliance",
    emailAddress: "automotivealliance@gmail.com",
    website: "www.automotivealliance.com",
    dpoName: "Mia Thompson",
    dpoPhoneNumber: "0787901234",
    dpoEmailAddress: "miathompson@gmail.com",
    representativeName: "Noah Taylor",
    representativePhoneNumber: "0788012345",
    representativeAddress: "159 Auto Drive",
    representativeEmail: "noahtaylor@gmail.com",
    representativeWebsite: "www.noahtaylor.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Sales Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Automotive Data",
    sensitivePersonalData: false,
    additionalInformation: "Vehicle Analytics",
    declarationName: "Automotive Alliance",
    declarationDesignation: "Sales Director",
    declarationDate: "2024-10-01",
  },
  {
    id: 17,
    entityName: "Telecom Trends",
    registrationNumber: "951753",
    licenseNumber: "LIC951753",
    lawNumber: "LAW951",
    presidentialOrderNumber: "PO951",
    natureOfEntity: "Private",
    entitySector: "Telecommunications",
    entityAddress: "Kigali",
    phoneNumber: "Telecom Trends",
    emailAddress: "telecomtrends@gmail.com",
    website: "www.telecomtrends.com",
    dpoName: "Isabella Anderson",
    dpoPhoneNumber: "0788123456",
    dpoEmailAddress: "isabellaanderson@gmail.com",
    representativeName: "Elijah Robinson",
    representativePhoneNumber: "0788234567",
    representativeAddress: "951 Network Street",
    representativeEmail: "elijahrrobinson@gmail.com",
    representativeWebsite: "www.elijahrrobinson.com",
    categoryOfDataSubjects: "Subscribers",
    purposeOfDataProcessing: "Usage Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Mozambique",
    categoriesOfPersonalData: "Telecom Data",
    sensitivePersonalData: true,
    additionalInformation: "Network Optimization",
    declarationName: "Telecom Trends",
    declarationDesignation: "Network Manager",
    declarationDate: "2024-10-15",
  },
  {
    id: 18,
    entityName: "Construction Corner",
    registrationNumber: "357159",
    licenseNumber: "LIC357159",
    lawNumber: "LAW357",
    presidentialOrderNumber: "PO357",
    natureOfEntity: "Private",
    entitySector: "Construction",
    entityAddress: "Kigali",
    phoneNumber: "Construction Corner",
    emailAddress: "constructioncorner@gmail.com",
    website: "www.constructioncorner.com",
    dpoName: "Harper Martinez",
    dpoPhoneNumber: "0788345678",
    dpoEmailAddress: "harpermartinez@gmail.com",
    representativeName: "Aiden White",
    representativePhoneNumber: "0788456789",
    representativeAddress: "357 Builder Road",
    representativeEmail: "aidenwhite@gmail.com",
    representativeWebsite: "www.aidenwhite.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Project Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Construction Data",
    sensitivePersonalData: false,
    additionalInformation: "Project Management",
    declarationName: "Construction Corner",
    declarationDesignation: "Project Manager",
    declarationDate: "2024-11-01",
  },
  {
    id: 19,
    entityName: "Hospitality Hub",
    registrationNumber: "159357",
    licenseNumber: "LIC159357",
    lawNumber: "LAW159",
    presidentialOrderNumber: "PO159",
    natureOfEntity: "Private",
    entitySector: "Hospitality",
    entityAddress: "Kigali",
    phoneNumber: "Hospitality Hub",
    emailAddress: "hospitalityhub@gmail.com",
    website: "www.hospitalityhub.com",
    dpoName: "Amelia Brown",
    dpoPhoneNumber: "0788567890",
    dpoEmailAddress: "ameliabrown@gmail.com",
    representativeName: "Benjamin Davis",
    representativePhoneNumber: "0788678901",
    representativeAddress: "159 Hotel Lane",
    representativeEmail: "benjamindavis@gmail.com",
    representativeWebsite: "www.benjamindavis.com",
    categoryOfDataSubjects: "Guests",
    purposeOfDataProcessing: "Booking Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Guest Data",
    sensitivePersonalData: true,
    additionalInformation: "Guest Experience",
    declarationName: "Hospitality Hub",
    declarationDesignation: "Hotel Manager",
    declarationDate: "2024-11-15",
  },
  {
    id: 20,
    entityName: "Entertainment Empire",
    registrationNumber: "753159",
    licenseNumber: "LIC753159",
    lawNumber: "LAW753",
    presidentialOrderNumber: "PO753",
    natureOfEntity: "Private",
    entitySector: "Entertainment",
    entityAddress: "Kigali",
    phoneNumber: "Entertainment Empire",
    emailAddress: "entertainmentempire@gmail.com",
    website: "www.entertainmentempire.com",
    dpoName: "Evelyn Wilson",
    dpoPhoneNumber: "0788789012",
    dpoEmailAddress: "evelynwilson@gmail.com",
    representativeName: "Samuel Martinez",
    representativePhoneNumber: "0788890123",
    representativeAddress: "753 Music Lane",
    representativeEmail: "samuelmartinez@gmail.com",
    representativeWebsite: "www.samuelmartinez.com",
    categoryOfDataSubjects: "Subscribers",
    purposeOfDataProcessing: "Subscription Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Ghana",
    categoriesOfPersonalData: "Entertainment Data",
    sensitivePersonalData: false,
    additionalInformation: "Content Delivery",
    declarationName: "Entertainment Empire",
    declarationDesignation: "Director",
    declarationDate: "2024-12-01",
  },
  {
    id: 21,
    entityName: "Sports Solutions",
    registrationNumber: "951357",
    licenseNumber: "LIC951357",
    lawNumber: "LAW951",
    presidentialOrderNumber: "PO951",
    natureOfEntity: "Private",
    entitySector: "Sports",
    entityAddress: "Kigali",
    phoneNumber: "Sports Solutions",
    emailAddress: "sportssolutions@gmail.com",
    website: "www.sportssolutions.com",
    dpoName: "Grace Taylor",
    dpoPhoneNumber: "0788901234",
    dpoEmailAddress: "gracetaylor@gmail.com",
    representativeName: "Jack Wilson",
    representativePhoneNumber: "0789012345",
    representativeAddress: "951 Stadium Avenue",
    representativeEmail: "jackwilson@gmail.com",
    representativeWebsite: "www.jackwilson.com",
    categoryOfDataSubjects: "Athletes",
    purposeOfDataProcessing: "Performance Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Performance Data",
    sensitivePersonalData: true,
    additionalInformation: "Sports Analytics",
    declarationName: "Sports Solutions",
    declarationDesignation: "Coach",
    declarationDate: "2024-12-15",
  },
];
const entityData2: Entity[] = [
  {
    id: 1,
    entityName: "Intouch Communications Ltd",
    registrationNumber: null,
    licenseNumber: null,
    lawNumber: null,
    presidentialOrderNumber: null,
    natureOfEntity: "Private",
    entitySector: "IT",
    entityAddress: "Kigali",
    phoneNumber: "Intouch Communications",
    emailAddress: "company@gmail.com",
    website: null,
    dpoName: "Rosine",
    dpoPhoneNumber: "0785348283",
    dpoEmailAddress: "benitha@gmail.com",
    representativeName: null,
    representativePhoneNumber: null,
    representativeAddress: null,
    representativeEmail: null,
    representativeWebsite: null,
    categoryOfDataSubjects: "Kigali",
    purposeOfDataProcessing: "Intouch Communications",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: null,
    categoriesOfPersonalData: "IT",
    sensitivePersonalData: true,
    additionalInformation: null,
    declarationName: "Tel Company",
    declarationDesignation: "IT",
    declarationDate: "2024-02-05",
  },
  {
    id: 2,
    entityName: "Tech Innovations",
    registrationNumber: "123456",
    licenseNumber: "LIC123456",
    lawNumber: "LAW123",
    presidentialOrderNumber: "PO123",
    natureOfEntity: "Public",
    entitySector: "Technology",
    entityAddress: "Kigali",
    phoneNumber: "Tech Innovations",
    emailAddress: "techinnovations@gmail.com",
    website: "www.techinnovations.com",
    dpoName: "John Doe",
    dpoPhoneNumber: "0785123456",
    dpoEmailAddress: "johndoe@gmail.com",
    representativeName: "Jane Smith",
    representativePhoneNumber: "0785234567",
    representativeAddress: "123 Tech Street",
    representativeEmail: "janesmith@gmail.com",
    representativeWebsite: "www.janesmith.com",
    categoryOfDataSubjects: "Tech Enthusiasts",
    purposeOfDataProcessing: "Data Analysis",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "User Data",
    sensitivePersonalData: false,
    additionalInformation: "None",
    declarationName: "Tech Innovations",
    declarationDesignation: "CEO",
    declarationDate: "2024-03-01",
  },
  {
    id: 3,
    entityName: "Health Services Ltd.",
    registrationNumber: "654321",
    licenseNumber: "LIC654321",
    lawNumber: "LAW654",
    presidentialOrderNumber: "PO654",
    natureOfEntity: "Private",
    entitySector: "Healthcare",
    entityAddress: "Kigali",
    phoneNumber: "Health Services Ltd.",
    emailAddress: "healthservices@gmail.com",
    website: "www.healthservices.com",
    dpoName: "Alice Johnson",
    dpoPhoneNumber: "0785345678",
    dpoEmailAddress: "alicejohnson@gmail.com",
    representativeName: "Bob Brown",
    representativePhoneNumber: "0785456789",
    representativeAddress: "456 Health Avenue",
    representativeEmail: "bobbrown@gmail.com",
    representativeWebsite: "www.bobbrown.com",
    categoryOfDataSubjects: "Patients",
    purposeOfDataProcessing: "Medical Records",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Kenya",
    categoriesOfPersonalData: "Health Data",
    sensitivePersonalData: true,
    additionalInformation: "Confidential",
    declarationName: "Health Services Ltd.",
    declarationDesignation: "CFO",
    declarationDate: "2024-03-15",
  },
  {
    id: 4,
    entityName: "EduCare Foundation",
    registrationNumber: "789123",
    licenseNumber: "LIC789123",
    lawNumber: "LAW789",
    presidentialOrderNumber: "PO789",
    natureOfEntity: "Non-Profit",
    entitySector: "Education",
    entityAddress: "Kigali",
    phoneNumber: "EduCare Foundation",
    emailAddress: "educarefoundation@gmail.com",
    website: "www.educarefoundation.com",
    dpoName: "Michael Green",
    dpoPhoneNumber: "0785567890",
    dpoEmailAddress: "michaelgreen@gmail.com",
    representativeName: "Laura White",
    representativePhoneNumber: "0785678901",
    representativeAddress: "789 Education Road",
    representativeEmail: "laurawhite@gmail.com",
    representativeWebsite: "www.laurawhite.com",
    categoryOfDataSubjects: "Students",
    purposeOfDataProcessing: "Academic Records",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Student Data",
    sensitivePersonalData: false,
    additionalInformation: "N/A",
    declarationName: "EduCare Foundation",
    declarationDesignation: "Chairperson",
    declarationDate: "2024-04-01",
  },
  {
    id: 5,
    entityName: "Green Energy Solutions",
    registrationNumber: "321987",
    licenseNumber: "LIC321987",
    lawNumber: "LAW321",
    presidentialOrderNumber: "PO321",
    natureOfEntity: "Private",
    entitySector: "Energy",
    entityAddress: "Kigali",
    phoneNumber: "Green Energy Solutions",
    emailAddress: "greenenergy@gmail.com",
    website: "www.greenenergy.com",
    dpoName: "Sarah Adams",
    dpoPhoneNumber: "0785789012",
    dpoEmailAddress: "sarahadams@gmail.com",
    representativeName: "David Clark",
    representativePhoneNumber: "0785890123",
    representativeAddress: "321 Green Lane",
    representativeEmail: "davidclark@gmail.com",
    representativeWebsite: "www.davidclark.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Energy Usage Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Uganda",
    categoriesOfPersonalData: "Energy Data",
    sensitivePersonalData: false,
    additionalInformation: "Green Initiative",
    declarationName: "Green Energy Solutions",
    declarationDesignation: "COO",
    declarationDate: "2024-04-15",
  },
  {
    id: 6,
    entityName: "Finance First",
    registrationNumber: "456789",
    licenseNumber: "LIC456789",
    lawNumber: "LAW456",
    presidentialOrderNumber: "PO456",
    natureOfEntity: "Private",
    entitySector: "Finance",
    entityAddress: "Kigali",
    phoneNumber: "Finance First",
    emailAddress: "financefirst@gmail.com",
    website: "www.financefirst.com",
    dpoName: "Linda Brown",
    dpoPhoneNumber: "0785901234",
    dpoEmailAddress: "lindabrown@gmail.com",
    representativeName: "Robert Johnson",
    representativePhoneNumber: "0786012345",
    representativeAddress: "456 Finance Street",
    representativeEmail: "robertjohnson@gmail.com",
    representativeWebsite: "www.robertjohnson.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Financial Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Financial Data",
    sensitivePersonalData: true,
    additionalInformation: "Private Banking",
    declarationName: "Finance First",
    declarationDesignation: "CIO",
    declarationDate: "2024-05-01",
  },
  {
    id: 7,
    entityName: "Agriculture Advances",
    registrationNumber: "987654",
    licenseNumber: "LIC987654",
    lawNumber: "LAW987",
    presidentialOrderNumber: "PO987",
    natureOfEntity: "Public",
    entitySector: "Agriculture",
    entityAddress: "Kigali",
    phoneNumber: "Agriculture Advances",
    emailAddress: "agricultureadvances@gmail.com",
    website: "www.agricultureadvances.com",
    dpoName: "James Wilson",
    dpoPhoneNumber: "0786123456",
    dpoEmailAddress: "jameswilson@gmail.com",
    representativeName: "Patricia Miller",
    representativePhoneNumber: "0786234567",
    representativeAddress: "987 Farm Road",
    representativeEmail: "patriciamiller@gmail.com",
    representativeWebsite: "www.patriciamiller.com",
    categoryOfDataSubjects: "Farmers",
    purposeOfDataProcessing: "Agricultural Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Tanzania",
    categoriesOfPersonalData: "Agricultural Data",
    sensitivePersonalData: false,
    additionalInformation: "Rural Development",
    declarationName: "Agriculture Advances",
    declarationDesignation: "Managing Director",
    declarationDate: "2024-05-15",
  },
  {
    id: 8,
    entityName: "Retail Reach",
    registrationNumber: "654321",
    licenseNumber: "LIC654321",
    lawNumber: "LAW654",
    presidentialOrderNumber: "PO654",
    natureOfEntity: "Private",
    entitySector: "Retail",
    entityAddress: "Kigali",
    phoneNumber: "Retail Reach",
    emailAddress: "retailreach@gmail.com",
    website: "www.retailreach.com",
    dpoName: "Emma Davis",
    dpoPhoneNumber: "0786345678",
    dpoEmailAddress: "emmadavis@gmail.com",
    representativeName: "Daniel Lee",
    representativePhoneNumber: "0786456789",
    representativeAddress: "654 Market Lane",
    representativeEmail: "daniellee@gmail.com",
    representativeWebsite: "www.daniellee.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Sales Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Sales Data",
    sensitivePersonalData: false,
    additionalInformation: "Retail Analytics",
    declarationName: "Retail Reach",
    declarationDesignation: "CMO",
    declarationDate: "2024-06-01",
  },
  {
    id: 9,
    entityName: "Logistics Link",
    registrationNumber: "852963",
    licenseNumber: "LIC852963",
    lawNumber: "LAW852",
    presidentialOrderNumber: "PO852",
    natureOfEntity: "Private",
    entitySector: "Logistics",
    entityAddress: "Kigali",
    phoneNumber: "Logistics Link",
    emailAddress: "logisticslink@gmail.com",
    website: "www.logisticslink.com",
    dpoName: "Olivia Martinez",
    dpoPhoneNumber: "0786567890",
    dpoEmailAddress: "oliviamartinez@gmail.com",
    representativeName: "Mark Rodriguez",
    representativePhoneNumber: "0786678901",
    representativeAddress: "852 Transport Avenue",
    representativeEmail: "markrodriguez@gmail.com",
    representativeWebsite: "www.markrodriguez.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Logistics Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Burundi",
    categoriesOfPersonalData: "Transport Data",
    sensitivePersonalData: false,
    additionalInformation: "Logistics Optimization",
    declarationName: "Logistics Link",
    declarationDesignation: "CTO",
    declarationDate: "2024-06-15",
  },
  {
    id: 10,
    entityName: "Food First",
    registrationNumber: "741852",
    licenseNumber: "LIC741852",
    lawNumber: "LAW741",
    presidentialOrderNumber: "PO741",
    natureOfEntity: "Public",
    entitySector: "Food & Beverage",
    entityAddress: "Kigali",
    phoneNumber: "Food First",
    emailAddress: "foodfirst@gmail.com",
    website: "www.foodfirst.com",
    dpoName: "Charlotte Wilson",
    dpoPhoneNumber: "0786789012",
    dpoEmailAddress: "charlottewilson@gmail.com",
    representativeName: "Henry Thompson",
    representativePhoneNumber: "0786890123",
    representativeAddress: "741 Culinary Street",
    representativeEmail: "henrythompson@gmail.com",
    representativeWebsite: "www.henrythompson.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Order Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Order Data",
    sensitivePersonalData: false,
    additionalInformation: "Food Analytics",
    declarationName: "Food First",
    declarationDesignation: "Head Chef",
    declarationDate: "2024-07-01",
  },
  {
    id: 11,
    entityName: "Media Masters",
    registrationNumber: "963852",
    licenseNumber: "LIC963852",
    lawNumber: "LAW963",
    presidentialOrderNumber: "PO963",
    natureOfEntity: "Private",
    entitySector: "Media",
    entityAddress: "Kigali",
    phoneNumber: "Media Masters",
    emailAddress: "mediamasters@gmail.com",
    website: "www.mediamasters.com",
    dpoName: "Ethan King",
    dpoPhoneNumber: "0786901234",
    dpoEmailAddress: "ethanking@gmail.com",
    representativeName: "Victoria Garcia",
    representativePhoneNumber: "0787012345",
    representativeAddress: "963 Media Avenue",
    representativeEmail: "victoriagarcia@gmail.com",
    representativeWebsite: "www.victoriagarcia.com",
    categoryOfDataSubjects: "Subscribers",
    purposeOfDataProcessing: "Subscription Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Ethiopia",
    categoriesOfPersonalData: "Media Data",
    sensitivePersonalData: false,
    additionalInformation: "Content Distribution",
    declarationName: "Media Masters",
    declarationDesignation: "Editor-in-Chief",
    declarationDate: "2024-07-15",
  },
  {
    id: 12,
    entityName: "Travel Together",
    registrationNumber: "258741",
    licenseNumber: "LIC258741",
    lawNumber: "LAW258",
    presidentialOrderNumber: "PO258",
    natureOfEntity: "Private",
    entitySector: "Travel & Tourism",
    entityAddress: "Kigali",
    phoneNumber: "Travel Together",
    emailAddress: "traveltogether@gmail.com",
    website: "www.traveltogether.com",
    dpoName: "Lucas Robinson",
    dpoPhoneNumber: "0787123456",
    dpoEmailAddress: "lucasrobinson@gmail.com",
    representativeName: "Sophia Martinez",
    representativePhoneNumber: "0787234567",
    representativeAddress: "258 Travel Road",
    representativeEmail: "sophiamartinez@gmail.com",
    representativeWebsite: "www.sophiamartinez.com",
    categoryOfDataSubjects: "Travelers",
    purposeOfDataProcessing: "Travel Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Booking Data",
    sensitivePersonalData: false,
    additionalInformation: "Travel Analytics",
    declarationName: "Travel Together",
    declarationDesignation: "Tour Director",
    declarationDate: "2024-08-01",
  },
  {
    id: 13,
    entityName: "Real Estate Experts",
    registrationNumber: "147852",
    licenseNumber: "LIC147852",
    lawNumber: "LAW147",
    presidentialOrderNumber: "PO147",
    natureOfEntity: "Private",
    entitySector: "Real Estate",
    entityAddress: "Kigali",
    phoneNumber: "Real Estate Experts",
    emailAddress: "realestateexperts@gmail.com",
    website: "www.realestateexperts.com",
    dpoName: "William White",
    dpoPhoneNumber: "0787345678",
    dpoEmailAddress: "williamwhite@gmail.com",
    representativeName: "Emma Johnson",
    representativePhoneNumber: "0787456789",
    representativeAddress: "147 Property Street",
    representativeEmail: "emmajohnson@gmail.com",
    representativeWebsite: "www.emmajohnson.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Property Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "South Africa",
    categoriesOfPersonalData: "Property Data",
    sensitivePersonalData: true,
    additionalInformation: "Real Estate Analysis",
    declarationName: "Real Estate Experts",
    declarationDesignation: "Broker",
    declarationDate: "2024-08-15",
  },
  {
    id: 14,
    entityName: "Fashion Forward",
    registrationNumber: "369852",
    licenseNumber: "LIC369852",
    lawNumber: "LAW369",
    presidentialOrderNumber: "PO369",
    natureOfEntity: "Private",
    entitySector: "Fashion",
    entityAddress: "Kigali",
    phoneNumber: "Fashion Forward",
    emailAddress: "fashionforward@gmail.com",
    website: "www.fashionforward.com",
    dpoName: "Ava Clark",
    dpoPhoneNumber: "0787567890",
    dpoEmailAddress: "avaclark@gmail.com",
    representativeName: "Liam Harris",
    representativePhoneNumber: "0787678901",
    representativeAddress: "369 Fashion Avenue",
    representativeEmail: "liamharris@gmail.com",
    representativeWebsite: "www.liamharris.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Sales Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Customer Data",
    sensitivePersonalData: false,
    additionalInformation: "Fashion Analytics",
    declarationName: "Fashion Forward",
    declarationDesignation: "Designer",
    declarationDate: "2024-09-01",
  },
  {
    id: 15,
    entityName: "Insurance Insight",
    registrationNumber: "753951",
    licenseNumber: "LIC753951",
    lawNumber: "LAW753",
    presidentialOrderNumber: "PO753",
    natureOfEntity: "Private",
    entitySector: "Insurance",
    entityAddress: "Kigali",
    phoneNumber: "Insurance Insight",
    emailAddress: "insuranceinsight@gmail.com",
    website: "www.insuranceinsight.com",
    dpoName: "James Martin",
    dpoPhoneNumber: "0787789012",
    dpoEmailAddress: "jamesmartin@gmail.com",
    representativeName: "Olivia Moore",
    representativePhoneNumber: "0787890123",
    representativeAddress: "753 Policy Lane",
    representativeEmail: "oliviamoore@gmail.com",
    representativeWebsite: "www.oliviamoore.com",
    categoryOfDataSubjects: "Policyholders",
    purposeOfDataProcessing: "Policy Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Nigeria",
    categoriesOfPersonalData: "Insurance Data",
    sensitivePersonalData: true,
    additionalInformation: "Risk Assessment",
    declarationName: "Insurance Insight",
    declarationDesignation: "Underwriter",
    declarationDate: "2024-09-15",
  },
  {
    id: 16,
    entityName: "Automotive Alliance",
    registrationNumber: "159753",
    licenseNumber: "LIC159753",
    lawNumber: "LAW159",
    presidentialOrderNumber: "PO159",
    natureOfEntity: "Private",
    entitySector: "Automotive",
    entityAddress: "Kigali",
    phoneNumber: "Automotive Alliance",
    emailAddress: "automotivealliance@gmail.com",
    website: "www.automotivealliance.com",
    dpoName: "Mia Thompson",
    dpoPhoneNumber: "0787901234",
    dpoEmailAddress: "miathompson@gmail.com",
    representativeName: "Noah Taylor",
    representativePhoneNumber: "0788012345",
    representativeAddress: "159 Auto Drive",
    representativeEmail: "noahtaylor@gmail.com",
    representativeWebsite: "www.noahtaylor.com",
    categoryOfDataSubjects: "Customers",
    purposeOfDataProcessing: "Sales Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Automotive Data",
    sensitivePersonalData: false,
    additionalInformation: "Vehicle Analytics",
    declarationName: "Automotive Alliance",
    declarationDesignation: "Sales Director",
    declarationDate: "2024-10-01",
  },
  {
    id: 17,
    entityName: "Telecom Trends",
    registrationNumber: "951753",
    licenseNumber: "LIC951753",
    lawNumber: "LAW951",
    presidentialOrderNumber: "PO951",
    natureOfEntity: "Private",
    entitySector: "Telecommunications",
    entityAddress: "Kigali",
    phoneNumber: "Telecom Trends",
    emailAddress: "telecomtrends@gmail.com",
    website: "www.telecomtrends.com",
    dpoName: "Isabella Anderson",
    dpoPhoneNumber: "0788123456",
    dpoEmailAddress: "isabellaanderson@gmail.com",
    representativeName: "Elijah Robinson",
    representativePhoneNumber: "0788234567",
    representativeAddress: "951 Network Street",
    representativeEmail: "elijahrrobinson@gmail.com",
    representativeWebsite: "www.elijahrrobinson.com",
    categoryOfDataSubjects: "Subscribers",
    purposeOfDataProcessing: "Usage Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Mozambique",
    categoriesOfPersonalData: "Telecom Data",
    sensitivePersonalData: true,
    additionalInformation: "Network Optimization",
    declarationName: "Telecom Trends",
    declarationDesignation: "Network Manager",
    declarationDate: "2024-10-15",
  },
  {
    id: 18,
    entityName: "Construction Corner",
    registrationNumber: "357159",
    licenseNumber: "LIC357159",
    lawNumber: "LAW357",
    presidentialOrderNumber: "PO357",
    natureOfEntity: "Private",
    entitySector: "Construction",
    entityAddress: "Kigali",
    phoneNumber: "Construction Corner",
    emailAddress: "constructioncorner@gmail.com",
    website: "www.constructioncorner.com",
    dpoName: "Harper Martinez",
    dpoPhoneNumber: "0788345678",
    dpoEmailAddress: "harpermartinez@gmail.com",
    representativeName: "Aiden White",
    representativePhoneNumber: "0788456789",
    representativeAddress: "357 Builder Road",
    representativeEmail: "aidenwhite@gmail.com",
    representativeWebsite: "www.aidenwhite.com",
    categoryOfDataSubjects: "Clients",
    purposeOfDataProcessing: "Project Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Construction Data",
    sensitivePersonalData: false,
    additionalInformation: "Project Management",
    declarationName: "Construction Corner",
    declarationDesignation: "Project Manager",
    declarationDate: "2024-11-01",
  },
  {
    id: 19,
    entityName: "Hospitality Hub",
    registrationNumber: "159357",
    licenseNumber: "LIC159357",
    lawNumber: "LAW159",
    presidentialOrderNumber: "PO159",
    natureOfEntity: "Private",
    entitySector: "Hospitality",
    entityAddress: "Kigali",
    phoneNumber: "Hospitality Hub",
    emailAddress: "hospitalityhub@gmail.com",
    website: "www.hospitalityhub.com",
    dpoName: "Amelia Brown",
    dpoPhoneNumber: "0788567890",
    dpoEmailAddress: "ameliabrown@gmail.com",
    representativeName: "Benjamin Davis",
    representativePhoneNumber: "0788678901",
    representativeAddress: "159 Hotel Lane",
    representativeEmail: "benjamindavis@gmail.com",
    representativeWebsite: "www.benjamindavis.com",
    categoryOfDataSubjects: "Guests",
    purposeOfDataProcessing: "Booking Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Guest Data",
    sensitivePersonalData: true,
    additionalInformation: "Guest Experience",
    declarationName: "Hospitality Hub",
    declarationDesignation: "Hotel Manager",
    declarationDate: "2024-11-15",
  },
  {
    id: 20,
    entityName: "Entertainment Empire",
    registrationNumber: "753159",
    licenseNumber: "LIC753159",
    lawNumber: "LAW753",
    presidentialOrderNumber: "PO753",
    natureOfEntity: "Private",
    entitySector: "Entertainment",
    entityAddress: "Kigali",
    phoneNumber: "Entertainment Empire",
    emailAddress: "entertainmentempire@gmail.com",
    website: "www.entertainmentempire.com",
    dpoName: "Evelyn Wilson",
    dpoPhoneNumber: "0788789012",
    dpoEmailAddress: "evelynwilson@gmail.com",
    representativeName: "Samuel Martinez",
    representativePhoneNumber: "0788890123",
    representativeAddress: "753 Music Lane",
    representativeEmail: "samuelmartinez@gmail.com",
    representativeWebsite: "www.samuelmartinez.com",
    categoryOfDataSubjects: "Subscribers",
    purposeOfDataProcessing: "Subscription Data",
    transferOfPersonalDataOutsideRwanda: true,
    transferCountry: "Ghana",
    categoriesOfPersonalData: "Entertainment Data",
    sensitivePersonalData: false,
    additionalInformation: "Content Delivery",
    declarationName: "Entertainment Empire",
    declarationDesignation: "Director",
    declarationDate: "2024-12-01",
  },
  {
    id: 21,
    entityName: "Sports Solutions",
    registrationNumber: "951357",
    licenseNumber: "LIC951357",
    lawNumber: "LAW951",
    presidentialOrderNumber: "PO951",
    natureOfEntity: "Private",
    entitySector: "Sports",
    entityAddress: "Kigali",
    phoneNumber: "Sports Solutions",
    emailAddress: "sportssolutions@gmail.com",
    website: "www.sportssolutions.com",
    dpoName: "Grace Taylor",
    dpoPhoneNumber: "0788901234",
    dpoEmailAddress: "gracetaylor@gmail.com",
    representativeName: "Jack Wilson",
    representativePhoneNumber: "0789012345",
    representativeAddress: "951 Stadium Avenue",
    representativeEmail: "jackwilson@gmail.com",
    representativeWebsite: "www.jackwilson.com",
    categoryOfDataSubjects: "Athletes",
    purposeOfDataProcessing: "Performance Data",
    transferOfPersonalDataOutsideRwanda: false,
    transferCountry: null,
    categoriesOfPersonalData: "Performance Data",
    sensitivePersonalData: true,
    additionalInformation: "Sports Analytics",
    declarationName: "Sports Solutions",
    declarationDesignation: "Coach",
    declarationDate: "2024-12-15",
  },
];






const TableThree = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [entityType, setEntityType] = useState('Data Controller');
  const [selectedType, setSelectedType] = useState('Data Processor');
  const [entityData,setEntityData]=useState(entityData2)

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

    fetch('http://localhost:8000/data-processor/', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEntityData(result);
        console.log(result);
      })
      .catch((error) => console.error(error));
  };

  const getDataController = () => {
    const requestOptions = {
      method: 'GET',
    };

    fetch('http://localhost:8000/data-controller/', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setEntityData(result);
        console.log(result);
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

  const toast = useRef<Toast>(null);


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
  };

  
  function handleApprove(id:number){
    console.log(id)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    const requestOptions = {
      method: "PUT",
      headers: myHeaders
    };

    fetch(`http://127.0.0.1:8000/data-processor/${id}/approve/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Approved successfuly")
        if (toast.current) {
          toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have Approved', life: 3000 });
        }
        getDataProcessor();
        console.log(result)
      })
      .catch((error) => console.error(error));

  }


  function handleReject(id:number){
    console.log(id)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    const requestOptions = {
      method: "PUT",
      headers: myHeaders
    };

    fetch(`http://localhost:8000/data-processor/${id}/reject/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Rejected successfuly")
        console.log(result)
      })
      .catch((error) => console.error(error));

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
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button className="bg-primary p-2 dark:text-white text-white rounded" onClick={() => handleApprove(entityItem.id)}>
                      Approve
                    </button>
                    <button className="bg-slate-400 p-2 dark:text-white text-white rounded" onClick={() => handleReject(entityItem.id)}>
                      Reject
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3.5">
                    <button onClick={() => openDialog(entityItem)} className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <div className="text-green-600">Approved</div>
                  </div>
                )}

                 
                  <Toast ref={toast}  className="bg-teal-500 text-white m-3 p-3 rounded"/>
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

  
    </div>
    </div>
  );
};

export default TableThree;
