import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer font-roboto p-20 bg-base-300 text-base-content">
                <aside >
                    <Link to="/"><p className=""><span className=" text-2xl lg:text-4xl font-bold">Peaceful Tour</span> <br /> <br />Providing reliable place since 1973</p></Link>
                    <div className=" mt-10 mb-5 flex gap-5">
                        <a href="http://facebook.com"><FaFacebook className="w-10 h-10" /></a>
                        <a href="http://instagram.com"><FaInstagram className="w-10 h-10" /></a>
                        <a href="http://google.com"><FaGoogle className="w-10 h-10" /></a>
                    </div>
                    <p className=" texl-2xl font-semibold">Copyright © 2024 - All right reserved By Ariful Islam Khan</p>

                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <Link to="contactUs"><a className="link link-hover">Contact Us</a></Link>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;