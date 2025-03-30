import Image from 'next/image';
import Link from 'next/link'; // Added import for Link

interface AboutUsProps {
	imageSrc: string;
	title: string;
	description: string;
	width: number;
	height: number;
	alt: string; // Added alt property
	inverted?: boolean; // New prop to determine layout inversion
	link?: string; // New prop for link URL
	showLink: boolean; // New prop to control link visibility
}

export function AboutUs({ imageSrc, title, description, width, height, alt, inverted, link = "https://ieee.tn/", showLink }: AboutUsProps) {
	return (
		<section className="mr-4 ml-4 grid items-center justify-center gap-4 py-4 md:grid-cols-12 md:py-16 sm:mr-35 sm:ml-35">
			{inverted ? (
				<>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
							About {title}.
						</h1>
							<p
								className="text-justify mb-4 mx-3 lg:mx-0 text-lg font-normal lg:mb-7 lg:text-start lg:text-xl lg:font-normal"
								style={{ textAlign: 'justify', textJustify: 'inter-word', wordBreak: 'break-word', whiteSpace: 'normal', display: 'block !important' }}
							>
								{description}
							</p>
						{showLink && ( // Conditionally render the link div
							<div>
								<Link
									href={link} // Use the link prop
									target="_blank"
									rel="noreferrer"
									className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
								>
									<span className="">Learn more about {title}</span> {/* Dynamically use title */}
								</Link>
							</div>
						)}
					</div>
					<div className="col-span-6 mx-auto">
						<Image
							src={imageSrc}
							className="mx-auto h-50 sm:h-75 object-contain responsive dark:hidden"
							alt={alt}
							width={width}
							height={height}
						/>
					</div>
				</>
			) : (
				<>
					<div className="col-span-6 mx-auto">
						<Image
							src={imageSrc}
							className="mx-auto h-50 sm:h-75 object-contain responsive dark:hidden"
							alt={alt}
							width={width}
							height={height}
						/>
					</div>
					<div className="col-span-6">
						<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
                        About {title}.
						</h1>
							<p
								className="text-justify mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal"
								style={{ textAlign: 'justify', textJustify: 'inter-word', wordBreak: 'break-word', whiteSpace: 'normal', display: 'block !important' }}
							>
								{description}
							</p>
						{showLink && ( // Conditionally render the link div
							<div>
								<Link
									href={link} // Use the link prop
									target="_blank"
									rel="noreferrer"
									className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800"
								>
									<span className="">Learn more about {title}</span> {/* Dynamically use title */}
								</Link>
							</div>
						)}
					</div>
				</>
			)}
		</section>
	);
}