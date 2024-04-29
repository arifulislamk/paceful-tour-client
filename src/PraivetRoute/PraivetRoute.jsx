import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../AuthProviders/AuthProviders";
import PropTypes from "prop-types";

const PraivetRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname,"hidden from")

    console.log(users)

    if (loading) {
        return <div className=" mt-6 flex justify-center"><span className="loading text-yellow-400 loading-spinner loading-lg"></span></div>
    }
    else if (users) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PraivetRoute;

PraivetRoute.propTypes = {
    children: PropTypes.any
}