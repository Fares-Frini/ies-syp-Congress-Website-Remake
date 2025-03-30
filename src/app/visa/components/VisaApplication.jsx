import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function VisaApplication() {
    // Countries that typically have visa-on-arrival
    const visaOnArrivalCountries = [
        { name: "Malaysia", code: "my" },
        { name: "Thailand", code: "th" },
        { name: "Indonesia", code: "id" },
        { name: "Singapore", code: "sg" }
    ];

    // Required documents with icons
    const requiredDocuments = [
        { name: "Valid Passport", description: "Valid for at least 6 months beyond your stay", icon: "/assets/icons/passport.jpg" },
        { name: "Hotel Booking", description: "Proof of accommodation for your entire stay", icon: "/assets/icons/hotel.jpg" },
        { name: "Return Ticket", description: "Confirmed flight reservation showing departure", icon: "/assets/icons/boarding_pass.jpg" },
        { name: "Sufficient Funds", description: "Cash or bank statements showing financial capability", icon: "/assets/icons/funds.jpg" }
    ];

    // Application steps with icons
    const applicationSteps = [
        { 
            title: "Find Embassy", 
            description: "Locate your nearest Tunisian diplomatic mission",
            icon: "/assets/icons/embassy.jpg"
        },
        { 
            title: "Prepare Documents", 
            description: "Gather all required application materials",
            icon: "/assets/icons/full_application.jpg",
            subItems: [
                "Completed visa application form",
                "Recent passport-sized photos",
                "Flight itinerary & hotel booking",
                "Invitation letter from conference organizers",
                "Bank statements (proof of funds)"
            ]
        },
        { 
            title: "Submit Application", 
            description: "Apply in person or by mail depending on embassy requirements",
            icon: "/assets/icons/application.jpg"
        },
        { 
            title: "Pay Fee", 
            description: "Visa fees vary by nationality and visa type",
            icon: "/assets/icons/credit_card.png"
        }
    ];

    return (
        <Fade>
            <section className="mx-4 sm:mx-8 md:mx-16 py-12 md:py-16">
                <h1 className="mb-8 text-4xl font-bold tracking-tight text-center lg:text-5xl lg:font-extrabold">
                    How to Apply for a Tunisian Visa
                </h1>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Option 1: Visa on Arrival */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                            <h2 className="text-2xl font-bold text-white">Option 1: Visa on Arrival</h2>
                        </div>
                        <div className="p-6">
                            <div className="border-l-4 border-[#7D0F24] pl-4 py-2 bg-gray-50 mb-6">
                                <p className="text-lg">
                                    Some nationalities can obtain a visa upon arrival at Tunis-Carthage Airport or other entry points.
                                    Always check eligibility before traveling.
                                </p>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-3">Eligible Countries Include:</h3>
                            <div className="flex flex-wrap gap-3 mb-6 bg-gray-50 p-4 rounded-lg">
                                {visaOnArrivalCountries.map((country) => (
                                    <div key={country.name} className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                                        <Image 
                                            src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                            alt={`${country.name} flag`}
                                            width={24}
                                            height={18}
                                            className="mr-2"
                                        />
                                        <span>{country.name}</span>
                                    </div>
                                ))}
                                <div className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
                                    <span>And others...</span>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Required Documents</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requiredDocuments.map((doc, index) => (
                                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border-l-2 border-[#7D0F24] hover:shadow-md transition duration-300">
                                        <div className="flex-shrink-0 mr-3 bg-white p-2 rounded-full shadow-sm">
                                            <Image
                                                src={doc.icon}
                                                alt={doc.name}
                                                width={32}
                                                height={32}
                                                className="object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#7D0F24]">{doc.name}</h4>
                                            <p className="text-sm text-gray-600">{doc.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Option 2: Embassy Application */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                            <h2 className="text-2xl font-bold text-white">Option 2: Embassy Application</h2>
                        </div>
                        <div className="p-6">
                            <div className="border-l-4 border-[#7D0F24] pl-4 py-2 bg-gray-50 mb-6">
                                <p className="text-lg">
                                    If your country is not eligible for visa-free or visa-on-arrival entry, you must apply in advance 
                                    through a Tunisian embassy or consulate.
                                </p>
                            </div>
                            
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">Application Process</h3>
                            
                            <div className="space-y-6 bg-gray-50 p-4 rounded-lg">
                                {applicationSteps.map((step, index) => (
                                    <div key={index} className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F8E8EB] text-[#7D0F24] font-bold border border-[#7D0F24]">
                                                {index + 1}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center mb-2">
                                                <div className="bg-white p-2 rounded-full shadow-sm mr-2">
                                                    <Image
                                                        src={step.icon}
                                                        alt={step.title}
                                                        width={24}
                                                        height={24}
                                                    />
                                                </div>
                                                <h3 className="text-xl font-semibold text-[#7D0F24]">{step.title}</h3>
                                            </div>
                                            <p className="text-gray-700 mb-2 pl-2 border-l border-gray-200">{step.description}</p>
                                            {step.subItems && (
                                                <div className="bg-white p-3 rounded-md mt-2 shadow-sm">
                                                    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                                                        {step.subItems.map((item, i) => (
                                                            <li key={i}>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tunisia flag and embassy finder button */}
                <div className="flex flex-col lg:flex-row items-center justify-center bg-[#F8E8EB] rounded-xl p-8 gap-8 shadow-md border border-[#7D0F24]/10">
                    <div className="lg:w-1/4 flex justify-center">
                        <div className="relative">
                            <Image
                                src="https://flagcdn.com/w160/tn.png"
                                alt="Tunisia Flag"
                                width={160}
                                height={120}
                                className="rounded-lg shadow-md border-4 border-white"
                            />
                            <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#7D0F24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/4 text-center lg:text-left">
                        <h3 className="text-2xl font-bold mb-3 text-[#7D0F24]">Find Tunisian Diplomatic Missions</h3>
                        <p className="text-lg mb-4">
                            Locate your nearest Tunisian embassy or consulate to begin your visa application process.
                        </p>
                        <Link
                            href="https://www.diplomatie.gov.tn/en/nc/quick-access/representations-in-the-world/tunisian-representations-abroad/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-[#7D0F24] text-white font-medium rounded-lg transition hover:bg-[#B5172C] focus:outline-none focus:ring-4 focus:ring-[#7D0F24]/50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            Find Tunisian Embassies & Consulates
                        </Link>
                    </div>
                </div>
            </section>
        </Fade>
    );
}