import Link from "next/link";

export default function FundingHero() {
    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <section className="grid grid-cols-12 items-center justify-center py-10 md:py-12 bg-gradient-to-b from-[#F8E8EB]/50 to-white mt-10 sm:mt-16 md:mt-20">
                <div className="col-span-12 mx-auto pt-8 md:pt-12">
                    <h1
                        style={{ fontFamily: "Persian Sword, sans-serif" }}
                        className="font-persian mb-4 text-center text-3xl font-bold tracking-tight sm:mb-8 sm:text-4xl lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none text-[#7D0F24]"
                    >
                        Funding Manual
                    </h1>
                    <div className="w-16 h-1 bg-[#7D0F24] mx-auto mb-6"></div>
                    <h2 className="mb-2 text-center text-lg font-bold tracking-tight sm:mb-4 sm:text-xl lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
                        IEEE IES SYP Congress – Tunis, Tunisia 2025
                    </h2>
                    <p className="max-w-2xl mx-auto text-center text-lg mb-6 px-4">
                        Financial support for students and young professionals to attend the congress, covering travel expenses, registration fees, and more.
                    </p>
                    <div className="mb-8 text-center">
                        <span className="text-lg font-semibold sm:text-xl inline-block px-4 py-1 bg-[#7D0F24]/10 text-[#7D0F24] rounded-full">
                            Application Deadline: 30 April 2025
                        </span>
                    </div>
                    
                    <div className="flex justify-center mx-auto mb-8">
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
        </div>
    );
}