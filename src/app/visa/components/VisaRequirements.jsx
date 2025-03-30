import { Fade } from "react-awesome-reveal";

export default function VisaRequirements() {
    return (
        <Fade>
            <section className="mr-4 ml-4 grid items-center justify-center gap-4 py-4 md:grid-cols-12 md:py-16 sm:mr-35 sm:ml-35">
                <div className="col-span-12 md:col-span-8 md:col-start-3">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none text-[#7D0F24]">
                        Visa Policy for Tunisia
                    </h1>
                    <p className="text-justify mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
                        Tunisia's visa policy varies depending on your nationality. Some travelers can 
                        enter visa-free, while others require a visa in advance. Citizens from many 
                        countries can stay in Tunisia without a visa for up to 90 days, while others 
                        may need to apply for a visa at a Tunisian embassy or consulate before arrival.
                    </p>
                    <div className="p-4 bg-[#F8E8EB] rounded-lg border-l-4 border-[#7D0F24] mb-6">
                        <p className="text-lg font-medium">
                            <span className="font-bold">Important Note:</span> Always check with the Tunisian embassy or consulate in your country for the most up-to-date visa information before planning your trip.
                        </p>
                    </div>
                </div>
            </section>
        </Fade>
    );
}