import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showpassword, setshowpassword] = useState(false);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo)


        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const user = { email, photo, name }
                fetch('http://localhost:5000/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.insertedId){
                            console.log("database added")
                        }
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="mt-4">
            {/* <ToastContainer /> */}
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Register</title>
            </Helmet>
            <h2 className="mb-4 text-center font-medium text-5xl">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input placeholder="New Password" className=" w-full py-2 px-4  input input-bordered rounded-lg"
                            type={showpassword ? 'text' : 'password'} name="password" id="" required />
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <div>
                    <p>Already have an account? Please <Link className="text-blue-500" to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;