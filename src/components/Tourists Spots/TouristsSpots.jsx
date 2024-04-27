import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Spots from "../Spots/Spots";

const TouristsSpots = () => {

    const [allspots, setAllspots] = useState([]);
    useEffect(() => {
        fetch('https://peaceful-tour-server.vercel.app/spot')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAllspots(data)
            })
    }, [])
    return (
        <div className="mb-10 lg:mb-20">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | TouristsSpots</title>
            </Helmet>
            <h2 className="mb-5 lg:mb-10 text-center font-extrabold text-2xl lg:text-5xl">Tourists Spots In Southasia</h2>
            <div className=" grid lg:grid-cols-2 gap-4 justify-center items-center">
                {
                    allspots.slice(0,6).map(spots => <Spots key={spots.id} spots={spots}></Spots>)
                }
            </div>
        </div>
    );
};

export default TouristsSpots;