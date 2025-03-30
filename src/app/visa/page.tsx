import VisaHero from "./components/VisaHero"; 
import VisaRequirements from "./components/VisaRequirements"; 
import VisaApplication from "./components/VisaApplication"; 
import VisaFreeCountries from "./components/VisaFreeCountries";
import ImportantNotes from "./components/ImportantNotes"; 

export default function Visa() {
    return (
        <div className="">
            <VisaHero />
            <VisaRequirements />
            <VisaFreeCountries />
            <VisaApplication />
            <ImportantNotes />
        </div>
    );
}