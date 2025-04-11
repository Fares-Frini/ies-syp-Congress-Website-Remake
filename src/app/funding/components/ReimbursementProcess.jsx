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

    return (
        <Fade>
            <section className="mx-4 sm:mx-8 md:mx-16 py-12 bg-white rounded-2xl shadow-sm">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Reimbursement Process
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                        {/* Expense Submission */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                                <h2 className="text-2xl font-bold text-white">Expense Submission</h2>
                            </div>
                            <div className="p-6">
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7D0F24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg">Participants must submit valid receipts/invoices via IEEE Concur after the event.</p>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 mr-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#7D0F24]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <p className="text-lg">Expenses must align with <Link href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/travel-expense-reimbursement-guidelines.pdf" target="_blank" rel="noopener noreferrer" className="text-[#7D0F24] font-medium hover:underline">IEEE travel policies</Link>.</p>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                    <p className="text-center">
                                        For further details, please refer to the 
                                        <Link href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/travel-expense-reimbursement-guidelines.pdf" target="_blank" className="text-[#7D0F24] font-medium hover:underline mx-1">
                                            IEEE Volunteer Travel Guidelines
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Funding Limits */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="bg-gradient-to-r from-[#7D0F24] to-[#B5172C] px-6 py-4">
                                <h2 className="text-2xl font-bold text-white">Funding Limits</h2>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-1 gap-6">
                                    {fundingLimits.map((limit, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-4 flex items-center space-x-4">
                                            <div className="bg-[#F8E8EB] rounded-full p-4 flex items-center justify-center">
                                                <span className="text-2xl font-bold text-[#7D0F24]">{limit.amount}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#7D0F24]">{limit.title}</h3>
                                                <p className="text-gray-700">{limit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-[#F8E8EB] rounded-lg">
                                    <p className="text-center">
                                        Each applicant will be informed of their acceptance status and the specific reimbursement amount allocated to their region upon the announcement of funding results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}