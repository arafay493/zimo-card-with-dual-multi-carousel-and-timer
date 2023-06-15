import React, { useRef } from "react";
import Card from "./Card/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { data } from "@/data/data";

const Cards = () => {
  const cardRef = useRef(null);
  // console.log(cardRef.current);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    touchMove: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // const AllCards = data.map((elem , index) => {
  //   console.log(elem)
  //   return <Card key={index} details = {elem[index]}/>
  // })
  return (
    <div className="w-screen px-5 md:px-10">
      <div className="uppercase flex items-center flex-wrap py-10">
        <h2 className="flex-1 sm:flex-[0] text-xl md:text-2xl tracking-[5px]">Featured</h2>
        <h2 className="flex-1 text-xl md:text-2xl text-center tracking-[5px] hidden sm:block">View All Homes</h2>
        <div className="buttons flex items-center gap-2 md:gap-5">
          <div className="text-3xl">
            <button onClick={() => cardRef.current.slickPrev()}>
              <IoIosArrowBack />
            </button>
          </div>
          <div className="text-3xl">
            <button onClick={() => cardRef.current.slickNext()}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
      <Slider ref={cardRef} {...settings} className="w-full overflow-hidden m-auto">
        <Card details = {data[0]}/>
        <Card details = {data[1]}/>
        <Card details = {data[2]}/>
        <Card details = {data[3]}/>
        <Card details = {data[4]}/>
        <Card details = {data[5]}/>
        {/* {AllCards} */}
      </Slider>
    </div>
  );
};

export default Cards;
