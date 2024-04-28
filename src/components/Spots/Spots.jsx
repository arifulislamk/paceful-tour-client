import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Spots = ({ spots }) => {
    const { spotsname, image, location, avaragecost, seasonality, traveltime, totalvisitorsperyear } = spots;
    return (
        <div className="p-2 bg-base-300 rounded-3xl shadow-xl lg:h-[550px]">
            <figure className="lg:px-10 lg:pt-10  flex justify-center">
                <img src={image} alt="image" className="rounded-xl lg:h-52 " />
            </figure>
            <div className=" ">
                <div className="mt-5 lg:px-10 flex justify-between items-center">
                    <h2 className="card-title ">{spotsname}</h2>
                    <p className="">{location}</p>
                </div>

                <div className="mt-5 lg:pl-10 text-xl ">
                    <h3>Avarage Cost : {avaragecost}</h3>
                    <h3>Seasonality : {seasonality}</h3>
                    <h3>Visitor per/year : {totalvisitorsperyear}</h3>
                    <h3>traveltime : {traveltime}</h3>
                </div>
            </div>
            <div className=" text-end pr-10">
                <Link to={`/spotDetails/${spots._id}`}><button className="btn btn-primary">View Details</button></Link>
            </div>
        </div>
    );
};
export default Spots;


Spots.propTypes = {
    spots: PropTypes.object,
}