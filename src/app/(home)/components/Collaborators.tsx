import { collaborators } from "@/constants/collaborators";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function Collaborators() {
	return (
		<Fade>
			<div className="flex justify-center">
				<div className="mt-10 mb-15 max-w-7xl px-6 lg:px-8">
					<h2 className="mb-5 text-center text-4xl font-bold">Collaborators</h2>
					<div className="flex items-center justify-center">
						<div className="flex flex-wrap items-center justify-center gap-5 sm:gap-x-10 sm:max-w-xl lg:mx-0 lg:max-w-none">
							{collaborators.map((item, index) => (
								<a
									key={index}
									href={item.href}
									target="_blank"
									rel="noreferrer"
									className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
								>
									<Image
										className="h-[60px] w-[60px] bg-white object-contain p-2 transition hover:scale-105 dark:shadow-gray-800 sm:h-[90px] sm:w-[90px] md:h-[150px] md:w-[150px]"
										src={item.src}
										alt={item.alt}
										width={150}
										height={150}
									/>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</Fade>
	);
}