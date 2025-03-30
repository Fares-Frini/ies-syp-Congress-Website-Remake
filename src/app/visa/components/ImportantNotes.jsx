import { Fade } from "react-awesome-reveal";
import Link from "next/link";
export default function ImportantNotes() {
    const notes = [
        {
            title: "Verify Requirements Early",
            description: "All conference participants are kindly requested to verify and fulfill all of their own VISA requirements in advance of the conference."
        },
        {
            title: "Regulations Vary by Nationality",
            description: "The Visa regulations can vary significantly by nationality, and processing times may be longer than expected due to enhanced security measures worldwide."
        },
        {
            title: "Begin Process Early",
            description: "It's strongly recommended beginning the visa process as early as possible to avoid last-minute complications."
        }
    ];

    return (
        <Fade>
            <div className="bg-white rounded-2xl py-16 sm:py-10 mx-4 md:mx-16 mb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Important Notes
                    </h2>
                    
                    <div className="mx-auto mt-10 grid max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {notes.map((note, index) => (
                            <div key={index} className="col-span-1 flex flex-col items-center gap-4 bg-gray-50 p-6 rounded-lg shadow-sm border-t-4 border-[#7D0F24]">
                                <div className="w-12 h-12 rounded-full bg-[#F8E8EB] flex items-center justify-center text-[#7D0F24] font-bold text-xl">
                                    {index + 1}
                                </div>
                                <div className="text-2xl font-bold text-center">{note.title}</div>
                                <p className="text-center">
                                    {note.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-16 p-6 bg-gray-50 rounded-lg">
                        <p className="text-center text-lg">
                            <span className="font-bold">Please Note:</span> The conference organizers cannot assist with individual visa applications or intervene with embassies/consulates on behalf of participants.
                        </p>
                        <p className="text-center text-lg mt-4">
                            Upon the payment of your registration fees, an invitation letter will be available to support your visa application.
                        </p>
                    </div>
                    
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/registration"
                            className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-8 py-3 text-center text-base font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800 opacity-50 pointer-events-none"
                            aria-disabled="true"
                        >
                            <span className="">Register for Congress</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
}