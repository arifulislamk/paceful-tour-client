import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const MyList = () => {
    const { users } = useContext(AuthContext);
    const [myList, setMyList] = useState([])

    useEffect(() => {
        fetch(`https://peaceful-tour-server.vercel.app/myList/${users.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyList(data)
            })
    }, [])
    // console.log(users)

    const handleDelete = _id => {
        console.log(_id) 
    }
    return (
        <div className=" space-y-4 mx-4 lg:mx-12 min-h-screen">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | MyList</title>
            </Helmet>
            <h2 className="text-xl lg:text-3xl font-medium text-center">My Added All Spots </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="">
                            <tr>
                                <th></th>
                                <th>Spots Name</th>
                                <th>Location</th>
                                <th>Travel Time</th>
                                <th>Average Cost</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                myList.map(spot => <tr key={spot._id}>
                                    <th></th>
                                    <td>{spot.spotsname}</td>
                                    <td>{spot.location}</td>
                                    <td>{spot.traveltime}</td>
                                    <td>{spot.avaragecost}</td>
                                    <td>Update</td>
                                    <button onClick={() => handleDelete(spot._id)} className="btn">
                                        <td>X</td>
                                    </button>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;