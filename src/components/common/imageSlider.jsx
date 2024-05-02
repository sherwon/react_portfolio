import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles/slider.css";
import certificates from "../../data/certification";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function imageSlider() {
	return (
		<React.Fragment>
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{certificates.map((item, index) => (
					<SwiperSlide key={index}>
						<img src={item.path} alt={item.info} />
						<br />
						<a
							className="imageLink"
							href={item.link}
							title={item.info}
						>
							{item.info}
						</a>
					</SwiperSlide>
				))}
			</Swiper>
		</React.Fragment>
	);
}
