
const schemes = [
    { id: 1,
      name: "Mukhyamantri Udyami Yojana", 
      details: "The “Mukhyamantri Mahila Udyami Yojana is a component of the umbrella scheme Mukhyamantri Udyami Yojana, launched by the Department of Industries, Bihar. The main objective of the scheme is to promote entrepreneurship and self-employment among individuals from all categories in the state Under this component, financial assistance of up to ₹10,00,000/- is provided to female applicants for establishing and operating business ventures, thereby fostering economic growth and empowerment in the state. This scheme also provides benefits to Transgender community.", 
      Benefits: "Substantial Financial Support: Receive up to ₹10,00,000/- for setting up a business (50% of the total financial assistance (up to ₹5,00,000/-) is provided as a non-repayable grant. The remaining 50% (up to ₹5,00,000/-) is offered as an interest-free loan, with a nominal 1% interest under specific sub-schemes.)Skill Development: Mandatory training sessions are provided to enhance entrepre",
      category: "Business", 
      eligibility: "The applicant must be a permanent resident of Bihar.The applicant must be female.The applicant should have passed at least 10+2, Intermediate, ITI, Polytechnic Diploma, or equivalent.The applicant must be aged between 18 and 50 years.The business unit must be a proprietorship or partnership firm.This scheme also provides benefits to Transgender community."
    },
    { id: 2, 
        name: "Bihar Student Credit Card Scheme", 
        details: "The Department of Education introduced a scheme named 'Bihar Student Credit Card Scheme'. Its aim is to provide financial aid to students to complete their higher education. In this scheme, the students can avail loans of up to ₹4 lakhs at minimal interest rates. They can utilize these funds for financing courses like B.Sc, B.A, B.Tech, or MBBS. This scheme is specifically for all those students who are interested in pursuing higher education but due to lack of financial resources, they are not able to pursue the same. " ,
        category: "Education", 
        documentsRequired: [
            "Filled common application form",
            "Aadhar card",
            "Pan card",
            "Xth and XIIth mark sheet and certificate",
            "Copies of the letter conferring scholarship (If available)",
            "Approved course structure",
            "Proof of admission",
            "Fee schedule",
            "Photographs",
            "Previous year’s income certificate",
            "Previous two year’s income tax return",
            "Previous six months’ bank statement",
            "Proof of residence (Passport, ID, driving license, Voter ID)",
            "Tax receipt"
        ],

        applicationProcess: [
            "Visit https://www.7nishchay-yuvaupmission.bihar.gov.in/ website.",
            "Click the ‘New Applicant Registration’ button.",
            "Fill the details, such as name, email ID, mobile number, Aadhaar number, and OTP and click the ‘Submit’ button.",
            "A successful registration message will be displayed, and the applicants will receive the username and password by email and SMS.",
            "Visit the https://www.7nishchay-yuvaupmission.bihar.gov.in/ website and log in using the username and password.",
            "Fill the details on the ‘Personal Information Page’ and click the ‘Submit’ button.",
            "Select the ‘BSCC’ option from the drop-down list and click the ‘Apply’ button.",
            "Fill in the details on the BSCC form and submit it. A confirmation message and the acknowledgement number will be displayed.",
            "The respective District Registration and Counseling Center (DRCC) will schedule an appointment and send an email and SMS informing the applicant about the date of the visit to the DRCC.",
            "The applicant should visit the DRCC with self-attested documents and submit them to the Multi-Purpose Assistant (MPA) for verification.",
            "After verification by the concerned authorities and loan sanction by the bank, the DRCC will send an SMS and email to the applicant informing the date the applicant should visit the DRCC to collect the ‘Student Credit Card’ and sanction letter of the loan.",
            "The applicant should visit the bank to complete the documentation formalities after collecting the ‘Student Credit Card’ and the bank’s sanction letter from the DRCC.",
            "The applicant will get the loan disbursement from the bank, and bank officials will inform the same to the DRCC.",
            "The applicants can also track their application status on https://www.7nishchay-yuvaupmission.bihar.gov.in/addapplicationStatus."
        ],
        eligibility: [
            "The applicant must be a resident of Bihar state and should be at least 25 years.",
            "The applicant must have passed the class 12th.",
            "The applicant must get admission to a course in an authorized institute.",
            "The applicant must complete the entire course."
        ],
        
        Benefits: [
            "A maximum loan amount of ₹4 lakh.",
            "Loan can be availed for polytechnic, technical, and general courses.",
            "This assistance may be utilized for purchasing books and laptops or paying any kind of fees.",
            "Repayment of the loan starts once the course has been completed and the student has secured a job.",
            "The interest rate of the loan is 1% for Divyang, transgender, and girl students.",
            "The recovery procedures are flexible since the loan is government-owned."
        ],


    },
    { id: 3, 
      name: "Jeevika - Bihar Rural Livelihoods", 
      details: "",
      Benefits: "",
      category: "Social Welfare", 
      eligibility: "Yes" 
    },
    { id: 4, 
        name: "Bihar Krishi Input Anudan Yojana", 
        details: "",
        Benefits: "",
        category: "Agriculture", 
        eligibility: "Yes" 
    },
    { id: 5, 
        name: "Mukhyamantri Gramin Awas Yojana",
        details: "", 
        Benefits: "",
        category: "Housing", 
        eligibility: "Yes" },
    { id: 6, 
        name: "Balika Cycle Yojana", 
        details: "",
        Benefits: "",
        category: "Education", 
        eligibility: "Yes" 
    },
    { id: 7, 
        name: "Mukhyamantri Kanya Utthan Yojana", 
        details: "",
        Benefits: "",
        category: "Social Welfare", 
        eligibility: "Yes" 
    },
    { id: 8, 
        name: "Bihar Kushal Yuva Program", 
        details: "",
        Benefits: "",
        category: "Employment", 
        eligibility: "Yes" 
    },
    { id: 9, 
        name: "Rajya Fasal Sahayata Yojana", 
        details: "",
        Benefits: "",
        category: "Agriculture", 
        eligibility: "Yes" 
    },
    { id: 10, 
        name: "Chief Minister Medical Assistance Fund", 
        details: "",
        Benefits: "",
        category: "Healthcare", 
        eligibility: "Yes" 
    },
  ];
  
  export default schemes;
  