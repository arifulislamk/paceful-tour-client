import { useLoaderData } from "react-router-dom";
import Spots from "../Spots/Spots";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const AllTouristsSpot = () => {
    const loadedAllSpots = useLoaderData();
    const [allspots, setAllspots] = useState(loadedAllSpots);

    const [filter, setFilter] = useState('')
    // console.log(allspots)
    // console.log(filter)


    useEffect(() => {
        if (filter === 'avarageCostinglow') {
            const sort = [...allspots].sort((a, b) => a.avaragecost - b.avaragecost);
            setAllspots(sort)
            // console.log(sort)
        }
        if (filter === 'avarageCostinghigh') {
            const sort = [...allspots].sort((a, b) => b.avaragecost - a.avaragecost);
            setAllspots(sort)
        }
    }, [allspots, filter])

    const handleSorting = e => {
        e.preventDefault()
        setFilter(e.target.value)
    }
    return (
        <div className="mt-10 space-y-4 mx-4 lg:mx-12">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | AllTouristsSpot</title>
            </Helmet>
            <h2 className=" text-2xl text-center lg:text-5xl font-roboto font-bold">SouthAsia All Tourists Spots</h2>
            <div className=" flex justify-center">
                <select onChange={handleSorting} name="country" className="border border-gray-300 p-3 rounded-lg" id="">
                    <option defaultValue="" selected disabled className="selected" value="Please Select Country">Avarage Cost Sorting</option>
                    <option value="avarageCostinglow">Low to High</option>
                    <option value="avarageCostinghigh">High to Low</option>
                </select>
            </div>

            <div className=" grid lg:grid-cols-3 justify-center gap-4 items-center">
                {
                    allspots.map(spots => <Spots key={spots._id} spots={spots}></Spots>)
                }
            </div>
        </div>
    );
};

export default AllTouristsSpot;