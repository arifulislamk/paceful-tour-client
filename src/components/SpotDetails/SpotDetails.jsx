import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {

    const allSpots = useLoaderData();
    const { id } = useParams()

    // const intId = parseInt(id)
    console.log(allSpots, id);

    const spots = allSpots.find(spot => spot._id == id);

    const { username, useremail, spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear } = spots;

    return (
        <div className=" space-y-6 mx-4 lg:mx-12 ">
            <div>
                <img className="w-full lg:h-96 rounded-lg" src={image} alt="" />
            </div>
            <div className=" flex justify-between lg:px-10">
                <p> <span className="text-xl">Country :</span> {country}</p>
                <p> <span className="text-xl">Location :</span> {location}</p>
            </div>

            <div >
                <h2 className=" text-3xl font-bold">Spot Details : {spotsname} </h2>
                <p className=""> Discription : {discription}</p>
            </div>

            <div className=" space-y-3">
                <p> <span className="text-xl">Avarage Cost : </span> {avaragecost}</p>
                <p> <span className="text-xl">Season : </span> {seasonality}</p>
                <p> <span className="text-xl">Travel Time : </span> {traveltime}</p>
                <p> <span className="text-xl"> Total Visit per/years : </span> {totalvisitorsperyear}</p>
            </div>
            <div>
                <p><span className=" text-2xl ">Added By :</span> {username ? username : "Name Not Found"}</p>
                <p> <span className="text-xl">Email : </span> {useremail ? useremail : "email not found"}</p>
            </div>
        </div>
    );
};

export default SpotDetails;