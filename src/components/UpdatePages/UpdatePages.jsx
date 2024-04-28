import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePages = () => {
    const loadedData = useLoaderData();
    const { _id, spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear } = loadedData[0];
    console.log(loadedData[0])

    const handleUpdate = event => {
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

        const updateSpots = { spotsname, image, country, location, discription, avaragecost, seasonality, traveltime, totalvisitorsperyear };

        fetch(`https://peaceful-tour-server.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateSpots)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated Done!",
                        text: "Your Spot Now Updated",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleUpdate} className=" card-body space-y-2 mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <h2 className=" text-2xl lg:text-5xl text-center font-extrabold">Update Your Spot</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Tourists Spots Name :</span>
                    </label>
                    <input type="text" defaultValue={spotsname} name="spotsname" placeholder="Spots Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Image</span>
                    </label>
                    <input type="text" defaultValue={image} name="image" placeholder="image url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Country Name</span>
                    </label>

                    <input type="text" defaultValue={country} name="country" placeholder="country name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Location :</span>
                    </label>
                    <input type="text" defaultValue={location} name="location" placeholder="location" className="input input-bordered" required />
                </div>
                <div className="flex justify-around gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Average Cost :</span>
                        </label>
                        <input type="text" defaultValue={avaragecost} name="avaragecost" placeholder="average_cost" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl ">Seasonality :</span>
                        </label>
                        <input type="text" defaultValue={seasonality} name="seasonality" placeholder="seasonality - like summer, winter" className="input input-bordered" required />
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl ">Travel Time :</span>
                        </label>
                        <input type="text" defaultValue={traveltime} name="traveltime" placeholder="travel_time => like- 7 days" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text text-xl ">Per Year Total Visitors :</span>
                        </label>
                        <input type="text" defaultValue={totalvisitorsperyear} name="totalvisitorsperyear" placeholder="totaVisitorsPerYear => like- 10000" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-medium">Short Description :</span>
                    </label>
                    <textarea defaultValue={discription} className="p-5 border border-gray-400 rounded-lg" type="text" placeholder="short description" name="discription" id="" cols="30" rows="10"></textarea>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Update Now</button>
                </div>
            </form>
        </div>
    );
};

export default UpdatePages;