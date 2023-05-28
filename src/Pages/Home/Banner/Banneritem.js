import React from 'react';
import './Banneritem.css';


const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full h-full" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 lg:top-[40%]">
                    <h1 className='text-6xl font-bold text-white'>
                       Welcome to Book Your Train
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                    <p className='text-xl text-white'>We saves your time both while purchasing, the check-in and during the travel.</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                    <button className="btn btn-warning mr-5">Visit</button>
                    <button className="btn btn-outline btn-warning">Explore</button>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};


export default BannerItem;