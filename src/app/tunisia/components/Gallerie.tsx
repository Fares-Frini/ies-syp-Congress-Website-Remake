
import { tunisiaImages } from "@/constants/TunisiaGallerie";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Gallerie() {
    return (
        <Fade triggerOnce>
            <section className="py-8 md:py-28">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {tunisiaImages.map((column, columnIndex) => (
                        <div key={columnIndex} className="grid gap-4">
                            {column.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                    <Image
                                        className="h-full w-full rounded-lg object-cover"
                                        src={image.src}
                                        alt={image.alt || "Tunisia Image"}
                                        width={500}
                                        height={500}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </Fade>
    );
}