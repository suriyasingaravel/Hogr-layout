import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Heading() {
  return (
    <div style={{ backgroundColor: "black", borderRadius: "30px" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img
            style={{
              height: "300px",
              objectFit: "cover",
              width: "100%",
              borderRadius: "30px 30px 0 0",
            }}
            src="https://hogr-website-cms-media.s3.ap-south-1.amazonaws.com/restaurant/banners/ChIJ4TdqFaUWrjsRf2ybjuCAgbk_65409bf917b998.18159472.jpg"
            alt="item-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{
              height: "300px",
              objectFit: "cover",
              width: "100%",
              borderRadius: "30px 30px 0 0",
            }}
            src="https://hogr-website-cms-media.s3.ap-south-1.amazonaws.com/restaurant/banners/ChIJuY6R4RNrrjsRQZwVctaupgA_650aa9365a3ad4.57404761.jpg"
            alt="item-img"
          />
        </SwiperSlide>
       
        <SwiperSlide>
          <img
            style={{
              height: "300px",
              objectFit: "cover",
              width: "100%",
              borderRadius: "30px 30px 0 0",
            }}
            src="https://hogr-website-cms-media.s3.ap-south-1.amazonaws.com/restaurant/banners/ChIJ85IJkKcWrjsRDcVh5mERk6s_654cb0b29f62c2.01586406.jpg"
            alt="item-img"
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
