"use client";

import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { IoIosArrowRoundForward } from "react-icons/io"; // Replaced FontAwesomeIcon with IoIosArrowRoundForward

export default function Exchange() {
	const [usdToTnd, setUsdToTnd] = useState(0);
	const fiveTnd = "/assets/tunisia/money/5tnd.jpg"; // Example image paths
	const tenTnd = "/assets/tunisia/money/10tnd.jpg";
	const twentyTnd = "/assets/tunisia/money/20tnd.jpg";
	const fiftyTnd = "/assets/tunisia/money/50tnd.jpg";

	return (
		<Fade triggerOnce>
			<section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-28">
				<div className="col-span-6">
					<h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
						Currency
					</h1>
					<h1 className="mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
						The national currency is the Tunisian dinar which is very friendly
						to foreign currencies.
					</h1>
					<div className="grid items-end gap-4 md:grid-cols-12">
						<div className="md:col-span-5">
							<label
								htmlFor="usd"
								className="mb-2 block font-medium dark:text-white"
							>
								United States Dollar (USD)
							</label>
							<input
								value={usdToTnd}
								min={0}
								type="number"
								id="usd"
								className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 transition focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								required
								onChange={(e) => setUsdToTnd(Number(e.target.value))}
							/>
						</div>
						<div className="text-center md:col-span-2">
							<IoIosArrowRoundForward className="h-9 w-9 rotate-90 md:rotate-0" />
						</div>
						<div className="md:col-span-5">
							<label
								htmlFor="tnd"
								className="mb-2 block font-medium dark:text-white"
							>
								Tunisian Dinar (TND)
							</label>
							<input
								value={Math.floor(usdToTnd * 3.11)}
								readOnly
								type="number"
								id="tnd"
								className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2.5 transition focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
								required
							/>
						</div>
					</div>
				</div>
				<div className="col-span-6 mx-auto hidden w-full md:block">
					<div className="grid gap-4 md:grid-cols-12">
						{[fiveTnd, tenTnd, twentyTnd, fiftyTnd]?.map((e, index) => (
							<Image
								key={index}
								className="h-40 w-full rounded-2xl object-cover shadow md:col-span-6"
								src={e}
								alt={`Tunisian Dinar ${index + 1}`}
								width={500} // Adjust width as needed
								height={500} // Adjust height as needed
							/>
						))}
					</div>
				</div>
			</section>
		</Fade>
	);
}