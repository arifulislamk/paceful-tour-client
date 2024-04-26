import { Helmet } from "react-helmet-async";
import Carsoul from "../Carsoul/Carsoul";

const Home = () => {

    return (
        <div>
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Home</title>
            </Helmet>
            <Carsoul></Carsoul>
            <h2>This HOme Section </h2>
        </div>
    );
};

export default Home;