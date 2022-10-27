import { ReactNode } from "react";

// Import Swiper React components
import { Swiper, SwiperProps } from 'swiper/react';

import { Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../styles/slider.css'

interface SliderProps{
    settings: SwiperProps;
    children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps){
    return (
        <Swiper modules={[ Pagination, Autoplay]} {...settings}>{children}</Swiper>
    );
}
