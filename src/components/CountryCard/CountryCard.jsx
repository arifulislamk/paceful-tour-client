import { Link } from "react-router-dom";
import PropTypes from "prop-types" ;

const CountryCard = ({ country }) => {
    const { country_name, description, image } = country;
    return (
        <Link to={`/eachCountry/${country_name}`}>
            <div className="p-2 space-y-10 bg-base-300 rounded-3xl shadow-xl lg:h-[700px]">
                <figure className="lg:px-10 lg:pt-10  flex justify-center">
                    <img src={image} alt="image" className="rounded-xl lg:h-96 " />
                </figure>
                <div className=" lg:px-10">
                    <h2 className="card-title  ">{country_name}</h2>
                    <p className="">{description}</p>
                </div>
            </div>
        </Link>
    );
};

export default CountryCard;

CountryCard.propTypes = {
    country : PropTypes.object,
}