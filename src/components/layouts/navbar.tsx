import { Button } from "@/components/ui/button"; // ShadCN UI Button component
import { navItems } from "@/constants/navItems";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/ies_syp_logo.png";

export default function Header() {
	return (
		<header className="rounded border-gray-200 px-4 py-2.5 sm:px-8">
			<div className="container mx-auto flex flex-wrap items-center justify-between">
				<Link href="/" className="flex items-center">
					<Image
						src={Logo}
						alt="IES Logo"
						width={100}
						height={100}
						className="mr-3 h-16 sm:h-20"
					/>
				</Link>
				<div className="hidden w-auto items-center justify-between lg:flex">
					<ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
						{navItems.map((item, index) => (
							<li key={index}>
								<Link
									href={item.link}
									className="block p-4 px-4 text-gray-600 transition-all duration-75 hover:font-bold focus:font-bold dark:text-gray-400 dark:hover:text-gray-200"
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<Button
					variant="ghost"
					className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
					aria-label="Open main menu"
				>
					<svg
						className="h-6 w-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				</Button>
			</div>
		</header>
	);
}
