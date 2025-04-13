import { Fade } from "react-awesome-reveal";

export default function SelectionProcess() {
    const selectionCriteria = [
        {
            title: "IEEE & IES Involvement",
            description: "Evaluation of volunteering activities and leadership roles within IEEE and IES."
        },
        {
            title: "Endorsement Letters",
            description: "Strength and quality of endorsement letters from IEEE and IES leadership."
        },
        {
            title: "Geographical Representation",
            description: "Ensuring diversity across regions, sections, IES chapters and IES student branch chapters."
        }
    ];

    return (
        <Fade>
            <section className="mx-4 sm:mx-8 md:mx-16 py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Selection & Notification Process
                    </h2>
                    
                    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-10">
                        <div className="p-6">
                            <p className="text-lg text-center mb-8">
                                A selection committee from the IES SAC Committee and IES YP Committee will evaluate all applications based on:
                            </p>
                            
                            <div className="mx-auto mt-10 grid max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                                {selectionCriteria.map((criteria, index) => (
                                    <div key={index} className="col-span-1 flex flex-col items-center gap-4 bg-gray-50 p-6 rounded-lg shadow-sm border-t-4 border-[#7D0F24] h-64">
                                        <div className="w-12 h-12 rounded-full bg-[#F8E8EB] flex items-center justify-center text-[#7D0F24] font-bold text-xl">
                                            {index + 1}
                                        </div>
                                        <div className="text-xl font-bold text-center">{criteria.title}</div>
                                        <p className="text-center flex-grow">
                                            {criteria.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="p-4 bg-[#F8E8EB] rounded-lg border-l-4 border-[#7D0F24] mt-10">
                                <p className="text-lg">
                                    
                                     Priority will be given to ensure a fair representation of each Region through the fund. Subsequently, efforts will be made to have a fair representation of each Section within the Regions and each IES Student Branch Chapter, and IES Chapter. The goal is to achieve comprehensive inclusivity across all levels of the IEEE IES community.
                                </p>
                            </div>
                            <div className="p-4 bg-[#e8f8eb] rounded-lg border-l-4 border-[#359921] mt-10">
                                <p className="text-lg">
                                    
                                Selected applicants will be notified of their approved reimbursement amount upon confirmation of acceptance.                                </p>
                            </div> 
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
}