import { Link } from "react-router-dom";

const Spots = ({ spots }) => {
    const { spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear } = spots;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{spotsname}</h2>
                <p>{country}</p>
                <p>{location}</p>
                <div className="card-actions">
                    <Link to={`spotDetails/${spots._id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Spots;