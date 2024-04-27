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
        <div>
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | TouristsSpots</title>
            </Helmet>
            <h2>Tourists Spots {allspots.length}</h2>
            <div className=" grid lg:grid-cols-2 gap-4 justify-center items-center">
                {
                    allspots.map(spots => <Spots key={spots.id} spots={spots}></Spots>)
                }
            </div>
        </div>
    );
};

export default TouristsSpots;