import React from "react";
import Slider from "react-slick";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardContact from "./CardContact";0

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <img
      src="/images/right.png"
      alt=""
      className="absolute top-1/2 right-4 z-10 w-[12px] cursor-pointer"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <img
      src="/images/left.png"
      alt=""
      className="absolute top-1/2 left-4 z-10 w-[12px] cursor-pointer"
      onClick={onClick}
    />
  );
}
// const AllCards = data.map((elem, index) => {
//   const {images} = elem
//   // console.log(images)
//   return (
//     <div
//       className="rounded-xl overflow-hidden h-[400px] relative"
//     >
//       <CardHeader />
//       {images.map((elem, index) => {
//         console.log(elem)
//         return (
//           <img
//             src={elem}
//             alt=""
//             className="h-full object-cover"
//           />
//         );
//       })}
//       <CardFooter />
//     </div>
//   );
// });

const Card = ({ details }) => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <div
            onClick={() => `${i + 1}`}
            className="h-[3px] w-[1.5rem] bg-white absolute bottom-32"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="relative flex flex-col justify-between h-[450px] text-white px-2">
      <div className="relative card-slider h-full">
        <Slider {...settings} className="h-full w-full relative rounded-xl">

          {details.images.map((elem , index) => {
            return (
              <div className="rounded-xl overflow-hidden h-[400px] relative" key= {index}>
                <CardHeader countDown = {details.countDown}/>
                <img src={elem} alt="" className="h-full object-cover" />;
                <CardFooter address = {details.address} price = {details.price} company = {details.company}/>
              </div>
            );
          })}
          {/* {AllCards} */}
        </Slider>
      </div>
      <CardContact />
    </div>
  );
};

export default Card;
