import { aboutUsList } from "../../constants/aboutus";
import AboutCongress from "./components/aboutCongress";
import { AboutUs } from "./components/Aboutus";
import { Collaborators } from "./components/Collaborators";
import Hero from "./components/Hero";
import { Memories } from "./components/memories";
import { PoweredBy } from "./components/PoweredBy";
import Speakers from "./components/Speakers";
import { Team } from "./components/Team";

export default function Home() {
    return (
        <div className="">
            <Hero />
            {aboutUsList.map((item, index) => (
                <AboutUs
                    key={index}
                    imageSrc={item.imageSrc}
                    alt={item.alt || `Image for ${item.title}`}
                    title={item.title}
                    description={item.description}
                    width={item.width}
                    height={item.height}
                    inverted={index % 2 !== 0} 
                    showLink={item.showLink ?? false}                />
            ))}
            <AboutCongress/>
            <Memories/>
            <PoweredBy/>
            <Speakers limit={5} />
            <Team/>
            <Collaborators/>
        </div>
    );
}