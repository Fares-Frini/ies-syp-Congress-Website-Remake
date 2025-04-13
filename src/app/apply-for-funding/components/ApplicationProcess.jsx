import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";

export default function ApplicationProcess() {
    const eligibilityCriteria = [
        "Be an active IEEE IES member",
        "IEEE membership grade: Students, Graduate Students, or higher grade members who are Young Professionals (YP: Individuals within 15 years of their most recent diploma).",
        "Participate in all official congress activities, including but not limited to, workshops, panels, and networking events.",
        "Provide all required supporting documents, including but not limited to, an updated CV and endorsement letters.",
        "Submit their application before the deadline: 30 April 2025."
    ];

    const requiredDocuments = [
        { 
            title: "Personal Information", 
            description: "General information (full name, email, phone number, IEEE member number, etc.).",
            icon: "/assets/icons/personal_info.jpg"
        },
        { 
            title: "CV/Resume", 
            description: "Highlighting IEEE- and IES-related activities.",
            icon: "/assets/icons/resume.jpg"
        },
        { 
            title: "Endorsement Letters", 
            description: "From applicable sources:",
            icon: "/assets/icons/endorsement.jpg",
            subItems: {
                students: [
                    "IES Student Branch Chapter (SBC) advisor and/or",
                    "IES SBC Chair or representative and/or",
                    "Student Branch (SB) counselor or representative and/or",
                    "IES Section Chapter Chair or representative and/or",
                    "Section Chair or representative"
                ],
                youngProfessionals: [
                    "IEEE IES Section Chapter Chair or representative and/or",
                    "Section Chair or representative"
                ]
            }
        }
    ];

    const fundingCategories = [
        { title: "Visa Expenses", icon: "/assets/icons/passport_visa.jpg" },
        { title: "Flight Expenses", icon: "/assets/icons/plane.jpg" },
        { title: "Local Transportation", icon: "/assets/icons/bus.jpg" },
        { title: "Congress Registration Fee", icon: "/assets/icons/conference_room.jpg", description: "Including congress participation fees, hotel accommodation and meals during the congress" }
    ];

    return (
        <Fade>
            <section className="mx-4 sm:mx-8 md:mx-16 py-12 md:py-16 bg-white rounded-2xl shadow-sm">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="mb-8 text-4xl font-bold text-center">
                        Funding Overview & Application Process
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                                <h2 className="text-2xl font-bold text-white">Funding Coverage</h2>
                            </div>
                            <div className="p-6">
                                <div className="border-l-4 border-[#7D0F24] pl-4 py-2 bg-gray-50 mb-6">
                                    <p className="text-lg">
                                        Funding is available to support IES Student Members and Young Professionals in attending the congress. 
                                        This funding will operate on a reimbursement basis and will cover:
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                    {fundingCategories.map((category, index) => (
                                        <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border-l-2 border-[#7D0F24] hover:shadow-md transition duration-300">
                                            <div className="flex-shrink-0 mr-3 bg-white rounded-full shadow-sm w-12 h-12 overflow-hidden">
                                                <Image
                                                    src={category.icon}
                                                    alt={category.title}
                                                    width={48}
                                                    height={48}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#7D0F24]">{category.title}</h4>
                                                {category.description && (
                                                    <p className="text-sm text-gray-600">{category.description}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                                <h2 className="text-2xl font-bold text-white">Eligibility Criteria</h2>
                            </div>
                            <div className="p-6">
                                <div className="border-l-4 border-[#7D0F24] pl-4 py-2 bg-gray-50 mb-6">
                                    <p className="text-lg">
                                        To be eligible for reimbursement, applicants must meet the following criteria:
                                    </p>
                                </div>
                                
                                <div className="space-y-4 mt-4">
                                    {eligibilityCriteria.map((criteria, index) => (
                                        <div key={index} className="flex items-start">
                                            <div className="flex-shrink-0 mr-3">
                                                <div className="w-6 h-6 rounded-full bg-[#7D0F24] flex items-center justify-center text-white font-bold text-sm">
                                                    {index + 1}
                                                </div>
                                            </div>
                                            <p className="text-lg">{criteria}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
                        <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                            <h2 className="text-2xl font-bold text-white">Required Documents</h2>
                        </div>
                        <div className="p-6">
                            <div className="border-l-4 border-[#7D0F24] pl-4 py-2 bg-gray-50 mb-6">
                                <p className="text-lg">
                                    Applicants must submit the following:
                                </p>
                            </div>
                            
                            <div className="space-y-8 bg-gray-50 p-6 rounded-lg">
                                {requiredDocuments.map((doc, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8E8EB] text-[#7D0F24] font-bold border border-[#7D0F24]">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <div className="bg-white rounded-full shadow-sm w-10 h-10 overflow-hidden mr-3">
                                                    <Image
                                                        src={doc.icon}
                                                        alt={doc.title}
                                                        width={40}
                                                        height={40}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                                <h3 className="text-xl font-semibold text-[#7D0F24]">{doc.title}</h3>
                                            </div>
                                            <p className="text-gray-700 mb-2 pl-2 border-l border-gray-200">{doc.description}</p>
                                            {doc.subItems && doc.title === "Endorsement Letters" && (
                                                <div className="bg-white p-5 rounded-md mt-4 shadow-md w-full">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        {doc.subItems.students && (
                                                            <div className="bg-gray-50 p-4 rounded-lg border-l-3 border-[#7D0F24] hover:shadow-sm transition duration-300">
                                                                <h4 className="font-bold text-[#7D0F24] text-lg mb-3 flex items-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                    For Students:
                                                                </h4>
                                                                <ul className="list-none space-y-2">
                                                                    {doc.subItems.students.map((item, i) => (
                                                                        <li key={i} className="flex items-start">
                                                                            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 mt-0.5 bg-[#7D0F24] text-white rounded-full text-xs">
                                                                                {i + 1}
                                                                            </span>
                                                                            <span className="text-gray-700">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                        {doc.subItems.youngProfessionals && (
                                                            <div className="bg-gray-50 p-4 rounded-lg border-l-3 border-[#7D0F24] hover:shadow-sm transition duration-300">
                                                                <h4 className="font-bold text-[#7D0F24] text-lg mb-3 flex items-center">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                                    </svg>
                                                                    For Young Professionals:
                                                                </h4>
                                                                <ul className="list-none space-y-2">
                                                                    {doc.subItems.youngProfessionals.map((item, i) => (
                                                                        <li key={i} className="flex items-start">
                                                                            <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 mt-0.5 bg-[#7D0F24] text-white rounded-full text-xs">
                                                                                {i + 1}
                                                                            </span>
                                                                            <span className="text-gray-700">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center">
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLScyohCLXsI2rxEX-YRnmYIV5aXRDv_WyQhL4JdMzzNJLyzLQA/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative inline-flex items-center justify-center rounded-full border-2 border-[#7D0F24] bg-[#7D0F24] px-8 py-3 text-center text-base font-medium text-white transition hover:bg-[#B5172C] focus:outline-none focus:ring-4 focus:ring-[#7D0F24]/50 shadow-md"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            Apply for Funding
                        </Link>
                    </div>
                </div>
            </section>
        </Fade>
    );
}