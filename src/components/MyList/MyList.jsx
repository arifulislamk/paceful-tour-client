import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Spots from "../Spots/Spots";

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
    console.log(users)
    return (
        <div className=" space-y-4 mx-4 lg:mx-12">
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | MyList</title>
            </Helmet>
            <h2>My List : {users.email}</h2>
            <h2>My List : {myList.length}</h2>

            <div className=" grid lg:grid-cols-2 justify-center gap-4 items-center">
                {
                    myList.map(spots => <Spots key={spots._id} spots={spots}></Spots>)
                }
            </div>
        </div>
    );
};

export default MyList;