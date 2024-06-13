import { useParams } from "react-router-dom";
import Spots from "../Spots/Spots";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Slide } from "react-awesome-reveal";

const EachCountry = () => {
    const [loading, setLoading] = useState(true)
    // const loadedData = useLoaderData();
    // console.log('data', loadedData)
    const [loadedData, setLoadedData] = useState([])
    const { country } = useParams();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/country/${country}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLoadedData(data)
                setLoading(false)
            })
    }, [])

    const countryone = [];
    loadedData.map(country => countryone.push(country.country))
    const filterCountry = countryone.find(country => country !== 'America')
    console.log(filterCountry)

    return (
        <div className="bg-base-200 mt-16 lg:p-10 ">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Country</title>
            </Helmet>
            <Slide direction="right" cascade delay={300} triggerOnce>
                {loading && <div className=" mt-6 flex justify-center"><span className="loading text-yellow-400 loading-spinner loading-lg"></span></div>}
                <h2 className="lg:mb-10 text-xl lg:text-3xl font-medium text-center">{filterCountry} Tourists Spots</h2>
                <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        loadedData.map(country => <Spots key={country._id} spots={country}></Spots>)
                    }
                </div>
            </Slide>
        </div>
    );
};

export default EachCountry;