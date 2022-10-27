
// Import Swiper React components
import { Swiper, SwiperProps } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ReactNode } from "react";

interface SliderProps{
    settings: SwiperProps;
    children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps){
    return (
        <Swiper {...settings}>{children}</Swiper>
    );
}