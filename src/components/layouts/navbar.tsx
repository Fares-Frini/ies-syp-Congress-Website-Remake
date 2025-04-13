import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer"; // ShadCN Drawer components
import { navItems } from "@/constants/navItems";
import { MenuIcon } from "lucide-react"; // Icon for the menu button
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/ies_syp_logo.png";

export default function Header() {
	return (
		<div className="inline-flex items-center justify-between w-full px-4 py-4 bg-background z-20 sm:px-8">
			<div className="inline-flex items-center gap-10">
				<Link href="/" className="flex items-center">
					<Image
						src={Logo}
						alt="IES Logo"
						width={100}
						height={100}
						className="h-16 sm:h-20"
					/>
				</Link>
				
			</div>
			<div className="lg:hidden block">
				<Drawer direction="right">
					<DrawerTrigger>
						<MenuIcon size={35} />
					</DrawerTrigger>
					<DrawerContent>
						<div className="flex flex-col p-10 gap-10">
							<Image
								src={Logo}
								alt="IES Logo"
								className="self-center"
								width={100}
								height={100}
							/>
							<div className="flex flex-col gap-10">
								{navItems.map((item, index) => (
									<Link
										key={index}
										href={item.link}
										className={`text-foreground duration-200 text-xl ${
											item.name === 'Apply for Funding'
												? 'bg-[#7D0F24] text-white px-4 py-2 rounded-md hover:bg-[#B5172C] font-medium'
												: 'hover:text-gray-800'
										}`}
									>
										{item.name}
									</Link>
								))}
							</div>
						</div>
					</DrawerContent>
				</Drawer>
			</div>
			<div className="hidden items-center gap-6 lg:flex mr-10">
				{navItems.map((item, index) => (
					<Link
						key={index}
						href={item.link}
						className={
							item.name === 'Apply for Funding'
								? 'inline-flex items-center justify-center rounded-md bg-[#7D0F24] px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-[#B5172C] transition-all duration-200'
								: 'text-gray-500 hover:text-black text-xl'
						}
					>
						{item.name}
					</Link>
				))}
			</div>
		</div>
	);
}