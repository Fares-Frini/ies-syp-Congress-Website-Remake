import Image from "next/image";
import { Fade } from "react-awesome-reveal";

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
							<Image
								className="h-14 w-14 object-contain"
								src="/assets/icons/network.png"
								alt=""
								width={56}
								height={56}
							/>
							<div className="text-2xl font-bold">Network</div>
							<p className="text-center">
								Network and build relationships with other volunteers within IEEE.
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
								To provide an opportunity for delegates to gain information and
								training skills.
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
							<div className="text-2xl font-bold">Plan ahead</div>
							<p className="text-center">
								Collectively shape the future and goals of the IEEE.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}

export default AboutCongress;