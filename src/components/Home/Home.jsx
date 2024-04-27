import { Helmet } from "react-helmet-async";
import Carsoul from "../Carsoul/Carsoul";
import TouristsSpots from "../Tourists Spots/TouristsSpots";
import CountriesSection from "../CountriesSection/CountriesSection";

const Home = () => {

    return (
        <div className="mx-4 lg:mx-12">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Home</title>
            </Helmet>
            <Carsoul></Carsoul>
            <TouristsSpots></TouristsSpots>
            <CountriesSection></CountriesSection>
        </div>
    );
};

export default Home;