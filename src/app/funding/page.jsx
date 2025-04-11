import FundingHero from "./components/FundingHero"; 
import FundingOverview from "./components/FundingOverview"; 
import ApplicationProcess from "./components/ApplicationProcess"; 
import SelectionProcess from "./components/SelectionProcess"; 
import ReimbursementProcess from "./components/ReimbursementProcess";
import ContactInformation from "./components/ContactInformation"; 

export default function Funding() {
    return (
        <div className="">
            <FundingHero />
            <FundingOverview />
            <ApplicationProcess />
            <SelectionProcess />
            <ReimbursementProcess />
            <ContactInformation />
        </div>
    );
}