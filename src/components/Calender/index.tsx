"use client"
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import { useRouter } from 'next/navigation';
import { useState,useEffect } from "react";

const Calendar = () => {
  const router = useRouter()
  const [title, setTitle] = useState<string | null>(null);

  useEffect(() => {
    // Get the search params from the URL
    const searchParams = new URLSearchParams(window.location.search);

    // Get the value of the 'title' parameter
    const titleParam = searchParams.get('title');

    // Update the state with the title parameter value
    setTitle(titleParam);
  }, []);

  // Use the title parameter as needed
  console.log(title);
  
  
  // // Define an array of lessons for data protection
  // const lessons = ['Lesson 1: Understanding Data Protection', 'Lesson 2: Legal Frameworks and Regulations', 'Lesson 3: Data Protection Strategies and Policies', 'Lesson 4: Data Security Measures', 'Lesson 5: Data Protection in Practice', 'Lesson 6: Future Trends and Emerging Issues in Data Protection'];

  //   // Define an array of lesson content
  // const lessonContent = [
  //     {
  //       title: 'Lesson 1: Understanding Data Protection',
  //       content: [
  //         'In the first lesson, students will be introduced to the fundamental concepts and principles of data protection. The lesson begins with a definition of data protection and an explanation of its growing importance in the digital era.',
  //         'Students will learn key terminology, such as data subject, data controller, and data processor, and understand what constitutes personal data.',
  //         'The lesson will cover the core principles of data protection, including lawfulness, fairness, transparency, purpose limitation, data minimization, accuracy, storage limitation, integrity, confidentiality, and accountability.',
  //         'Through interactive discussions and a quiz, students will gain a solid foundation in the basics of data protection.'
  //       ],
  //       videoUrl: 'https://www.youtube.com/embed/8xoOLerFOwg',
  //       questions: [
  //         { question: 'What is the definition of data protection?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
  //         { question: 'Who is a data subject?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
  //         // Add more questions here
  //       ]
  //     },
  //     {
  //       title: 'Lesson 2: Legal Frameworks and Regulations',
  //       content: [
  //         'The second lesson focuses on the various legal frameworks and regulations that govern data protection worldwide. Students will receive an overview of major laws such as the GDPR (Europe), CCPA (California), HIPAA (USA), and PIPEDA (Canada), along with other significant global regulations.',
  //         'The lesson will delve into the rights of data subjects under these laws, such as the right to access, rectification, erasure, and data portability.',
  //         'It will also outline the responsibilities of organizations, highlighting the differences between data controllers and processors, and the importance of conducting Data Protection Impact Assessments (DPIAs).',
  //         'Through case studies and group discussions, students will explore the real-world implications of these regulations and the consequences of non-compliance.'
  //       ],
  //       videoUrl: 'https://www.youtube.com/embed/8xoOLerFOwg',
  //       questions: [
  //         { question: 'What is GDPR?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
  //         { question: 'What is a data controller?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
  //         // Add more questions here
  //       ]
  //     },
  //     {
  //       title: 'Lesson 3: Data Protection Strategies and Policies',
  //       content: [
  //         'In the third lesson, students will learn how to develop and implement effective data protection strategies and policies. This lesson will guide students through the process of identifying data protection goals and aligning them with business objectives.',
  //         'Students will learn about the essential elements of a robust data protection policy, including data handling procedures and compliance measures.',
  //         'Practical exercises, such as drafting a data protection policy and conducting a DPIA, will help students apply these concepts in real-world scenarios.'
  //       ],
  //       videoUrl: 'https://www.youtube.com/embed/SuNtmCgIhiM',
  //       questions: [
  //         { question: 'What is a data protection policy?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
  //         { question: 'What is DPIA?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
  //         // Add more questions here
  //       ]
  //     },
  //     {
  //       title: 'Lesson 4: Data Security Measures',
  //       content: [
  //         'Lesson four covers the technical and organizational measures necessary to ensure data security. Students will learn about encryption techniques, pseudonymization, and anonymization as methods to protect data.',
  //         'The lesson will also discuss access controls, identity management, and the importance of regular employee training.',
  //         'Common data security threats, such as phishing, malware, and insider threats, will be examined, along with strategies to mitigate these risks.',
  //         'The lesson will outline the steps to develop a comprehensive data breach response plan and actions to take following a breach.',
  //         'Hands-on activities, including demonstrations of encryption tools and a role-playing exercise for data breach response, will reinforce the lesson content.'
  //       ],
  //       videoUrl: 'https://www.youtube.com/embed/Abta0j826Bk',
  //       questions: [
  //         { question: 'What is encryption?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
  //         { question: 'What is a data breach?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
  //         // Add more questions here
  //       ]
  //     },
  //     {
  //       title: 'Lesson 5: Data Protection in Practice',
  //       content: [
  //         'The fifth lesson focuses on the practical application of data protection principles within organizations. Students will learn about the role and responsibilities of Data Protection Officers (DPOs) and the importance of their independence.',
  //         'The lesson will cover the necessity of regular training and awareness programs for employees to ensure compliance with data protection policies.',
  //         'Students will also learn about vendor and third-party management, emphasizing the need for thorough due diligence and effective contracts.',
  //         'Procedures for handling Data Subject Access Requests (DSARs) will be detailed, ensuring students understand how to process these requests compliantly.',
  //         'Practical simulations and case studies will provide students with hands-on experience.'
  //       ],
  //       videoUrl: 'https://www.youtube.com/embed/LV9w8Ajs1Sw',
  //       questions: [
  //         { question: 'Who is a DPO?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
  //         { question: 'What is a DSAR?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
  //         // Add more questions here
  //       ]
  //     },
  //     {
  //       title: 'Lesson 6: Future Trends and Emerging Issues in Data Protection',
  //       content: [
  //         'The final lesson explores the future trends and emerging issues in data protection. Students will discuss the impact of new technologies, such as artificial intelligence, machine learning, and the Internet of Things (IoT), on data protection.',
  //         'The lesson will examine anticipated changes in data protection laws and the potential for new international standards.',
  //         'Ethical considerations surrounding data collection and use will be debated, focusing on balancing innovation with privacy.',
  //         'The lesson will also address the challenges of cross-border data transfers and the evolving threat landscape.',
  //         'Through group discussions and predictive analysis exercises, students will prepare for future developments in data protection.'
  //       ],
  //       videoUrl: 'https://www.youtube.com/embed/acijNEErf-c',
  //       questions: [
  //         { question: 'What is AI?', options: ['A', 'B', 'C', 'D'], answer: 'A' },
  //         { question: 'What is IoT?', options: ['A', 'B', 'C', 'D'], answer: 'B' },
  //         // Add more questions here
  //       ]
  //     }
  //   ];

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
      { question: 'What is the definition of data protection?', options: ['The safeguarding of personal data from unauthorized access.', 'A process of collecting personal data.', 'A type of data processing.', 'None of the above.'], answer: 'The safeguarding of personal data from unauthorized access.' },
      { question: 'Who is a data subject?', options: ['An individual whose personal data is being processed.', 'A person responsible for data protection in an organization.', 'A software used for data management.', 'A regulatory authority.'], answer: 'An individual whose personal data is being processed.' },
      { question: 'What is personal data?', options: ['Any information related to an identifiable person.', 'Data collected from public sources.', 'Data used for business analysis.', 'None of the above.'], answer: 'Any information related to an identifiable person.' },
      { question: 'Which of the following is a core principle of data protection?', options: ['Data minimization.', 'Data accumulation.', 'Data selling.', 'Data encryption.'], answer: 'Data minimization.' },
      { question: 'What is the purpose of data protection?', options: ['To ensure the privacy and security of personal data.', 'To increase data collection.', 'To promote data sharing.', 'To enable data sales.'], answer: 'To ensure the privacy and security of personal data.' }
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
      { question: 'What is GDPR?', options: ['General Data Protection Regulation.', 'Global Data Processing Rules.', 'General Directive on Privacy Regulations.', 'Global Data Protection Requirement.'], answer: 'General Data Protection Regulation.' },
      { question: 'What is a data controller?', options: ['An entity that determines the purposes and means of processing personal data.', 'A person who collects data.', 'A software that manages databases.', 'None of the above.'], answer: 'An entity that determines the purposes and means of processing personal data.' },
      { question: 'Which law governs data protection in California?', options: ['CCPA.', 'GDPR.', 'HIPAA.', 'PIPEDA.'], answer: 'CCPA.' },
      { question: 'What does HIPAA stand for?', options: ['Health Insurance Portability and Accountability Act.', 'Health Information Privacy and Accountability Act.', 'Health Information Processing and Analysis Act.', 'Health Insurance Privacy and Accessibility Act.'], answer: 'Health Insurance Portability and Accountability Act.' },
      { question: 'What is a DPIA?', options: ['Data Protection Impact Assessment.', 'Data Processing Integration Analysis.', 'Digital Privacy and Information Act.', 'Data Privacy and Integrity Audit.'], answer: 'Data Protection Impact Assessment.' }
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
      { question: 'What is a data protection policy?', options: ['A set of guidelines to ensure data is protected within an organization.', 'A legal document required by regulatory bodies.', 'A software tool used for data encryption.', 'None of the above.'], answer: 'A set of guidelines to ensure data is protected within an organization.' },
      { question: 'What is DPIA?', options: ['Data Protection Impact Assessment.', 'Data Processing Integration Analysis.', 'Digital Privacy and Information Act.', 'Data Privacy and Integrity Audit.'], answer: 'Data Protection Impact Assessment.' },
      { question: 'What is a key element of a data protection policy?', options: ['Data handling procedures.', 'Data sales targets.', 'Data collection incentives.', 'None of the above.'], answer: 'Data handling procedures.' },
      { question: 'How should data protection goals align?', options: ['With business objectives.', 'With personal preferences.', 'With competitor strategies.', 'With industry trends.'], answer: 'With business objectives.' },
      { question: 'What is the purpose of conducting a DPIA?', options: ['To identify and mitigate data protection risks.', 'To collect personal data efficiently.', 'To sell data to third parties.', 'To increase data processing speed.'], answer: 'To identify and mitigate data protection risks.' }
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
      { question: 'What is encryption?', options: ['A method of converting data into a code to prevent unauthorized access.', 'A process of collecting personal data.', 'A type of data breach.', 'None of the above.'], answer: 'A method of converting data into a code to prevent unauthorized access.' },
      { question: 'What is a data breach?', options: ['An incident where confidential information is accessed without authorization.', 'A process of securing data.', 'A type of data processing.', 'None of the above.'], answer: 'An incident where confidential information is accessed without authorization.' },
      { question: 'What is pseudonymization?', options: ['Replacing private identifiers with fake identifiers.', 'Deleting all personal data.', 'Encrypting data at rest.', 'None of the above.'], answer: 'Replacing private identifiers with fake identifiers.' },
      { question: 'Why are access controls important?', options: ['To ensure only authorized personnel can access data.', 'To increase data processing speed.', 'To facilitate data sharing.', 'To enable data collection.'], answer: 'To ensure only authorized personnel can access data.' },
      { question: 'What should be included in a data breach response plan?', options: ['Steps to identify, contain, and mitigate the breach.', 'Methods to collect more data.', 'Processes for selling data.', 'Strategies to delay breach notification.'], answer: 'Steps to identify, contain, and mitigate the breach.' }
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
      { question: 'Who is a DPO?', options: ['Data Protection Officer.', 'Data Processing Operator.', 'Digital Privacy Officer.', 'Data Privacy Overseer.'], answer: 'Data Protection Officer.' },
      { question: 'What is a DSAR?', options: ['Data Subject Access Request.', 'Data Security Assessment Report.', 'Digital Security Analysis Record.', 'Data Storage and Retrieval.'], answer: 'Data Subject Access Request.' },
      { question: 'Why is regular employee training important?', options: ['To ensure compliance with data protection policies.', 'To increase data processing speed.', 'To facilitate data sales.', 'None of the above.'], answer: 'To ensure compliance with data protection policies.' },
      { question: 'What should be considered in vendor management?', options: ['Thorough due diligence and effective contracts.', 'Vendor’s geographical location.', 'Vendor’s marketing strategies.', 'Vendor’s data processing speed.'], answer: 'Thorough due diligence and effective contracts.' },
      { question: 'What is the role of a DPO?', options: ['Overseeing data protection strategy and implementation.', 'Managing data sales.', 'Collecting personal data.', 'Developing marketing strategies.'], answer: 'Overseeing data protection strategy and implementation.' }
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
      { question: 'What is AI?', options: ['Artificial Intelligence.', 'Automated Integration.', 'Analytical Interpretation.', 'Algorithmic Interface.'], answer: 'Artificial Intelligence.' },
      { question: 'What is IoT?', options: ['Internet of Things.', 'Integration of Technologies.', 'Information of Things.', 'Internet of Technologies.'], answer: 'Internet of Things.' },
      { question: 'What is a key challenge of cross-border data transfers?', options: ['Differing data protection laws in different countries.', 'Increased data collection.', 'Reduced data processing speed.', 'None of the above.'], answer: 'Differing data protection laws in different countries.' },
      { question: 'Why are ethical considerations important in data protection?', options: ['To balance innovation with privacy.', 'To increase data sales.', 'To facilitate data collection.', 'To enhance data processing speed.'], answer: 'To balance innovation with privacy.' },
      { question: 'How might AI impact data protection?', options: ['By introducing new privacy challenges.', 'By simplifying data collection.', 'By reducing data protection requirements.', 'None of the above.'], answer: 'By introducing new privacy challenges.' }
    ]
  }
];

  // Data Controller
  const lessonsController = [
    'Lesson 1: Introduction to Data Controllers',
    'Lesson 2: Legal Responsibilities and Compliance',
    'Lesson 3: Data Collection and Processing',
    'Lesson 4: Data Security and Protection',
    'Lesson 5: Managing Data Subject Rights',
    'Lesson 6: Data Breach Response and Reporting',
    'Lesson 7: Future Trends in Data Control'
  ];
  
  const lessonContentcontroller = [
    {
      title: 'Lesson 1: Introduction to Data Controllers',
      content: [
        'In this lesson, students will be introduced to the role and responsibilities of a data controller. The lesson begins with a definition of a data controller and its importance in data protection.',
        'Students will learn the difference between data controllers and data processors, and the key responsibilities that come with being a data controller.',
        'The lesson will cover the basic principles of data protection, including accountability, transparency, and lawfulness.',
        'Interactive discussions and a quiz will help students understand the foundational concepts of data control.'
      ],
      videoUrl: 'https://www.youtube.com/embed/uWHxfbG5VAM',
      questions: [
        { question: 'What is a data controller?', options: ['An entity that determines the purposes and means of processing personal data.', 'An individual who processes data on behalf of the controller.', 'A software used to store data.', 'None of the above.'], answer: 'An entity that determines the purposes and means of processing personal data.' },
        { question: 'What is the primary responsibility of a data controller?', options: ['Ensuring the security and confidentiality of personal data.', 'Collecting as much data as possible.', 'Sharing data with third parties.', 'None of the above.'], answer: 'Ensuring the security and confidentiality of personal data.' },
        { question: 'How does a data controller differ from a data processor?', options: ['A data controller decides why and how data is processed, while a data processor processes data on behalf of the controller.', 'A data processor decides why and how data is processed, while a data controller processes data on behalf of the processor.', 'There is no difference.', 'Both are responsible for data processing.'], answer: 'A data controller decides why and how data is processed, while a data processor processes data on behalf of the controller.' },
        { question: 'Which principle of data protection focuses on being open and clear about data processing activities?', options: ['Transparency.', 'Accountability.', 'Lawfulness.', 'Minimization.'], answer: 'Transparency.' },
        { question: 'What is meant by the principle of accountability in data protection?', options: ['Data controllers must take responsibility for complying with data protection principles and be able to demonstrate this compliance.', 'Data controllers can share responsibility with third parties.', 'Only data processors are accountable for data protection.', 'None of the above.'], answer: 'Data controllers must take responsibility for complying with data protection principles and be able to demonstrate this compliance.' }
      ]
    },
    {
      title: 'Lesson 2: Legal Responsibilities and Compliance',
      content: [
        'This lesson focuses on the legal responsibilities of data controllers under various data protection laws such as the GDPR and CCPA.',
        'Students will learn about the key requirements for compliance, including data protection policies, consent management, and data protection impact assessments (DPIAs).',
        'The lesson will also cover the rights of data subjects and the obligations of data controllers to uphold these rights.',
        'Case studies and group discussions will explore real-world scenarios and the consequences of non-compliance.'
      ],
      videoUrl: 'https://www.youtube.com/embed/JkcYwaaN1PQ',
      questions: [
        { question: 'What is GDPR?', options: ['General Data Protection Regulation.', 'Global Data Privacy Rules.', 'General Directive on Privacy Regulation.', 'Global Data Processing Requirement.'], answer: 'General Data Protection Regulation.' },
        { question: 'What is a DPIA?', options: ['Data Protection Impact Assessment.', 'Data Privacy Integration Analysis.', 'Digital Privacy Information Audit.', 'Data Processing Investigation Assessment.'], answer: 'Data Protection Impact Assessment.' },
        { question: 'What is the primary purpose of consent management?', options: ['To ensure individuals have given explicit permission for their data to be processed.', 'To collect as much data as possible.', 'To sell data to third parties.', 'To simplify data processing.'], answer: 'To ensure individuals have given explicit permission for their data to be processed.' },
        { question: 'Which right allows data subjects to request the deletion of their personal data?', options: ['Right to erasure.', 'Right to access.', 'Right to portability.', 'Right to rectification.'], answer: 'Right to erasure.' },
        { question: 'What are the potential consequences of non-compliance with data protection laws?', options: ['Fines and penalties.', 'Reputation damage.', 'Legal action.', 'All of the above.'], answer: 'All of the above.' }
      ]
    },
    {
      title: 'Lesson 3: Data Collection and Processing',
      content: [
        'This lesson covers the principles and practices of data collection and processing. Students will learn how to collect data lawfully and fairly.',
        'The lesson will discuss data minimization, accuracy, and the importance of specifying the purpose of data collection.',
        'Students will also learn about different types of personal data and how to handle sensitive data appropriately.',
        'Practical exercises and role-playing scenarios will reinforce the concepts of lawful data collection and processing.'
      ],
      videoUrl: 'https://www.youtube.com/embed/Lb6Gi6IR-Kc',
      questions: [
        { question: 'What is data minimization?', options: ['Collecting only the data that is necessary for the specified purpose.', 'Collecting as much data as possible.', 'Storing data for as long as possible.', 'None of the above.'], answer: 'Collecting only the data that is necessary for the specified purpose.' },
        { question: 'What constitutes sensitive data?', options: ['Data that reveals racial or ethnic origin, political opinions, religious beliefs, health information, or sexual orientation.', 'Data that is publicly available.', 'Any data that is not personal.', 'None of the above.'], answer: 'Data that reveals racial or ethnic origin, political opinions, religious beliefs, health information, or sexual orientation.' },
        { question: 'Why is specifying the purpose of data collection important?', options: ['To ensure data is used only for legitimate and specific purposes.', 'To facilitate data sharing with third parties.', 'To increase data storage.', 'To reduce data processing time.'], answer: 'To ensure data is used only for legitimate and specific purposes.' },
        { question: 'How can data controllers ensure data accuracy?', options: ['By regularly updating and correcting data.', 'By collecting data from unreliable sources.', 'By ignoring data verification.', 'By storing outdated information.'], answer: 'By regularly updating and correcting data.' },
        { question: 'What is the lawful basis for processing personal data?', options: ['Consent, contract, legal obligation, vital interests, public task, or legitimate interests.', 'Only consent is required.', 'Only legal obligation is required.', 'There is no need for a lawful basis.'], answer: 'Consent, contract, legal obligation, vital interests, public task, or legitimate interests.' }
      ]
    },
    {
      title: 'Lesson 4: Data Security and Protection',
      content: [
        'This lesson covers the essential data security measures that data controllers must implement to protect personal data.',
        'Students will learn about encryption, access controls, and regular security assessments.',
        'The lesson will also discuss the importance of training employees on data security and establishing incident response plans.',
        'Hands-on activities will include demonstrations of encryption tools and developing a data security policy.'
      ],
      videoUrl: 'https://www.youtube.com/embed/Bp00VqBH420',
      questions: [
        { question: 'What is encryption?', options: ['A method of converting data into a code to prevent unauthorized access.', 'A process of deleting data.', 'A way to collect data.', 'None of the above.'], answer: 'A method of converting data into a code to prevent unauthorized access.' },
        { question: 'Why are access controls important?', options: ['To ensure only authorized personnel can access data.', 'To simplify data collection.', 'To share data with everyone.', 'To reduce data storage.'], answer: 'To ensure only authorized personnel can access data.' },
        { question: 'What should be included in a data security policy?', options: ['Guidelines for data protection, encryption methods, access controls, and incident response plans.', 'Instructions for selling data.', 'Methods to collect more data.', 'Ways to ignore security threats.'], answer: 'Guidelines for data protection, encryption methods, access controls, and incident response plans.' },
        { question: 'How often should security assessments be conducted?', options: ['Regularly, to identify and mitigate potential security risks.', 'Once a year.', 'Every five years.', 'Only after a data breach.'], answer: 'Regularly, to identify and mitigate potential security risks.' },
        { question: 'What is the role of employee training in data security?', options: ['To ensure employees understand and follow data protection policies and procedures.', 'To increase data collection.', 'To reduce data processing time.', 'None of the above.'], answer: 'To ensure employees understand and follow data protection policies and procedures.' }
      ]
    },
    {
      title: 'Lesson 5: Managing Data Subject Rights',
      content: [
        'This lesson focuses on the rights of data subjects and how data controllers can effectively manage these rights.',
        'Students will learn about the right to access, rectification, erasure, and data portability.',
        'The lesson will cover the procedures for handling data subject access requests (DSARs) and the importance of timely responses.',
        'Through practical exercises, students will gain experience in processing DSARs and ensuring compliance with data protection laws.'
      ],
      videoUrl: 'https://www.youtube.com/embed/EfY8WJLXH0g',
      questions: [
        { question: 'What is a DSAR?', options: ['Data Subject Access Request.', 'Data Security Assessment Report.', 'Digital Security Analysis Record.', 'Data Storage and Retrieval.'], answer: 'Data Subject Access Request.' },
        { question: 'What is the right to erasure?', options: ['The right of individuals to have their personal data deleted.', 'The right to access personal data.', 'The right to correct inaccurate data.', 'The right to transfer data to another service.'], answer: 'The right of individuals to have their personal data deleted.' },
        { question: 'Why is it important to respond to DSARs in a timely manner?', options: ['To comply with legal obligations and maintain trust with data subjects.', 'To avoid data collection.', 'To increase data sales.', 'To reduce data storage costs.'], answer: 'To comply with legal obligations and maintain trust with data subjects.' },
        { question: 'What does data portability allow individuals to do?', options: ['Transfer their personal data to another service provider.', 'Delete their personal data.', 'Access their personal data.', 'Correct inaccurate data.'], answer: 'Transfer their personal data to another service provider.' },
        { question: 'How can data controllers ensure they are managing data subject rights effectively?', options: ['By establishing clear procedures and training employees on how to handle data subject requests.', 'By ignoring data subject requests.', 'By collecting more data.', 'By delaying responses to data subject requests.'], answer: 'By establishing clear procedures and training employees on how to handle data subject requests.' }
      ]
    },
    {
      title: 'Lesson 6: Data Breach Response and Reporting',
      content: [
        'This lesson covers the steps data controllers must take in the event of a data breach.',
        'Students will learn about the importance of having a data breach response plan and the key elements it should include.',
        'The lesson will also discuss the legal requirements for reporting data breaches and the potential consequences of failing to report breaches in a timely manner.',
        'Hands-on activities will include a simulation of a data breach response and developing a breach notification template.'
      ],
      videoUrl: 'https://www.youtube.com/embed/UqdCeo5OU9U',
      questions: [
        { question: 'What is a data breach?', options: ['A security incident that leads to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data.', 'A process of collecting data.', 'A way to store data.', 'None of the above.'], answer: 'A security incident that leads to the accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to personal data.' },
        { question: 'What should be included in a breach response plan?', options: ['Procedures for identifying, responding to, and mitigating the effects of a data breach.', 'Methods to increase data collection.', 'Ways to sell data.', 'Strategies to ignore security threats.'], answer: 'Procedures for identifying, responding to, and mitigating the effects of a data breach.' },
        { question: 'Why is timely reporting of data breaches important?', options: ['To comply with legal requirements and minimize potential harm.', 'To collect more data.', 'To sell data to third parties.', 'To reduce data storage costs.'], answer: 'To comply with legal requirements and minimize potential harm.' },
        { question: 'What are the potential consequences of failing to report a data breach in a timely manner?', options: ['Fines, legal action, and damage to reputation.', 'Increased data collection.', 'Improved data processing speed.', 'None of the above.'], answer: 'Fines, legal action, and damage to reputation.' },
        { question: 'How can data controllers prepare for a potential data breach?', options: ['By developing and regularly updating a data breach response plan and training employees on how to implement it.', 'By ignoring potential threats.', 'By storing as much data as possible.', 'By selling data to third parties.'], answer: 'By developing and regularly updating a data breach response plan and training employees on how to implement it.' }
      ]
    },
    {
      title: 'Lesson 7: Future Trends in Data Control',
      content: [
        'The final lesson explores future trends and emerging issues in data control.',
        'Students will discuss the impact of new technologies such as AI, machine learning, and the Internet of Things (IoT) on data control.',
        'The lesson will examine potential changes in data protection laws and the development of new international standards.',
        'Ethical considerations and the balance between innovation and privacy will be key topics of discussion.',
        'Group discussions and predictive analysis exercises will help students prepare for future developments in data control.'
      ],
      videoUrl: 'https://www.youtube.com/embed/IQYHqX8s8M8',
      questions: [
        { question: 'What is AI?', options: ['Artificial Intelligence.', 'Automated Integration.', 'Analytical Interpretation.', 'Algorithmic Interface.'], answer: 'Artificial Intelligence.' },
        { question: 'What is IoT?', options: ['Internet of Things.', 'Integration of Technologies.', 'Information of Things.', 'Internet of Technologies.'], answer: 'Internet of Things.' },
        { question: 'How might AI impact data control?', options: ['By introducing new challenges related to data privacy and security.', 'By simplifying data collection.', 'By reducing the need for data protection.', 'None of the above.'], answer: 'By introducing new challenges related to data privacy and security.' },
        { question: 'What are ethical considerations in data control?', options: ['Balancing innovation with the need to protect individual privacy and rights.', 'Maximizing data collection.', 'Selling data to third parties.', 'Ignoring data protection laws.'], answer: 'Balancing innovation with the need to protect individual privacy and rights.' },
        { question: 'What might be a future trend in data protection laws?', options: ['Development of new international standards.', 'Reduction in data protection requirements.', 'Elimination of data subject rights.', 'None of the above.'], answer: 'Development of new international standards.' }
      ]
    }
  ];
  

  // Data processor

  const lessonsprocessor = [
    'Lesson 1: Introduction to Data Processing',
    'Lesson 2: Data Collection and Preprocessing',
    'Lesson 3: Data Transformation and Cleaning',
    'Lesson 4: Data Integration and Storage',
    'Lesson 5: Data Analysis and Visualization',
    'Lesson 6: Data Processing Technologies',
    'Lesson 7: Ethical and Legal Considerations in Data Processing'
  ];
  const lessonContentprocessor = [
    {
      title: 'Lesson 1: Introduction to Data Processing',
      content: [
        'In this lesson, students will be introduced to the fundamental concepts of data processing. The lesson begins with a definition of data processing and its importance in the digital age.',
        'Students will learn about the different stages of data processing and the key activities involved in each stage.',
        'The lesson will cover the types of data (structured, unstructured, and semi-structured) and how they are processed.',
        'Interactive discussions and a quiz will help students grasp the basics of data processing.'
      ],
      videoUrl: 'https://www.youtube.com/embed/DuyAza5teu8',
      questions: [
        { question: 'What is data processing?', options: ['The collection and manipulation of data to produce meaningful information.', 'The deletion of old data.', 'The storage of data in a cloud.', 'None of the above.'], answer: 'The collection and manipulation of data to produce meaningful information.' },
        { question: 'What are the stages of data processing?', options: ['Collection, preparation, input, processing, output, and storage.', 'Collection, deletion, input, processing, output, and storage.', 'Input, processing, output, deletion.', 'None of the above.'], answer: 'Collection, preparation, input, processing, output, and storage.' },
        { question: 'What is structured data?', options: ['Data that is organized in a fixed format.', 'Data that is randomly arranged.', 'Data without any structure.', 'None of the above.'], answer: 'Data that is organized in a fixed format.' },
        { question: 'What is unstructured data?', options: ['Data that does not have a predefined data model.', 'Data that is organized in a fixed format.', 'Data that is outdated.', 'None of the above.'], answer: 'Data that does not have a predefined data model.' },
        { question: 'Why is data processing important?', options: ['It converts raw data into meaningful information.', 'It deletes old data.', 'It stores data indefinitely.', 'None of the above.'], answer: 'It converts raw data into meaningful information.' }
      ]
    },
    {
      title: 'Lesson 2: Data Collection and Preprocessing',
      content: [
        'This lesson focuses on the methods and techniques for data collection and preprocessing.',
        'Students will learn about various data collection methods, including surveys, sensors, and web scraping.',
        'The lesson will discuss the importance of data quality and the techniques used for data preprocessing, such as normalization and standardization.',
        'Practical exercises will involve data collection from different sources and applying preprocessing techniques to prepare the data for analysis.'
      ],
      videoUrl: 'https://www.youtube.com/embed/dAg-_gzFo14',
      questions: [
        { question: 'What is data preprocessing?', options: ['The process of transforming raw data into an understandable format.', 'The deletion of unnecessary data.', 'The storage of data in a cloud.', 'None of the above.'], answer: 'The process of transforming raw data into an understandable format.' },
        { question: 'Why is data quality important?', options: ['It ensures the reliability and accuracy of the data.', 'It reduces the amount of data collected.', 'It makes data collection faster.', 'None of the above.'], answer: 'It ensures the reliability and accuracy of the data.' },
        { question: 'What is normalization in data preprocessing?', options: ['Adjusting values measured on different scales to a common scale.', 'Deleting old data.', 'Storing data in a database.', 'None of the above.'], answer: 'Adjusting values measured on different scales to a common scale.' },
        { question: 'What is standardization in data preprocessing?', options: ['Rescaling data to have a mean of 0 and a standard deviation of 1.', 'Deleting unnecessary data.', 'Storing data in the cloud.', 'None of the above.'], answer: 'Rescaling data to have a mean of 0 and a standard deviation of 1.' },
        { question: 'What is a common method of data collection?', options: ['Surveys.', 'Data deletion.', 'Data encryption.', 'None of the above.'], answer: 'Surveys.' }
      ]
    },
    {
      title: 'Lesson 3: Data Transformation and Cleaning',
      content: [
        'This lesson covers the techniques for data transformation and cleaning. Students will learn how to transform raw data into a usable format.',
        'The lesson will discuss various data cleaning methods, including handling missing values, outlier detection, and data normalization.',
        'Students will also learn about data transformation techniques, such as aggregation, discretization, and encoding.',
        'Hands-on activities will include data cleaning and transformation exercises using real-world datasets.'
      ],
      videoUrl: 'https://www.youtube.com/embed/mwEPXevpqls',
      questions: [
        { question: 'What is data cleaning?', options: ['The process of correcting or removing inaccurate records from a dataset.', 'The deletion of all data.', 'The storage of data in a cloud.', 'None of the above.'], answer: 'The process of correcting or removing inaccurate records from a dataset.' },
        { question: 'What is data transformation?', options: ['The process of converting data from one format or structure into another.', 'The deletion of old data.', 'The storage of data in a database.', 'None of the above.'], answer: 'The process of converting data from one format or structure into another.' },
        { question: 'What is outlier detection in data cleaning?', options: ['Identifying and handling data points that differ significantly from other observations.', 'Deleting unnecessary data.', 'Encrypting data.', 'None of the above.'], answer: 'Identifying and handling data points that differ significantly from other observations.' },
        { question: 'What is data aggregation?', options: ['Combining multiple pieces of data to produce a summary result.', 'Deleting unnecessary data.', 'Storing data in the cloud.', 'None of the above.'], answer: 'Combining multiple pieces of data to produce a summary result.' },
        { question: 'What is data encoding in data transformation?', options: ['Converting categorical data into a numerical format.', 'Deleting old data.', 'Storing data in a database.', 'None of the above.'], answer: 'Converting categorical data into a numerical format.' }
      ]
    },
    {
      title: 'Lesson 4: Data Integration and Storage',
      content: [
        'This lesson focuses on data integration and storage techniques. Students will learn how to integrate data from multiple sources and store it efficiently.',
        'The lesson will cover data warehousing, databases, and cloud storage solutions.',
        'Students will learn about data integration challenges and best practices for ensuring data consistency and integrity.',
        'Practical exercises will involve integrating datasets from various sources and storing them in a database or data warehouse.'
      ],
      videoUrl: 'https://www.youtube.com/embed/KBI_Mf5FlHs',
      questions: [
        { question: 'What is data integration?', options: ['Combining data from different sources into a unified view.', 'Deleting unnecessary data.', 'Encrypting data.', 'None of the above.'], answer: 'Combining data from different sources into a unified view.' },
        { question: 'What are data warehouses?', options: ['Central repositories of integrated data from multiple sources.', 'Places to delete old data.', 'Cloud storage services.', 'None of the above.'], answer: 'Central repositories of integrated data from multiple sources.' },
        { question: 'What is a common challenge in data integration?', options: ['Ensuring data consistency and integrity.', 'Deleting unnecessary data.', 'Encrypting data.', 'None of the above.'], answer: 'Ensuring data consistency and integrity.' },
        { question: 'What is cloud storage?', options: ['A service that allows data to be stored and accessed over the internet.', 'A method to delete data.', 'A form of data encryption.', 'None of the above.'], answer: 'A service that allows data to be stored and accessed over the internet.' },
        { question: 'What is the purpose of a database?', options: ['To store and organize data efficiently.', 'To delete unnecessary data.', 'To encrypt data.', 'None of the above.'], answer: 'To store and organize data efficiently.' }
      ]
    },
    {
      title: 'Lesson 5: Data Analysis and Visualization',
      content: [
        'This lesson covers the techniques for data analysis and visualization. Students will learn how to analyze data to extract meaningful insights.',
        'The lesson will discuss various data analysis methods, including descriptive, diagnostic, predictive, and prescriptive analytics.',
        'Students will also learn about data visualization techniques and tools to represent data effectively.',
        'Hands-on activities will involve performing data analysis and creating visualizations using tools like Excel, Tableau, or Python libraries.'
      ],
      videoUrl: 'https://www.youtube.com/embed/MiiANxRHSv4',
      questions: [
        { question: 'What is data analysis?', options: ['The process of inspecting, cleansing, transforming, and modeling data to discover useful information.', 'The deletion of old data.', 'The storage of data in a cloud.', 'None of the above.'], answer: 'The process of inspecting, cleansing, transforming, and modeling data to discover useful information.' },
        { question: 'Why is data visualization important?', options: ['It helps to communicate data insights effectively.', 'It deletes unnecessary data.', 'It encrypts data.', 'None of the above.'], answer: 'It helps to communicate data insights effectively.' },
        { question: 'What is descriptive analytics?', options: ['The analysis of historical data to identify patterns.', 'The prediction of future trends.', 'The prescription of actions based on data.', 'None of the above.'], answer: 'The analysis of historical data to identify patterns.' },
        { question: 'What is predictive analytics?', options: ['The use of data to forecast future outcomes.', 'The analysis of historical data.', 'The prescription of actions based on data.', 'None of the above.'], answer: 'The use of data to forecast future outcomes.' },
        { question: 'Which tool is commonly used for data visualization?', options: ['Tableau.', 'SQL.', 'Hadoop.', 'None of the above.'], answer: 'Tableau.' }
      ]
    },
    {
      title: 'Lesson 6: Data Processing Technologies',
      content: [
        'This lesson introduces students to various data processing technologies and tools. Students will learn about traditional data processing technologies like SQL and new technologies like Hadoop and Spark.',
        'The lesson will cover the advantages and limitations of these technologies and their use cases.',
        'Students will also learn about data processing frameworks and platforms that facilitate large-scale data processing.',
        'Practical exercises will involve using different data processing technologies and frameworks to process datasets.'
      ],
      videoUrl: 'https://www.youtube.com/embed/lV1s5NQWN_A',
      questions: [
        { question: 'What is SQL?', options: ['A language used to communicate with databases.', 'A data storage device.', 'A cloud computing platform.', 'None of the above.'], answer: 'A language used to communicate with databases.' },
        { question: 'What is Hadoop?', options: ['An open-source framework for distributed storage and processing of large datasets.', 'A database management system.', 'A type of data visualization tool.', 'None of the above.'], answer: 'An open-source framework for distributed storage and processing of large datasets.' },
        { question: 'What is Spark?', options: ['A unified analytics engine for large-scale data processing.', 'A data cleaning tool.', 'A type of database.', 'None of the above.'], answer: 'A unified analytics engine for large-scale data processing.' },
        { question: 'What is a limitation of traditional data processing technologies like SQL?', options: ['They may struggle with handling extremely large datasets.', 'They are always more expensive than new technologies.', 'They cannot be used with cloud storage.', 'None of the above.'], answer: 'They may struggle with handling extremely large datasets.' },
        { question: 'What is a use case for Hadoop?', options: ['Processing large volumes of data in a distributed manner.', 'Small-scale data storage.', 'Creating simple data visualizations.', 'None of the above.'], answer: 'Processing large volumes of data in a distributed manner.' }
      ]
    },
    {
      title: 'Lesson 7: Ethical and Legal Considerations in Data Processing',
      content: [
        'The final lesson explores the ethical and legal considerations in data processing. Students will learn about the ethical issues related to data collection, processing, and use.',
        'The lesson will discuss data privacy laws and regulations, such as GDPR and CCPA, and the responsibilities of organizations to comply with these laws.',
        'Students will also learn about the ethical implications of data processing technologies and the importance of responsible data use.',
        'Group discussions and case studies will help students understand the ethical and legal challenges in data processing.'
      ],
      videoUrl: 'https://www.youtube.com/embed/OXk7JHsLA18',
      questions: [
        { question: 'What is GDPR?', options: ['General Data Protection Regulation, a law on data protection and privacy in the EU.', 'Global Data Processing Regulation.', 'General Data Processing Rule.', 'None of the above.'], answer: 'General Data Protection Regulation, a law on data protection and privacy in the EU.' },
        { question: 'What are the ethical considerations in data processing?', options: ['Ensuring data is collected, processed, and used responsibly.', 'Deleting all old data.', 'Encrypting all data.', 'None of the above.'], answer: 'Ensuring data is collected, processed, and used responsibly.' },
        { question: 'What is the CCPA?', options: ['California Consumer Privacy Act, a state statute intended to enhance privacy rights and consumer protection.', 'Canadian Consumer Privacy Act.', 'California Cloud Processing Act.', 'None of the above.'], answer: 'California Consumer Privacy Act, a state statute intended to enhance privacy rights and consumer protection.' },
        { question: 'Why is it important for organizations to comply with data privacy laws?', options: ['To avoid legal penalties and build trust with consumers.', 'To delete unnecessary data.', 'To encrypt all data.', 'None of the above.'], answer: 'To avoid legal penalties and build trust with consumers.' },
        { question: 'What is an ethical implication of data processing technologies?', options: ['The potential for misuse of data leading to privacy violations.', 'The ability to store more data.', 'The speed of data processing.', 'None of the above.'], answer: 'The potential for misuse of data leading to privacy violations.' }
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
          router.push(`/profile?title=${encodeURIComponent(lessons[currentLessonIndex])}`);
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
  
  const goToNextLessoncontroller = () => {
    if (isQuizVisible) {
      setIsQuizVisible(false);
      const correctAnswers = lessonContentcontroller[currentLessonIndex].questions.filter((q, i) => q.answer === quizAnswers[i]).length;
      const scorePercentage = (correctAnswers / lessonContentcontroller[currentLessonIndex].questions.length) * 100;

      if (scorePercentage >= 80) {
        setMessage(`You passed the quiz with a score of ${scorePercentage}%.`);
        setQuizAttempts(0);
        setProgress((currentLessonIndex + 1) / lessonsController.length * 100);
        if (currentLessonIndex < lessonsController.length - 1) {
          setCurrentLessonIndex(currentLessonIndex + 1);
        } else {
          router.push(`/profile?title=${encodeURIComponent(lessonsController[currentLessonIndex])}`);
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
  const goToNextLessonprocessor = () => {
    if (isQuizVisible) {
      setIsQuizVisible(false);
      const correctAnswers = lessonContentcontroller[currentLessonIndex].questions.filter((q, i) => q.answer === quizAnswers[i]).length;
      const scorePercentage = (correctAnswers / lessonContentcontroller[currentLessonIndex].questions.length) * 100;

      if (scorePercentage >= 80) {
        setMessage(`You passed the quiz with a score of ${scorePercentage}%.`);
        setQuizAttempts(0);
        setProgress((currentLessonIndex + 1) / lessonsController.length * 100);
        if (currentLessonIndex < lessonsController.length - 1) {
          setCurrentLessonIndex(currentLessonIndex + 1);
        } else {
          router.push(`/profile?title=${encodeURIComponent(lessonsController[currentLessonIndex])}`);
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

  if(title == "Introduction to Data Protection"){
      return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="Course" />
      <h1 className="text-3xl font-bold mb-4">{title ? title : ""}</h1>

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
                  <p className="font-bold m-2">{question.question}</p>
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
                      <label htmlFor={`question-${index}-option-${i}`} className="m-2 p-2">{option}</label>
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

  else if(title=="Data Controller Training"){
    return (
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Course" />
        <h1 className="text-3xl font-bold mb-4">{title ? title : ""}</h1>
  
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
              {lessonsController.map((lesson, index) => (
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
                <h1 className="text-2xl font-bold mb-4">Quiz for {lessonContentcontroller[currentLessonIndex].title}</h1>
                {lessonContentcontroller[currentLessonIndex].questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-bold m-2">{index}. {question.question}</p>
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
                        <label htmlFor={`question-${index}-option-${i}`}className="m-2 p-2">{option}</label>
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
                <h1 className="text-2xl font-bold mb-4">{lessonContentcontroller[currentLessonIndex].title}</h1>
                <div className="relative w-full overflow-hidden mb-4" style={{ height: '50vh' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={lessonContentcontroller[currentLessonIndex].videoUrl}
                    allowFullScreen
                    title={`Lesson ${currentLessonIndex + 1} Video`}
                  ></iframe>
                </div>
                {lessonContentcontroller[currentLessonIndex].content.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            )}
            <div className="mt-4 flex justify-between">
              <button onClick={goToPreviousLesson} disabled={currentLessonIndex === 0 && !isQuizVisible} className="mr-2 bg-secondary text-black py-2 px-4 rounded">
                Previous
              </button>
              <button onClick={goToNextLessoncontroller} className="bg-primary text-white py-2 px-4 rounded">
                {isQuizVisible ? 'Submit Quiz' : (currentLessonIndex === lessonsController.length - 1 ? 'Take Assessment' : 'Next')}
              </button>
            </div>
          </div>
          {/* ====== Course Content Section End ====== */}
        </div>
        {/* ====== Layout End ====== */}
      </div>
    );
  }
  else{
    return (
      <div className="mx-auto max-w-7xl">
        <Breadcrumb pageName="Course" />
        <h1 className="text-3xl font-bold mb-4">{title ? title : ""}</h1>
  
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
              {lessonsprocessor.map((lesson, index) => (
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
                <h1 className="text-2xl font-bold mb-4">Quiz for {lessonContentprocessor[currentLessonIndex].title}</h1>
                {lessonContentprocessor[currentLessonIndex].questions.map((question, index) => (
                  <div key={index} className="mb-4">
                    <p className="font-bold m-2">{question.question}</p>
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
                        <label htmlFor={`question-${index}-option-${i}`} className="m-2 p-2">{option}</label>
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
                <h1 className="text-2xl font-bold mb-4">{lessonContentprocessor[currentLessonIndex].title}</h1>
                <div className="relative w-full overflow-hidden mb-4" style={{ height: '50vh' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={lessonContentprocessor[currentLessonIndex].videoUrl}
                    allowFullScreen
                    title={`Lesson ${currentLessonIndex + 1} Video`}
                  ></iframe>
                </div>
                {lessonContentprocessor[currentLessonIndex].content.map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            )}
            <div className="mt-4 flex justify-between">
              <button onClick={goToPreviousLesson} disabled={currentLessonIndex === 0 && !isQuizVisible} className="mr-2 bg-secondary text-black py-2 px-4 rounded">
                Previous
              </button>
              <button onClick={goToNextLessonprocessor} className="bg-primary text-white py-2 px-4 rounded">
                {isQuizVisible ? 'Submit Quiz' : (currentLessonIndex === lessonsprocessor.length - 1 ? 'Take Assessment' : 'Next')}
              </button>
            </div>
          </div>
          {/* ====== Course Content Section End ====== */}
        </div>
        {/* ====== Layout End ====== */}
      </div>
    );
  }


}

export default Calendar;
