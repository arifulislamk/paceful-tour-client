import { Helmet } from "react-helmet-async";
import Carsoul from "../Carsoul/Carsoul";
import TouristsSpots from "../Tourists Spots/TouristsSpots";
import CountriesSection from "../CountriesSection/CountriesSection";
import Destination from "../Destination/Destination";
import VisitorsReview from "../VisitorsReview/VisitorsReview";

const Home = () => {

    return (
        <div className="mx-4 lg:mx-12">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Home</title>
            </Helmet>
            <Carsoul></Carsoul>
            <TouristsSpots ></TouristsSpots>
            <CountriesSection></CountriesSection>
            <Destination></Destination>
            <VisitorsReview></VisitorsReview>
        </div>
    );
};

export default Home;