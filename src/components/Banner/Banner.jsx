import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const Banner = () => {
    const [text] = useTypewriter({
        words: ["Cox's Bazar Sea Beach is the world's longest unbound beach and one of the most beautiful beaches on SouthAsia"],
        loop: 0
    })
    const [text1] = useTypewriter({
        words: ["Bangkok is a large city known for ornate shrines and vibrant street life . This City Capital of Thailand"],
        loop: 0
    })
    const [text2] = useTypewriter({
        words: ["Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok of Bali "],
        loop: 0
    })
    const [text3] = useTypewriter({
        words: ["Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers"],
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

                                <h2 className=" text-xl text-secondary lg:text-4xl font-bold">{text}</h2>
                                <p className=" text-2xl lg:text-4xl font-medium text-error ">Cox`s Bazar
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
                        <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap-5 lg:gap-20">
                            <div className="space-y-7 flex-1">
                                <h2 className="text-xl text-secondary lg:text-4xl font-bold">{text1}</h2>
                                <p className=" text-2xl lg:text-4xl font-medium text-error ">Bangkok
                                    ,
                                    Thailand</p>
                                <Link to="/spotDetails/663089bd401b9d9fc60534eb"><button className="btn lg:mt-10 btn-warning text-white">View Details</button></Link>
                            </div>
                            <div className="flex-1"><img src="https://i.ibb.co/4S4Sft2/THAILAND-8.png" className="w-full rounded-2xl" /></div>
                        </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <!-- slider 3 --> */}
                <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap5 lg:gap-20">
                            <div className="space-y-7 flex-1">
                                <h2 className="text-xl text-secondary lg:text-4xl font-bold">{text2}</h2>
                                <p className=" text-2xl lg:text-4xl font-medium text-error ">Bali
                                    ,
                                    Indenesia</p>
                                <Link to="/spotDetails/66308a4a401b9d9fc60534ec"><button className="btn lg:mt-10 btn-warning text-white">View Details</button></Link>
                            </div>
                            <div className="flex-1"><img src="https://i.ibb.co/r5JcrM7/THAILAND-9.png" className="w-full rounded-2xl" /></div>
                        </div>
   
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <!-- slider 4 --> */}
                <div id="slide4" className="carousel-item relative w-full">

                        <div className="flex flex-col lg:flex-row p-4 lg:p-24 gap-5 lg:gap-20">
                            <div className="space-y-7 flex-1">
                                <h2 className="text-xl text-secondary lg:text-4xl font-bold">{text3}</h2>
                                <p className="text-2xl lg:text-4xl font-medium text-error ">Kuala Lumpur
                                    ,
                                    Malaysia</p>
                                <Link to="spotDetails/66308adf401b9d9fc60534ed"><button className="btn lg:mt-10 btn-warning text-white">View Details</button></Link>
                            </div>
                            <div className="flex-1"><img src="https://i.ibb.co/Tmm9zQb/THAILAND-10.png" className="w-full" /></div>
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