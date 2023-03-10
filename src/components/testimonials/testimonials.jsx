import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/avatar1.jpg";
import Avt2 from "../../assets/avatar2.jpg";
import Avt3 from "../../assets/avatar3.jpg";
import Avt4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: Avt1,
    name: "Tina Snow",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quam itaque delectus magnam aliquid alias rem nostrum. Laborum, ipsam modi!",
  },
  {
    avatar: Avt2,
    name: "Shatta Wale",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quam itaque delectus magnam aliquid alias rem nostrum. Laborum, ipsam modi!",
  },
  {
    avatar: Avt3,
    name: "Kwame Despite",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quam itaque delectus magnam aliquid alias rem nostrum. Laborum, ipsam modi!",
  },
  {
    avatar: Avt4,
    name: "Nana Ama McBrown",
    review:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non quam itaque delectus magnam aliquid alias rem nostrum. Laborum, ipsam modi!",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__conatiner"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
       
      >
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avtar">
                <img src={avatar}  />
              </div>
              <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default testimonials;
