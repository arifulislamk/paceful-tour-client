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
        <div>
            <h2 className=" text-5xl font-medium text-center lg:mb-20 lg:mt-36 ">Country Section</h2>

            <div className=" grid lg:grid-cols-2 gap-4">
                {
                    allcountry.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                }
            </div>
        </div>
    );
};

export default CountriesSection;