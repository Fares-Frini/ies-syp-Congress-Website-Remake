import { Fade } from "react-awesome-reveal";
import { aboutUsList } from "../../constants/aboutus";
import { About } from "./components/Aboutus";
import Team from "./components/Team";
import { ContactDetails } from "./components/ContactDetails";

export default function Aboutus() {
	return (
		<div>
			{aboutUsList.map((item, index) => (
                            <About
                    key={index}
                    imageSrc={item.imageSrc}
                    alt={item.alt || `Image for ${item.title}`}
                    title={item.title}
                    description={item.description}
                    width={item.width}
                    height={item.height}
                    inverted={index % 2 !== 0}
                    showLink={item.showLink ?? false} link={item.link}                />
                        ))}

			<Fade triggerOnce>
				<Team />
			</Fade>

			<Fade triggerOnce>
				<div className="mt-4">
					<ContactDetails />
				</div>
			</Fade>

			{/* <Fade triggerOnce>
				<ContactForm />
			</Fade> */}
		</div>
	);
}
