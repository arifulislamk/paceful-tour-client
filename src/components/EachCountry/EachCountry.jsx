import { useLoaderData } from "react-router-dom";
import Spots from "../Spots/Spots";

const EachCountry = () => {
    const loadedData = useLoaderData()
    console.log('data', loadedData) 

    const countryone = []
    loadedData.map( country => countryone.push(country.country) ) 
    const filterCountry = countryone.find( country => country !== 'America') 
    console.log(filterCountry)

    return (
        <div className="bg-base-200 lg:p-10 ">
            <h2 className="lg:mb-10 text-3xl font-medium text-center">{filterCountry} Tourists Spots</h2>
            <div className=" grid lg:grid-cols-3 gap-4">
                {
                    loadedData.map(country => <Spots key={country._id} spots={country}></Spots>)
                }
            </div>
        </div>
    );
};

export default EachCountry;