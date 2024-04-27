import { Helmet } from "react-helmet-async";

const MyList = () => {
    return (
        <div className=" space-y-4 mx-4 lg:mx-12">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | MyList</title>
            </Helmet>
            <h2>My List</h2>
        </div>
    );
};

export default MyList;