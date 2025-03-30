import { Button } from "@/components/ui/button";
import { Fade } from "react-awesome-reveal";
import { FaTent } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

import AboutTunisia from "./components/AboutTunsia";
import Gallerie from "./components/Gallerie";
import Exchange from "./components/exchange";
import FindUs from "./components/findus";

export default function Tunisia() {
    return (
        <section>
			<Fade triggerOnce>
				<section style={{ fontFamily: "Persian Sword, sans-serif" }} className="grid grid-cols-12 items-center justify-center md:pt-32">
					<div className="col-span-12 md:mx-auto">
						<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-6xl lg:font-extrabold lg:leading-none text-[#7D0F24] text-center md:text-start">
							Discover Tunisia
						</h1>
					</div>
				</section>
			</Fade>
            <div className="mx-4 md:mx-40">
                <AboutTunisia />
                <Gallerie />
                <Exchange />
                <FindUs />
            </div>
            {/* <Fade triggerOnce>  ------- Buttons for more information about Tunisia and survival guide -------
            <div className="w-full max-w-4xl mx-auto rounded-lg p-10 text-center">
                <p className="mb-16 text-2xl font-semibold sm:text-3xl">
                    Discover more about Tunisia and prepare for your journey!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-y-6 gap-x-4">
                    <Button asChild className="col-span-1 sm:col-span-3 bg-[#7D0F24] hover:bg-[#8B1C2D] focus:ring-2 focus:ring-[#7D0F24]/40 px-8 py-6 text-2xl sm:text-3xl rounded-md">
                        <a href="/survival-guide">
                            <FaTent className="h-14 w-14 sm:h-16 sm:w-16" />
                            <span className="font-bold">Survival Guide</span>
                        </a>
                    </Button>
                    <Button asChild className="col-span-1 sm:col-span-3 bg-[#7D0F24] hover:bg-[#8B1C2D] focus:ring-2 focus:ring-[#7D0F24]/40 px-8 py-6 text-2xl sm:text-3xl rounded-md">
                        <a href="/about-tunisia">
                            <HiOutlineExternalLink className="h-14 w-14 sm:h-16 sm:w-16" />
                            <span className="font-bold">More About Tunisia</span>
                        </a>
                    </Button>
                </div>
            </div>
            </Fade> */}
        </section>
    );
}