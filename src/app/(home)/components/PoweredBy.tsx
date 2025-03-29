import { poweredByItems } from "@/constants/poweredBy";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function PoweredBy() {
	return (
		<Fade>
			<div className="flex justify-center">
				<div className="mt-26 max-w-7xl px-6 lg:px-8">
					<h2 className="mb-5 text-center text-4xl font-bold">Powered By</h2>
					<div className="flex items-center justify-center">
						<div className="flex flex-wrap items-center gap-5 sm:gap-x-10 sm:max-w-xl lg:mx-0 lg:max-w-none">
							{poweredByItems.map((item, index) => (
								<a
									key={index}
									href={item.href}
									target="_blank"
									rel="noreferrer"
									className="overflow-hidden rounded-full shadow-md shadow-gray-200 transition hover:scale-105 dark:invert"
								>
									<Image
										className="h-[80px] w-[80px] bg-white object-contain p-2 transition hover:scale-105 dark:shadow-gray-800 sm:h-[120px] sm:w-[120px] md:h-[200px] md:w-[200px]"
										src={item.src}
										alt={item.alt}
										width={200}
										height={200}
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