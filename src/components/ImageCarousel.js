import React from 'react';
import Slider from 'react-slick';
import { FcNext, FcPrevious } from "react-icons/fc";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carousel.css"

function ImageCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        nextArrow: <FcNext />,
        prevArrow: <FcPrevious />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ],

    };

    return (
        <div className="carousel__box">
            <Slider  {...settings}>
                <div className="carousel__item__box">
                    <img className="carousel__item" src="https://images.unsplash.com/photo-1651717214500-68ea4d308b9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Kitten 1" />
                </div>
                <div className="carousel__item__box">
                    <img className="carousel__item" src="https://images.unsplash.com/photo-1680448588521-35f5d04a4193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Kitten 2" />

                </div>
                <div className="carousel__item__box">
                    <img className="carousel__item" src="https://images.unsplash.com/photo-1680466350960-f06d9950e69f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="Kitten 3" />
                </div>
            </Slider>
        </div>
    );
}

export default ImageCarousel;
