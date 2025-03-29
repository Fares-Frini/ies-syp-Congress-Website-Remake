import { imageGalleryItems } from "@/constants/memories";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export function Memories() {
	return (
		<Fade>
			<div className="mx-4 mt-10 md:mx-40">
				<h2 className="mb-8 text-center text-2xl font-bold md:mb-12 md:text-4xl">
					Memories from Previous Editions
				</h2>
				<div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
					{imageGalleryItems.map((item, index) => (
						<div key={index} className="grid gap-4 sm:gap-6">
							{item.map((src, idx) => (
								<div key={idx}>
									<Image
										className="h-full w-full rounded-xl object-cover sm:rounded-2xl"
										src={src}
										alt=""
										width={400} // Adjust width for smaller screens
										height={400} // Adjust height for smaller screens
									/>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</Fade>
	);
}