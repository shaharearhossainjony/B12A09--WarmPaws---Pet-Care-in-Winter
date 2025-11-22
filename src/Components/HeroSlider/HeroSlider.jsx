
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Img1 from '../../assets/Img1.jpg'
import Img2 from '../../assets/Img2.jpg'
import Img3 from '../../assets/Img3.jpg'
import Img4 from '../../assets/Img4.jpg'
import Img5 from '../../assets/Img5.jpg'
import Img6 from '../../assets/Img6.jpg'

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full h-[500px]">
        <SwiperSlide><img src={Img1}></img></SwiperSlide>
        <SwiperSlide><img src={Img2}></img></SwiperSlide>
        <SwiperSlide><img src={Img3}></img></SwiperSlide>
        <SwiperSlide><img src={Img4}></img></SwiperSlide>
        <SwiperSlide><img src={Img5}></img></SwiperSlide>
        <SwiperSlide><img src={Img6}></img></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
