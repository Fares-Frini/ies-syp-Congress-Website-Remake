import { navItems } from "@/constants/navItems";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className="container mx-auto p-4 md:px-6 md:py-8">
			<div className="flex flex-col items-center gap-4 sm:justify-between lg:flex-row">
				<div className="hidden flex-wrap items-center gap-2 text-sm lg:flex">
					<Link
						href="#"
						target="_blank"
						className="font-semibold"
					>
						© 2025 All rights reserved.
					</Link>
				</div>

				<div className="hidden items-center gap-4 md:flex ml-auto">
					<ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
						{navItems.map((item, index) => (
							<li key={index}>
								<Link
									href={item.link}
									className="hover:focus:block p-4 px-4 text-gray-600 transition-all duration-75 hover:underline focus:font-bold dark:text-gray-400 dark:hover:text-gray-200"
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<a
					href="https://www.facebook.com/profile.php?id=61557438382350"
					target="_blank"
					rel="noreferrer"
					className="text-gray-600 dark:text-gray-400"
					aria-label="facebook page"
				>
					<FaFacebook />
				</a>
				<a
					href="https://www.instagram.com/ieee.ies.syp_congress_2024/"
					target="_blank"
					rel="noreferrer"
					className="text-gray-600 dark:text-gray-400"
					aria-label="instagram page"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.linkedin.com/in/ieee-ies-syp-congress-b597812b9/"
					target="_blank"
					rel="noreferrer"
					className="text-gray-600 dark:text-gray-400"
					aria-label="linkedin page"
				>
					<FaLinkedin />
				</a>
			</div>
		</footer>
	);
}
