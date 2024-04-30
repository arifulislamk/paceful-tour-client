import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const SpotDetails = () => {

    const allSpots = useLoaderData();
    const { id } = useParams()

    // const intId = parseInt(id)
    console.log(allSpots, id);

    const spots = allSpots.find(spot => spot._id == id);
    const { username, useremail, spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear } = spots;

    return (
        <div className="font-algeria space-y-6 mx-4 mt-20 lg:mx-12 ">
            <Fade cascade duration={1000}>
                <Helmet className="text-sm">
                    <title className="">Peaceful Tour | {spotsname}</title>
                </Helmet>
                <div>
                    <img className="w-full lg:h-[500px] rounded-lg" src={image} alt="" />
                </div>
                <div className="flex text-xl justify-between lg:px-10">
                    <p> <span className="text-2xl font-medium mr-5">Country : </span> {country}</p>
                    <p> <span className="text-2xl font-medium mr-5">Location :</span> {location}</p>
                </div>

                <div>
                    <h2 className="lg:mb-6 lg:mt-14 text-3xl font-roboto lg:text-5xl font-bold">{spotsname} </h2>
                    <p > Discription : {discription}</p>
                </div>

                <div className=" text-3xl space-y-3">
                    <p> <span className="text-3xl font-medium mr-6">Avarage Cost : </span> {avaragecost}</p>
                    <p> <span className="text-3xl font-medium  mr-6">Season : </span> {seasonality}</p>
                    <p> <span className="text-3xl font-medium mr-6">Travel Time : </span> {traveltime}</p>
                    <p> <span className="text-3xl font-medium mr-6"> Total Visit per/years : </span> {totalvisitorsperyear}</p>
                </div>
                <div>
                    <h1><span className=" text-2xl font-medium mr-6">Added By :</span> {username ? username : "Name Not Found"}</h1>
                    <p> <span className="text-xl mr-6">Email : </span> {useremail ? useremail : "email not found"}</p>
                </div>
            </Fade>
        </div>
    );
};

export default SpotDetails;