import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Img1 from "../../assets/Img1.jpg";
import Img2 from "../../assets/Img2.jpg";
import Img3 from "../../assets/Img3.jpg";
import Img4 from "../../assets/Img4.jpg";
import Img5 from "../../assets/Img5.jpg";
import Img6 from "../../assets/Img6.jpg";
import Img7 from "../../assets/slide1.jpg";
import Img8 from "../../assets/slide2.jpg";

const HeroSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper h-[500px]"
      >
        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img5}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img7}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img8}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img2}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img3}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img4}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img1}></img>
        </SwiperSlide>

        <SwiperSlide>
          <img className="w-full object-cover h-[500px]" src={Img6}></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
