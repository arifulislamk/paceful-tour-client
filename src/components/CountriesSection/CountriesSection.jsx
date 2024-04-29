import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

const CountriesSection = () => {

    const [allcountry, setAllCountry] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-tour-server.vercel.app/country')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllCountry(data)
            })
    }, [])
    return (
        <div className="font-algeria mb-5 lg:mb-20">
            <h2 className="mb-5 lg:mb-20 text-center font-roboto font-extrabold text-2xl lg:text-5xl">Country Section</h2>

            <div className=" grid lg:grid-cols-2 gap-4 lg:gap-8">
                {
                    allcountry.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default CountriesSection;