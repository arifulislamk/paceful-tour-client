import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [showpassword, setshowpassword] = useState(false);
    const navigate = useNavigate();


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, password, photo)


        if (!name) {
            toast.error('Please Input Name')
            return;
        }
        else if (!email) {
            toast.error('Please Input email')
            return;
        }
        else if (!photo) {
            toast.error('Please Input photo')
            return;
        }
        else if (!password) {
            toast.error('Please Input password')
            return;
        }
        
        else if (password.length < 6) {
            toast.error('password must be at least 6 charecter or more charecter!')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password Shounld be uppercase at least one charecter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Password Shounld be lowwercase at least one charecter')
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user);
                const user = { email, photo, name };

                updateUser(photo, name )
                    .then(res => {
                        console.log(res.user)
                    })

                fetch('https://peaceful-tour-server.vercel.app/user', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            console.log("database added")
                            toast.success("New User Created and Database Added Succesful")
                            Swal.fire({
                                title: 'Registration Success',
                                text: 'Do you want to continue',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            })
                            navigate("/")
                        }
                    })
            })
            .catch(error => {
                console.log(error)
                toast.error('Email Already Use or There Is an Issue')
            })

    }
    return (
        <div className="mt-20 font-algeria">
            {/* <ToastContainer /> */}
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Register</title>
            </Helmet>
            <h2 className="mb-4 text-center font-medium text-5xl">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="PhotoURL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input placeholder="New Password" className=" w-full py-2 px-4  input input-bordered rounded-lg"
                            type={showpassword ? 'text' : 'password'} name="password" id="" />
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-warning text-2xl font-medium">Register</button>
                </div>
                <div>
                    <p className=" text-xl">Already have an account? Please <Link className="text-blue-500 font-medium" to="/login">Login</Link></p>
                </div>
            </form>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;