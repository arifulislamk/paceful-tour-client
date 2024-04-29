import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const MyList = () => {
    const { users } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);
    const [loading, setlLoading] = useState(true)

    useEffect(() => {
        fetch(`https://peaceful-tour-server.vercel.app/myList/${users?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyList(data)
                setlLoading(false)
            })
    }, [])
    // console.log(users)

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://peaceful-tour-server.vercel.app/spot/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remening = myList.filter(spot => spot._id !== id);
                            setMyList(remening)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }


                    })
            }
        });
    }

    return (
        <div className=" mt-5 font-algeria space-y-4 mx-4 lg:mx-12 min-h-screen">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | MyList</title>
            </Helmet>
            <h2 className="text-2xl mb-5 lg:mb-10 lg:text-5xl font-extrabold text-center">My Added Spots </h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className=" font-medium text-2xl">
                            <tr>
                                <th>No.</th>
                                <th>Spots Name</th>
                                <th>Location</th>
                                <th>Country</th>
                                <th>Average Cost</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        {loading && <div className=" mt-6 flex justify-center"><span className="loading text-yellow-400 loading-spinner loading-lg"></span></div>}
                        <tbody className=" text-xl">
                            {/* row 1 */}
                            {
                                myList.map((spot,inx) => <tr key={spot._id}>
                                    <th>{inx+1}</th>
                                    <td>{spot.spotsname}</td>
                                    <td>{spot.location}</td>
                                    <td>{spot.country}</td>
                                    <td>{spot.avaragecost}</td>
                                    <td><Link to={`/updatePages/${spot._id}`}><button className="btn">Update</button></Link></td>
                                    <td><button onClick={() => handleDelete(spot._id)} className="btn">X</button></td>
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