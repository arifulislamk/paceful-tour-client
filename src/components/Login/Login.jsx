import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";

const Login = () => {
    const { loginUser, googleSignin, githubLogin } = useContext(AuthContext);

    const [showpassword, setshowpassword] = useState(false);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleLogin = () => {
        googleSignin()
            .then(res => {
                console.log(res.user)
                alert('login with google succesful')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(res => {
                alert("github Succesful add")
                console.log(res.user)
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
            <h2 className="mb-4 text-center font-bold text-5xl">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body mb-6 border rounded-lg border-gray-400 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
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
                    <button className="btn btn-primary">Login</button>
                </div>
                <div>
                    <p>Are You New? Please <Link className="text-blue-500" to="/register">Register</Link></p>
                </div>
                <div className=" flex justify-center items-center">
                    <div className="flex lg:mt-4 w-4/5">
                        <div className="w-1/2"><button onClick={handleGoogleLogin} className=" w-2/5"><img src="https://i.ibb.co/vJN54YQ/Google-2015-logo-svg.png" alt="" /></button></div>
                        <div className="w-1/2"><button onClick={handleGithubLogin} className=" w-2/5"><img src="https://i.ibb.co/nrsgX6d/images.png" alt="" /></button></div>
                    </div>
                </div>
            </form>


        </div>
    );
};

export default Login;