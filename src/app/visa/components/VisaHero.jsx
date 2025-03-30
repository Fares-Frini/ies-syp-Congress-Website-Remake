import Image from "next/image";

export default function VisaHero() {
    return (
        <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            <section className="grid grid-cols-12 items-center justify-center py-10 md:py-12 bg-gradient-to-b from-[#F8E8EB]/50 to-white mt-10 sm:mt-16 md:mt-20">
                <div className="col-span-12 mx-auto pt-8 md:pt-12">
                    <h1
                        style={{ fontFamily: "Persian Sword, sans-serif" }}
                        className="font-persian mb-4 text-center text-3xl font-bold tracking-tight sm:mb-8 sm:text-4xl lg:mb-8 lg:text-center lg:text-6xl lg:font-extrabold lg:leading-none text-[#7D0F24]"
                    >
                        Visa Requirements
                    </h1>

                    <div className="w-16 h-1 bg-[#7D0F24] mx-auto mb-6"></div>

                    <h2 className="mb-2 text-center text-lg font-bold tracking-tight sm:mb-4 sm:text-xl lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
                        For Travelers to Tunisia
                    </h2>

                    <p className="max-w-2xl mx-auto text-center text-lg mb-6 px-4">
                        Find out if you need a visa to visit Tunisia, check eligibility for visa-free travel, 
                        and learn about the application process for different nationalities.
                    </p>

                    <div className="mb-8 text-center">
                        <span className="text-lg font-semibold sm:text-xl inline-block px-4 py-1 bg-[#7D0F24]/10 text-[#7D0F24] rounded-full">
                            Last Updated: January 2025
                        </span>
                    </div>
                </div>
            </section>
        </div>
    );
}