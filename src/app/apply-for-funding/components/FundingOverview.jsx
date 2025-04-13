import { Fade } from "react-awesome-reveal";

export default function FundingOverview() {
    return (
        <Fade>
            <section className="mr-4 ml-4 grid items-center justify-center gap-4 py-4 md:grid-cols-12 md:py-16 sm:mr-35 sm:ml-35">
                <div className="col-span-12 md:col-span-8 md:col-start-3">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none text-[#7D0F24]">
                        About the IES SYP Congress
                    </h1>
                    <p className="text-justify mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
                        The IEEE Industrial Electronics Society (IES) Student and Young Professional (IEEE IES SYP) Congress is a key event that brings together students, young professionals, academia, and industry leaders. The 2025 edition will take place from 15-17 August 2025, in Tunis, Tunisia.
                    </p>
                    <p className="text-justify mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
                        Funding will be available for student and YP members of IES to attend, helping to cover expenses such as airfare, registration fees for the congress, accommodation, visa fees, and transportation costs.
                    </p>
                    <p className="text-justify mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal">
                        This congress serves as a platform for professional development, technical sessions, networking opportunities, and collaboration between IEEE IES members worldwide.
                    </p>
                    <div className="p-4 bg-[#F8E8EB] rounded-lg border-l-4 border-[#7D0F24] mb-6">
                        <p className="text-lg font-medium">
                            <span className="font-bold">Important Note:</span> All expenses must comply with IEEE Travel Expense Reimbursement Guidelines. Any expenses outside of the eligible categories will not be covered.
                        </p>
                    </div>
                </div>
            </section>
        </Fade>
    );
}