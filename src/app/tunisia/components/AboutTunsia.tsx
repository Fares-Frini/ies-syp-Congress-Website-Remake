import { Fade } from "react-awesome-reveal";

export default function AboutTunisia() {
    return (
        <Fade triggerOnce>
            <section className="grid items-center justify-center gap-12 py-8 md:grid-cols-12 md:py-28">
                <div className="col-span-6">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
                        Tunisia - تونس
                    </h1>
                    <p className="mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
                        There’s so much to see and do in each region of Tunisia: a wide
                        variety of landscapes, a coastline spanning 1,250km, studded with
                        islands and archipelagos, a fantastic array of traditions and
                        customs and a rich historical heritage. We are delighted to
                        introduce you to these regions by breaking them down into this
                        video.
                    </p>
                </div>
                <div className="col-span-6 mx-auto w-full">
                    <iframe
                        className="mx-auto h-56 w-full rounded-2xl shadow-lg sm:h-96"
                        src="https://www.youtube.com/embed/cR8mH08xNVw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
        </Fade>
    );
}