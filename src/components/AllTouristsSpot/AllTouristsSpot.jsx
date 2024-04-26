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
            <h2>All Tourists Spots {allspots.length}</h2>
            <div className=" grid grid-cols-2 justify-center items-center">
                {
                    allspots.map(spots => <Spots key={spots.id} spots={spots}></Spots>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;