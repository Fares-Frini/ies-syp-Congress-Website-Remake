import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import Link from "next/link";


export default function ContactInformation() {
    const contactPersons = [
        {
            name: "Ya-Jun Pan",
            position: "IEEE IES VP for Membership Activities",
            email: "vp-membership@ieee-ies.org",
            image: "/assets/speakers/ya jun.jpeg"
        },
        {
            name: "Aziz Ben Kbaier",
            position: "IEEE IES SAC Member",
            email: "aziz.benkbaier@ieee.org",
            image: "/assets/speakers/Aziz_Ben_Kbaier.jpg"
        },
        {
            name: "Ala Chalghaf",
            position: "IEEE IES SAC Chair",
            email: "ala.chalghaf@ieee.org",
            image: "/assets/speakers/Ala_Chalghaf.jpg"
        }
    ];

    return (
        <Fade>
            <div className="bg-white rounded-2xl py-16 sm:py-10 mx-4 md:mx-16 mb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Contact Information
                    </h2>
                    <p className="text-center mb-12 text-lg">
                        For inquiries about funding opportunities, please contact:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {contactPersons.map((person, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="h-72 overflow-hidden">
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-bold text-[#7D0F24]">{person.name}</h3>
                                    <p className="text-gray-600 mb-2">{person.position}</p>
                                    <a 
                                        href={`mailto:${person.email}`} 
                                        className="text-[#7D0F24] hover:underline flex items-center justify-center gap-1"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        {person.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-center text-lg font-medium">
                            Note: The application deadline is <span className="text-[#7D0F24] font-bold">30 April 2025</span>. Please ensure you submit all required documents before this date.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}