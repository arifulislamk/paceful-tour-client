import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <p><span className=" text-xl font-bold">Peaceful Tour Company</span> <br /> <br />Providing reliable place since 1973</p>
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

                    
                    <div className=" mt-5 flex gap-5">
                        <a href="http://facebook.com"><FaFacebook className="w-10 h-10" /></a>
                        <a href="http://instagram.com"><FaInstagram className="w-10 h-10" /></a>
                        <a href="http://google.com"><FaGoogle className="w-10 h-10" /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;