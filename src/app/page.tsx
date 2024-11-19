// Import Swiper React components
"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import { TECHS } from '@/data/techs';
import TechStackIcon from "@/components/Icon/TechStackIcon/TechStackIcon";

export default function Home() {
  return (
    <main className="pt-40 min-h-screen">
      <Swiper
        className="swiper-transition"
        spaceBetween={10}
        slidesPerView={10}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[Autoplay]}
        loop
      >
        {TECHS.map((tech) => (
          <SwiperSlide key={tech.name}>
            <div className="tech-icon">
              <TechStackIcon name={tech.name} logoUrl={tech.logoUrl} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
