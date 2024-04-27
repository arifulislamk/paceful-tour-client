import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../AuthProviders/AuthProviders";

const AddTouristsSpot = () => {
    const {users} =  useContext(AuthContext)

    const handleAddSpots = event => {

        event.preventDefault();
        const form = event.target;
        const spotsname = form.spotsname.value;
        const image = form.image.value;
        const country = form.country.value;
        const location = form.location.value;
        const discription = form.discription.value;
        const avaragecost = form.avaragecost.value;
        const seasonality = form.seasonality.value;
        const traveltime = form.traveltime.value;
        const totalvisitorsperyear = form.totalvisitorsperyear.value;
        console.log(spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear)

        const spots = { spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear }

        fetch('http://localhost:5000/spot', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(spots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Spot Added Succesful')
                }
            })
    }
    return (
        <div>
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | AddTouristsSpot</title>
            </Helmet>

            <form onSubmit={handleAddSpots} className=" card-body space-y-4 mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <h2 className=" text-2xl lg:text-5xl text-center font-extrabold">Add Your Spot</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Tourists Spots Name :</span>
                    </label>
                    <input type="text" name="spotsname" placeholder="Spots Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Country Name</span>
                    </label>
                    <input type="text" name="country" placeholder="country name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Location :</span>
                    </label>
                    <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="flex justify-around gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Average Cost :</span>
                        </label>
                        <input type="text" name="avaragecost" placeholder="average_cost" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Seasonality :</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="seasonality - like summer, winter" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl ">Travel Time :</span>
                        </label>
                        <input type="text" name="traveltime" placeholder="travel_time => like- 7 days" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl ">Per Year Total Visitors :</span>
                        </label>
                        <input type="text" name="totalvisitorsperyear" placeholder="totaVisitorsPerYear => like- 10000" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Short Description :</span>
                    </label>
                    <textarea className="p-5 border border-gray-400 rounded-lg" type="text" placeholder="short description" name="discription" id="" cols="30" rows="10"></textarea>
                </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email :</span>
                    </label>
                    <input type="text" defaultValue={users.email} name="useremail" placeholder="User Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name :</span>
                    </label>
                    <input type="text" defaultValue={users.displayName} name="username" placeholder="User Name" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Spots</button>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddTouristsSpot;