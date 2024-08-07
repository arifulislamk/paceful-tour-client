import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { loginUser, googleSignin, githubLogin } = useContext(AuthContext);

    const [showpassword, setshowpassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    title: 'Login Success',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                toast.error('Please Type Corrrct Information')
            })
    }

    const handleGoogleLogin = () => {
        googleSignin()
            .then(res => {
                console.log(res.user)
                Swal.fire({
                    title: 'Login With Google',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                toast.error('Ooops! issues. Please try again')
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                Swal.fire({
                    title: 'Login With Github',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                navigate(location?.state ? location.state : '/')
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="mt-20 font-algeria">
            {/* <ToastContainer /> */}
            <Helmet className="text-sm">
                <title className="">Peaceful Tour | Login</title>
            </Helmet>
            <h2 className="mb-4 text-center font-bold text-5xl">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-2xl font-medium">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input placeholder="Your Password" className=" w-full py-2 px-4  input input-bordered rounded-lg"
                            type={showpassword ? 'text' : 'password'} name="password" id="" required />
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control lg:mt-6">
                    <button className="btn btn-warning text-2xl font-medium">Login</button>
                </div>
                <div>
                    <p className="text-xl">Are You New? Please <Link className="text-blue-500 font-medium" to="/register">Register</Link></p>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="flex lg:mt-4 w-4/5">
                        <div className="w-1/2"><button onClick={handleGoogleLogin} className=" w-2/5"><img src="https://i.ibb.co/yVgVyZk/rsz-1rsz-1google.png" alt="google image" /></button></div>
                        <div className="w-1/2"><button onClick={handleGithubLogin} className=" w-2/5"><img src="https://i.ibb.co/ZWSjN1Q/rsz-github.jpg" alt="githubimage" /></button></div>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;