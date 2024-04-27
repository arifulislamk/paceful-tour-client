import { useLoaderData } from "react-router-dom";
import Spots from "../Spots/Spots";
import { Helmet } from "react-helmet-async";

const AllTouristsSpot = () => {
    const allspots = useLoaderData();
    console.log(allspots)
    return (
        <div>
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | AllTouristsSpot</title>
            </Helmet>
            <h2 className=" text-2xl text-center lg:text-5xl font-extrabold">Tourists Spots</h2>
            <div className=" grid grid-cols-2 justify-center items-center">
                {
                    allspots.map(spots => <Spots key={spots._id} spots={spots}></Spots>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;