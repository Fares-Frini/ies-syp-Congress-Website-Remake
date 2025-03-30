import Script from "next/script";
import { Fade } from "react-awesome-reveal";

export default function FindUs() {
    return (
        <Fade triggerOnce>
            <section className="py-2 md:py-7">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="mb-4 text-3xl font-bold tracking-tight text-center sm:text-4xl lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
                        Find us here.
                    </h1>
                    <div
                        className="w-full rounded-2xl shadow-lg overflow-hidden"
                        style={{
                            height: "500px", // Adjust height for smaller screens
                        }}
                    >
                        <iframe
                            title="gmap embed"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6775315.518954521!2d9.560763999999999!3d33.98586695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1683130409503!5m2!1sen!2stn"
                            style={{
                                border: 0,
                                width: "100%",
                                height: "100%",
                            }}
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
            <Script
                src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"
                strategy="lazyOnload"
            />
        </Fade>
    );
}