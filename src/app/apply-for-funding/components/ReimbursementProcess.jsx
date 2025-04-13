import { Fade } from "react-awesome-reveal";
import Link from "next/link";

export default function ReimbursementProcess() {
    const fundingLimits = [
        {
            title: "International Participants",
            amount: "$2,000",
            description: "Based on their location and travel distance."
        },
        {
            title: "Local Participants",
            amount: "$400",
            description: "For transportation and related costs."
        }
    ];

    const posterRequirements = [
        {
            role: "Students",
            focusAreas: [
                { primary: "IES Student Branch Chapter (SBC)", fallback: null },
                { primary: "IEEE Student Branch (SB)", fallback: "If no IES SBC exists at their institution" },
                { primary: "IEEE Section", fallback: "If no SB exists" }
            ]
        },
        {
            role: "Young Professionals (YPs)",
            focusAreas: [
                { primary: "IES Section Chapter", fallback: null },
                { primary: "IEEE Section", fallback: "If no IES Section Chapter exists" }
            ]
        }
    ];

    return (
        <Fade>
            <section className="mx-4 sm:mx-8 md:mx-16 py-12 bg-white rounded-2xl shadow-md">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="mb-10 text-center text-4xl font-bold text-[#7D0F24]">
                        Reimbursement Process
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                        {/* Expense Submission */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                    Expense Submission & Eligibility
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-start bg-gray-50 p-3 rounded-lg hover:shadow-sm transition duration-300">
                                        <div className="flex-shrink-0 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-[#7D0F24] flex items-center justify-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-lg">Following the event, valid receipts and invoices must be submitted via <Link href="https://corporate.ieee.org/resources/travel-medical-and-insurance/ieee-expense-report" target="_blank" rel="noopener noreferrer" className="text-[#7D0F24] font-medium hover:underline">IEEE Concur</Link>.</p>
                                    </div>
                                    <div className="flex items-start bg-gray-50 p-3 rounded-lg hover:shadow-sm transition duration-300">
                                        <div className="flex-shrink-0 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-[#7D0F24] flex items-center justify-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-lg">Expenses must align with <Link href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/travel-expense-reimbursement-guidelines.pdf" target="_blank" rel="noopener noreferrer" className="text-[#7D0F24] font-medium hover:underline">Expense Reimbursement Guidelines for IEEE Volunteers</Link>.</p>
                                    </div>
                                    <div className="flex items-start bg-gray-50 p-3 rounded-lg hover:shadow-sm transition duration-300">
                                        <div className="flex-shrink-0 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-[#7D0F24] flex items-center justify-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-lg">All participants are expected to adhere to the <Link href="https://www.ieee.org/about/corporate/governance/p7-8.html" target="_blank" rel="noopener noreferrer" className="text-[#7D0F24] font-medium hover:underline">IEEE Code of Ethics</Link>.</p>
                                    </div>
                                    <div className="flex items-start bg-gray-50 p-3 rounded-lg hover:shadow-sm transition duration-300">
                                        <div className="flex-shrink-0 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-[#7D0F24] flex items-center justify-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-lg">Must have registered for the congress by the deadline specified in their acceptance notification.</p>
                                    </div>
                                    <div className="flex items-start bg-gray-50 p-3 rounded-lg hover:shadow-sm transition duration-300">
                                        <div className="flex-shrink-0 mr-3">
                                            <div className="w-6 h-6 rounded-full bg-[#7D0F24] flex items-center justify-center text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                        <p className="text-lg">Full attendance in congress workshops, panels, sessions and activities is required.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Funding Limits */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                                <h2 className="text-2xl font-bold text-white flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Funding Limits
                                </h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 gap-6">
                                    {fundingLimits.map((limit, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4 hover:shadow-md transition duration-300">
                                            <div className="bg-[#F8E8EB] rounded-full p-5 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-[#7D0F24]">{limit.amount}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#7D0F24]">{limit.title}</h3>
                                                <p className="text-gray-700">{limit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-[#eaf8e8] rounded-lg border-l-4 border-green-500">
                                    <p className="text-center font-medium text-gray-700">
                                        Each applicant will be informed of their acceptance status and the specific reimbursement amount allocated to their region upon the announcement of funding results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Poster Session Requirement */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 mb-10">
                        <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                            <h2 className="text-2xl font-bold text-white flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Poster Session Requirement
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="bg-[#F8E8EB] p-4 rounded-lg mb-6 border-l-4 border-[#7D0F24]">
                                <p className="text-lg">
                                    All selected participants must prepare and present a poster during the congress. If multiple participants from the same IEEE Organizational Unit (OU) are attending the event, they are encouraged to <span className="font-bold">collaborate on a single poster</span> to represent their collective initiatives and achievements.
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                                {posterRequirements.map((req, index) => (
                                    <div key={index} className="bg-gray-50 rounded-lg p-5 hover:shadow-md transition duration-300">
                                        <h3 className="text-xl font-bold text-[#7D0F24] mb-4 border-b border-gray-200 pb-2">{req.role}</h3>
                                        <div className="space-y-4">
                                            {req.focusAreas.map((area, i) => (
                                                <div key={i} className="flex">
                                                    <div className="flex-shrink-0 mr-3">
                                                        <div className="w-6 h-6 rounded-full bg-[#7D0F24] flex items-center justify-center text-white">
                                                            <span className="font-medium text-sm">{i + 1}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium">Focus on: <span className="text-[#7D0F24]">{area.primary}</span></p>
                                                        {area.fallback && (
                                                            <p className="text-sm text-gray-600 italic mt-1">{area.fallback}</p>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}