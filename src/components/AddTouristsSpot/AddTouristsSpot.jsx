import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AddTouristsSpot = () => {

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

        const spots = {spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear}

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
            if(data.insertedId){
                alert('Spot Added Succesful')
            }
        })
    }
    return (
        <div>
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | AddTouristsSpot</title>
            </Helmet>
            <h2>Add Tourists Spot</h2>

            <form onSubmit={handleAddSpots} className="card-body space-y-4 mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl font-bold">Tourists Spots Name :</span>
                    </label>
                    <input type="text" name="spotsname" placeholder="Spots Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input type="text" name="image" placeholder="image url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Country Name</span>
                    </label>
                    <input type="text" name="country" placeholder="country name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Location :</span>
                    </label>
                    <input type="text" name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Short Description :</span>
                    </label>
                    <input type="text" name="discription" placeholder="short description" className="input input-bordered" required />
                </div>
                <div className="flex justify-center gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost :</span>
                        </label>
                        <input type="text" name="avaragecost" placeholder="average_cost" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality :</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="seasonality - like summer, winter" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Travel Time :</span>
                        </label>
                        <input type="text" name="traveltime" placeholder="travel_time => like- 7 days" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Per Year Total Visitors :</span>
                        </label>
                        <input type="text" name="totalvisitorsperyear" placeholder="totaVisitorsPerYear => like- 10000" className="input input-bordered" required />
                    </div>
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email :</span>
                    </label>
                    <input type="text" name="useremail" placeholder="User Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">User Name :</span>
                    </label>
                    <input type="text" name="username" placeholder="User Name" className="input input-bordered" required />
                </div> */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Spots</button>
                </div>
                <div>
                    <p>Already Added Spots? Please <Link className="text-blue-500" to="/allTouristsSpot">All Spots Page</Link></p>
                </div>
            </form>
        </div>
    );
};

export default AddTouristsSpot;