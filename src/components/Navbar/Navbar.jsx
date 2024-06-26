import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProviders/AuthProviders";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { users, logOut } = useContext(AuthContext);
    const [showdropdown, setShowdropdown] = useState(false)
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="allTouristsSpot">All Tourists Spot</NavLink></li>
        {
            users ? <>
                <li><NavLink to="addTouristsSpot">Add Tourists Spot</NavLink></li>
                <li><NavLink to="myList">My List</NavLink></li>
            </> : <>
                <li><NavLink to="login">Login</NavLink></li>
                <li><NavLink to="register">Register</NavLink></li>
            </>
        }
        <li><NavLink to="contactUs">Contact Us</NavLink></li>


    </>

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="top-0 z-50 w-full fixed">
            <div className="navbar  shadow-lg font-algeria bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu font-roboto menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/"><a data-tooltip-id="my-tooltip"
                        data-tooltip-content="Website Name"
                        data-tooltip-place="top" className=" lg:block btn btn-ghost font-roboto font-extrabold text-sm  lg:text-2xl">Peaceful Tour</a></Link>
                </div>
                <div className="navbar-center lg:flex">
                    {/* <Link to="/"><a data-tooltip-id="my-tooltip"
                    data-tooltip-content="Website Name"
                    data-tooltip-place="top" className=" flex justify-center  lg:hidden btn btn-ghost font-roboto font-extrabold text-2xl">Peaceful Tour</a></Link> */}
                    <ul className="menu  hidden lg:flex font-roboto menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end ">
                    <div className="flex  ">
                        {
                            users && <div
                                onMouseEnter={() => setShowdropdown(true)}
                                onMouseLeave={() => setShowdropdown(false)}
                                className="mr-2  z-10">
                                <div>
                                    {
                                        users?.photoURL ? <img className="w-[50px] rounded-3xl " src={users.photoURL} alt="" /> : "PhotoNot Availavail this User"
                                    }

                                </div>

                                {
                                    showdropdown && (
                                        <div className="flex flex-col absolute left-[20%] md:left-[70%] lg:left-[80%]  lg:right-2  bg-gray-300 w-52 shadow-md p-5 rounded-md">
                                            <p className=" border-b-2 border-black mb-4 text-center font-bold">Name : {users.displayName ? users.displayName : "Name Not Found"}</p>
                                            <button className="  hover:underline">Profile</button>
                                            <button onClick={handleLogOut} className="hover:underline">LogOut</button>
                                        </div>
                                    )
                                }
                            </div>
                        }
                        {
                            users && <><button onClick={handleLogOut} className="lg:btn bg-neutral rounded-xl px-2 text-warning text-sm lg:text-xl  lg:btn-ghost">LogOut</button></>
                        }
                    </div>

                    <label data-tooltip-id="my-tooltip"
                        data-tooltip-content="Hello, I am theme Changer"
                        data-tooltip-place="top" className="lg:ml-8 swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        <Tooltip id="my-tooltip" />
                    </label>

                </div>


            </div>
        </div>
    );
};

export default Navbar;