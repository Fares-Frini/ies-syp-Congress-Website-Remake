import { speakers } from "@/constants/speakers";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Speakers() {
    return (
        <Fade>
            <div className="mr-4 ml-4  gap-4 py-4 md:grid-cols-12 md:py-16 sm:mr-35 sm:ml-35">
                <div style={{ fontFamily: "Persian Sword, sans-serif" }}
 className="mb-15 text-4xl font-bold sm:text-6xl text-center text-[#7D0F24] ">Speakers</div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-12 md:gap-4">
                    {speakers
                        ?.filter((e) => e?.enabled)
                        ?.map((speaker) => (
                            <Link
                                key={speaker.name}
                                href={`/speakers/${speaker.slug}`}
                                className="col-span-1 rounded-xl border-2 p-2 transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:hover:border-gray-600 dark:focus:border-gray-500 sm:col-span-6 md:col-span-3 lg:col-span-2"
                            >
                                <Image
                                    src={speaker.imageSmall.url}
                                    alt={speaker.name}
                                    className="mb-2 aspect-[12/16] w-full rounded-lg object-cover"
                                    loading="lazy"
                                    width={300}
                                    height={400}
                                />
                                <div className="font-bold text-sm sm:text-base">{speaker.name}</div>
                                <div className="text-xs sm:text-sm line-clamp-2">{speaker.title}</div>
                            </Link>
                        ))}
                </div>
            </div>
        </Fade>
    );
}
