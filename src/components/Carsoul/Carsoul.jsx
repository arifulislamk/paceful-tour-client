const Carsoul = () => {
    
    return (
        <div className="carousel rounded-md mb-10 lg:mb-20 ">
            <div id="slide1" className="lg:h-[600px] carousel-item relative w-full ">
                <img className="w-full " src="https://i.ibb.co/GxmdFJd/Untitled-Export-5zw-L8-PVJ.jpg" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="lg:h-[600px] carousel-item relative w-full">
                <img src="https://i.ibb.co/HVVN9zn/THAILAND-2.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="lg:h-[600px] carousel-item relative w-full">
                <img className="w-full" src="https://i.ibb.co/z5HtCG7/THAILAND-6.png" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="lg:h-[600px] carousel-item relative w-full">
                <img src="https://i.ibb.co/3NFL8rB/THAILAND-4.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Carsoul;