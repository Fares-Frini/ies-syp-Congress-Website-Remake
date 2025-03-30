import { team } from "@/constants/Team";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Team({ limit = 0 }) {
	return (
		<Fade>
			<div id='Team' className="mr-4 ml-4  gap-4 py-4 md:grid-cols-12 md:py-16 sm:mr-35 sm:ml-35">

				<div className="mb-8 text-2xl font-bold sm:text-4xl">Meet The Team</div>
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-12 md:gap-4">
					{team
						?.slice(0, 30)
						?.map((speaker, idx) => {
							if (idx >= limit && limit !== 0) return null;

							return (
								<Link
									key={speaker.name}
									href={`/about-us/#Team`}
									className="col-span-1 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 sm:col-span-6 md:col-span-3 lg:col-span-2"
								>
									<Image
										src={speaker.image.url}
										alt={speaker.name}
										className="mb-2 aspect-[12/16] w-full rounded-lg object-cover"
										loading="lazy"
										width={300}
										height={400}
									/>
									<div className="font-bold text-sm sm:text-base">{speaker.name}</div>
									<div className="text-xs sm:text-sm line-clamp-2">{speaker.title}</div>
								</Link>
							);
						})}

					{limit ? (
						<Link
							href={`/speakers`}
							className="col-span-1 flex flex-col items-center justify-center rounded-xl border-2 p-4 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 sm:col-span-6 md:col-span-3 lg:col-span-2"
						>
							<HiOutlineExternalLink className="mb-2 h-5 w-5 sm:h-6 sm:w-6" />
							<div className="font-bold text-sm sm:text-base">See more</div>
						</Link>
					) : null}
				</div>
			</div>
		</Fade>
	);
}
