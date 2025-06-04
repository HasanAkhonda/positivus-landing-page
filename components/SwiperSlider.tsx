'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import testimonials from '@/data/clientData.json';

type Testimonial = {
  comment: string;
  name: string;
  role: string;
};

const SwiperSlider = () => {
  const processedTestimonials = testimonials.map((item: Testimonial, index: number, array: Testimonial[]) => ({
    ...item,
    index: index + 1,
    length: array.length,
  }));

  return (
    <div className="relative w-full px-2 sm:px-4 pt-12 pb-24">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{
          el: '.custom-swiper-pagination',
          clickable: true,
        }}
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        loop
        centeredSlides={true}
        slidesPerView={1}
        spaceBetween={50}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.8 },
          1024: { slidesPerView: 2.5 },
        }}
        className=""
      >
        {processedTestimonials.map((item) => (
          <SwiperSlide
            key={item.index}
            aria-label={`${item.index} / ${item.length}`}
            className="text-gray flex flex-col items-center"
          >
            <div className="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px] min-h-[280px]">
              <p className="bubble text-center">"{item.comment}"</p>
            </div>
            <div className="w-full px-10 sm:px-20 text-center mt-4">
              <div className="text-green font-medium">{item.name}</div>
              <div>{item.role}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation + Pagination Layout */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          className="swiper-button-prev-custom text-white text-2xl hover:scale-110 transition"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <div
          className="custom-swiper-pagination flex gap-2"
          style={{
            ['--swiper-pagination-color' as any]: 'var(--green)',
            ['--swiper-pagination-bullet-inactive-color' as any]: '#fff',
            ['--swiper-pagination-bullet-inactive-opacity' as any]: '1',
            ['--swiper-pagination-bullet-size' as any]: '14px',
            ['--swiper-pagination-bullet-horizontal-gap' as any]: '8px',
          }}
        ></div>
        <button
          className="swiper-button-next-custom text-white text-2xl hover:scale-110 transition"
          aria-label="Next slide"
        >
         &#8594;
        </button>
      </div>

      {/* Bubble styling */}
      <style jsx>{`
        .bubble {
          position: relative;
          padding: 8%;
          background-color: var(--dark);
          color: var(--gray);
          border-radius: 45px;
          border: 1px solid var(--green);
        }

        .bubble:after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50px;
          border-width: 22px;
          border-style: solid;
          border-color: var(--dark) transparent transparent var(--dark);
        }

        .bubble:before {
          content: '';
          position: absolute;
          bottom: -40px;
          left: 48px;
          border-width: 20px;
          border-style: solid;
          border-color: var(--green) transparent transparent var(--green);
        }
      `}</style>
    </div>
  );
};

export default SwiperSlider;
