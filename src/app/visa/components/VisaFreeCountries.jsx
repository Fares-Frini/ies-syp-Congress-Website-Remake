import { Fade } from "react-awesome-reveal";
import Image from "next/image";

export default function VisaFreeCountries() {
    // Country objects with country names and ISO codes for flags
    const visaFreeCountries = [
        { name: "All European Union citizens (except Cyprus)", code: "eu" },
        { name: "Algeria", code: "dz" },
        { name: "Andorra", code: "ad" },
        { name: "Angola", code: "ao" },
        { name: "Antigua and Barbuda", code: "ag" },
        { name: "Argentina", code: "ar" },
        { name: "Australia", code: "au" },
        { name: "Bahrain", code: "bh" },
        { name: "Barbados", code: "bb" },
        { name: "Benin", code: "bj" },
        { name: "Bosnia and Herzegovina", code: "ba" },
        { name: "Brazil", code: "br" },
        { name: "Brunei", code: "bn" },
        { name: "Burkina Faso", code: "bf" },
        { name: "Canada", code: "ca" },
        { name: "Cape Verde", code: "cv" },
        { name: "Chile", code: "cl" },
        { name: "Comoros", code: "km" },
        { name: "Costa Rica", code: "cr" },
        { name: "Cote d'Ivoire", code: "ci" },
        { name: "Equatorial Guinea", code: "gq" },
        { name: "Fiji", code: "fj" },
        { name: "Gabon", code: "ga" },
        { name: "Gambia", code: "gm" },
        { name: "Guinea", code: "gn" },
        { name: "Guinea Bissau", code: "gw" },
        { name: "Hong Kong", code: "hk" },
        { name: "Honduras", code: "hn" },
        { name: "Iceland", code: "is" },
        { name: "Japan", code: "jp" },
        { name: "Jordan", code: "jo" },
        { name: "Kiribati", code: "ki" },
        { name: "South Korea", code: "kr" },
        { name: "Kuwait", code: "kw" },
        { name: "Libya", code: "ly" },
        { name: "Liechtenstein", code: "li" },
        { name: "Malaysia", code: "my" },
        { name: "Maldives", code: "mv" },
        { name: "Mali", code: "ml" },
        { name: "Mauritania", code: "mr" },
        { name: "Mauritius", code: "mu" },
        { name: "Mexico", code: "mx" },
        { name: "Moldova", code: "md" },
        { name: "Monaco", code: "mc" },
        { name: "Montenegro", code: "me" },
        { name: "Morocco", code: "ma" },
        { name: "Namibia", code: "na" },
        { name: "New Zealand", code: "nz" },
        { name: "Niger", code: "ne" },
        { name: "North Macedonia", code: "mk" },
        { name: "Norway", code: "no" },
        { name: "Oman", code: "om" },
        { name: "Qatar", code: "qa" },
        { name: "Russia", code: "ru" },
        { name: "Saint Kitts and Nevis", code: "kn" },
        { name: "Saint Lucia", code: "lc" },
        { name: "San Marino", code: "sm" },
        { name: "Saudi Arabia", code: "sa" },
        { name: "Senegal", code: "sn" },
        { name: "Serbia", code: "rs" },
        { name: "Seychelles", code: "sc" },
        { name: "Singapore", code: "sg" },
        { name: "South Africa", code: "za" },
        { name: "Switzerland", code: "ch" },
        { name: "Turkey", code: "tr" },
        { name: "United Arab Emirates", code: "ae" },
        { name: "United Kingdom", code: "gb" },
        { name: "United States", code: "us" },
        { name: "Vatican City", code: "va" }
    ];
    const tourVoucherCountries = [
        { name: "Azerbaijan", code: "az" },
        { name: "Georgia", code: "ge" },
        { name: "India", code: "in" },
        { name: "Indonesia", code: "id" },
        { name: "Kyrgyzstan", code: "kg" },
        { name: "Tajikistan", code: "tj" },
        { name: "Turkmenistan", code: "tm" },
        { name: "Ukraine", code: "ua" },
        { name: "Uzbekistan", code: "uz" }
    ];
    const specialCases = [
        { country: "Canada", code: "ca", duration: "4 months" },
        { country: "Germany", code: "de", duration: "4 months" },
        { country: "Bulgaria", code: "bg", duration: "2 months" },
        { country: "Greece", code: "gr", duration: "1 month" },
        { country: "United States", code: "us", duration: "4 months" }
    ];
    return (
        <Fade>
            <div className="bg-white rounded-2xl py-16 sm:py-10 mx-4 md:mx-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="mb-12 text-center text-4xl font-bold">
                        Visa-Free Entry
                    </h2>
                    <p className="text-center mb-8 text-lg">
                        Citizens of the following countries do not need a visa for short stays (typically 90 days or less):
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-12">
                        {visaFreeCountries.map((country, index) => (
                            <div key={index} className="py-2 px-4 bg-gray-50 rounded-md text-sm md:text-base flex items-center">
                                <Image 
                                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                    width={40}
                                    height={30}
                                    className="mr-2"
                                />
                                <span>{country.name}</span>
                            </div>
                        ))}
                    </div>
                    <h3 className="mb-6 text-center text-2xl font-bold">
                        Special Duration Cases
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                        {specialCases.map((item, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-md flex flex-col items-center">
                                <div className="mb-3">
                                    <Image 
                                        src={`https://flagcdn.com/w80/${item.code.toLowerCase()}.png`}
                                        alt={`${item.country} flag`}
                                        width={80}
                                        height={60}
                                    />
                                </div>
                                <div className="text-xl font-semibold">{item.country}</div>
                                <div>Can stay up to <span className="font-bold">{item.duration}</span> without a visa</div>
                            </div>
                        ))}
                    </div>
                    <h3 className="mb-6 text-center text-2xl font-bold">
                        Organized Tour with Hotel Voucher
                    </h3>
                    
                    <p className="text-center mb-8 text-lg">
                        Citizens of the following nations who travel on an organized tour and hold a hotel voucher can enter Tunisia without a visa:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        {tourVoucherCountries.map((country, index) => (
                            <div key={index} className="py-3 px-4 bg-gray-50 rounded-md flex items-center">
                                <Image 
                                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                    alt={`${country.name} flag`}
                                    width={40}
                                    height={30}
                                    className="mr-2"
                                />
                                <span>{country.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p className="text-center text-lg font-medium">
                            Note: Always check with the Tunisian embassy or consulate in your country for the latest updates.
                        </p>
                    </div>
                </div>
            </div>
        </Fade>
    );
}