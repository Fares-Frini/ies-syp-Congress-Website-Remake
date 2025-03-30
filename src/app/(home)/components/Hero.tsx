import Image from "next/image";

export default function Hero() {
	return (
		<div style={{ fontFamily: "Montserrat, sans-serif" }}>
			<section className="grid grid-cols-12 items-center justify-center py-10 md:py-12">
				<div className="col-span-12 mx-auto">
					<h1
						style={{ fontFamily: "Persian Sword, sans-serif" }}
						className="font-persian mb-4 text-center text-3xl font-bold tracking-tight sm:mb-8 sm:text-4xl lg:mb-8 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none"
					>
						IEEE IES 
					</h1>
					{/* <h1 className="mb-4 text-center text-2xl font-bold tracking-tight sm:mb-8 sm:text-3xl lg:mb-8 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						& 
					</h1> */}
					<h1
						style={{ fontFamily: "Persian Sword, sans-serif" }}
						className="font-persian mb-4 text-center text-3xl font-bold tracking-tight sm:mb-8 sm:text-4xl lg:mb-8 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none"
					>
						Student and Young Professional
					</h1>
					<div className="flex justify-center items-center mb-4 text-center text-3xl font-bold tracking-tight sm:mb-8 sm:text-4xl lg:mb-8 lg:text-center lg:text-5xl lg:font-extrabold lg:leading-none">
						<h1
							style={{ fontFamily: "Persian Sword, sans-serif" }}
							className="font-persian"
						>
							Congress
						</h1>
						<h1  className="text-[#7D0F24]  ml-2"><span className="text-8xl" style={{ fontFamily: "funwork, sans-serif" }}>  2</span>
							<span 							style={{ fontFamily: "Persian Sword, sans-serif" }}
 className="align-super text-2xl sm:text-4xl">nd</span> <span							style={{ fontFamily: "Persian Sword, sans-serif" }}
 >edition</span>
						</h1>
					</div>
					<h2 className="mb-2 text-center text-lg font-bold tracking-tight sm:mb-4 sm:text-xl lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						Ancient Foundations, Future Innovations
					</h2>
					<h2 className="mb-2 text-center text-lg font-bold tracking-tight sm:mb-4 sm:text-xl lg:mb-7 lg:text-center lg:text-2xl lg:font-extrabold lg:leading-none">
						Tunis, Tunisia
					</h2>
					<div className="mb-4 text-center sm:mb-8 lg:mb-7">
						<span className="text-lg font-bold tracking-tight sm:text-xl lg:text-2xl lg:font-extrabold lg:leading-none">
							15 - 17 August <span className="text-[#7D0F24]">2025</span>
						</span>
					</div>
					<Image
						src="/assets/Hero/banner.png"
						alt="banner"
						width={1200}
						height={300}
						className="mx-auto hidden h-40 object-contain sm:h-60 lg:block"
					/>
				</div>
			</section>
		</div>
	);
}