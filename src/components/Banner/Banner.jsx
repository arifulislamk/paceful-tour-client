import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Cox's Bazar Sea Beach is the world's longest unbound beach and one of the most beautiful beaches on SouthAsia"],
        loop: 0
    })
    const [text1] = useTypewriter({
        words: ["of the most beautiful beaches on SouthAsia"],
        loop: 0
    })
    return (
        <div>
            {/* <!-- slider or curosal  --> */}
            <div className="font-algeria carousel w-full lg:h-[550px] ">
                {/* <!-- slider 1 --> */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">

                            <h2 className="text-2xl text-secondary lg:text-4xl font-bold">{text}</h2>
                            <p className=" text-4xl font-medium text-error ">Cox`s Bazar
                             , 
                                 Bangladesh</p>
                            <Link to="/spotDetails/662d0e07c8172d24f14b619b"><button className="btn lg:mt-10 btn-warning text-white">View Details</button></Link>
                            
                        </div>
                        <div className="flex-1"><img src="https://i.ibb.co/9by6jXw/Untitled-Export-ivp5d-ON5c.jpg" className="w-full rounded-2xl" /></div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <!-- slider 2  --> */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">
                            <h2 className="text-2xl lg:text-6xl font-bold">{text1}</h2>
                            <p>Amet minim mollit non deserunt ullamco
                                est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <button className="btn btn-warning text-white">Purchase</button>
                        </div>
                        <div className="flex-1"><img src="https://i.ibb.co/HVVN9zn/THAILAND-2.png" className="w-full" /></div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <!-- slider 3 --> */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">
                            <h2 className="text-2xl lg:text-6xl font-bold">Ride-on R15 V4
                                <br /> with Smile
                            </h2>
                            <p>Amet minim mollit non deserunt ullamco
                                est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <button className="btn btn-warning text-white">Purchase</button>
                        </div>
                        <div className="flex-1"><img src="https://i.ibb.co/z5HtCG7/THAILAND-6.png" /></div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <!-- slider 4 --> */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap-20">
                        <div className="space-y-7 flex-1">
                            <h2 className="text-2xl lg:text-6xl font-bold">Ride-on R15 V4
                                <br /> with Smile
                            </h2>
                            <p>Amet minim mollit non deserunt ullamco
                                est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <button className="btn btn-warning text-white">Purchase</button>
                        </div>
                        <div className="flex-1"><img src="https://i.ibb.co/3NFL8rB/THAILAND-4.png" className="w-full" /></div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;