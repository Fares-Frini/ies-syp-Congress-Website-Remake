import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { TfiWorld } from "react-icons/tfi";

function AboutCongress() {
	return (
		<Fade>
			<div className="bg-white rounded-2xl py-24 sm:py-10">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<h2 className="mb-12 text-center text-4xl font-bold">
						About IES SYP Congress 2025
					</h2>
					<div className="mx-auto mt-10 grid max-w-lg items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-12">
						<div className="col-span-4 flex flex-col items-center gap-4">
							<TfiWorld
							className="h-14 w-14 object-contain text-[#7D0F24]"/>
							<div className="text-2xl font-bold">International Network</div>
							<p className="text-center">
							Connect with students, young professionals, academics, and industry leaders worldwide to build meaningful relationships and expand your global professional circle.
							</p>
						</div>
						<div className="col-span-4 flex flex-col items-center gap-4">
							<Image
								className="h-14 w-14 object-contain"
								src="/assets/icons/learn.png"
								alt=""
								width={56}
								height={56}
							/>
							<div className="text-2xl font-bold">Learn</div>
							<p className="text-center">
							Engage in keynote speeches, hands-on workshops, and expert-led panels to gain knowledge and develop essential skills in engineering, technology, and leadership.
							</p>
						</div>
						<div className="col-span-4 flex flex-col items-center gap-4">
							<Image
								className="h-14 w-14 object-contain"
								src="/assets/icons/goal.png"
								alt=""
								width={56}
								height={56}
							/>
							<div className="text-2xl font-bold">Grow</div>
							<p className="text-center">
							Enhance your career prospects through interactive sessions and collaborative experiences that foster innovation, professional development, and lifelong learning.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default AboutCongress;