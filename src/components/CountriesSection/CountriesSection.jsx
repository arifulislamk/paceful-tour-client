import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import { Fade } from "react-awesome-reveal";

const CountriesSection = () => {

    const [allcountry, setAllCountry] = useState([]);
    const [loading, setlLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/country`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllCountry(data)
                setlLoading(false)
            })
    }, [])
    return (
        <div className="font-algeria mb-5 lg:mb-20">
            {loading && <div className=" mt-6 flex justify-center"><span className="loading text-yellow-400 loading-spinner loading-lg"></span></div>}
            <h2 className="mb-5 lg:mb-20 text-center font-roboto font-extrabold text-2xl lg:text-5xl">Country Section</h2>
            <Fade cascade duration={3000} >
                <div className=" grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-8">
                    {
                        allcountry.map(country => <CountryCard key={country._id} country={country}></CountryCard>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default CountriesSection;