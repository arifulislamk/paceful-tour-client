import { Helmet } from "react-helmet-async";
import Carsoul from "../Carsoul/Carsoul";
import TouristsSpots from "../Tourists Spots/TouristsSpots";

const Home = () => {

    return (
        <div>
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Home</title>
            </Helmet>
            <Carsoul></Carsoul>
            <TouristsSpots></TouristsSpots>
            <h2>This HOme Section </h2>
        </div>
    );
};

export default Home;