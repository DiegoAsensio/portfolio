import React from "react";
import "./testimonials.css";
import PER1 from "../../assets/Victoria.png";
import PER2 from "../../assets/Paula.png";
import PER3 from "../../assets/laura.jpg";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
	const data = [
		{
			id: 0,
			avatar: PER1,
			name: "Victoria Pedrazza - DevOps Engineer en EY",
			review:
				"Tuve la suerte de trabajar con Diego por un tiempo, gran compañero de trabajo y de aprendizaje, demostró un excelente desempeño como profesional y como persona!",
		},
		{
			id: 1,
			avatar: PER2,
			name: "Paula Gimenez Heit - Customer Service en VN Global",
			review:
				"Diego trabaja muy bien en equipo, es productivo, aprende rápido y mejora sus habilidades día a día. Excelente puntualidad, responsable y amable. Fue una gran experiencia haber trabajado a su lado.",
		},
		{
			id: 2,
			avatar: PER3,
			name: "Laura Asensi - DevOps Engineer en EY",
			review:
				"I had the pleasure of working with Diego and he has always shown willingness to help and learn. He has worked in quality projects, and he is a very quick learner. A great team member!",
		},
	];

	return (
		<section className='testimonial-section bg-dark' id='testimonials'>
			<h5>Comentarios de personas con las que trabaje</h5>
			<h2>Referencias</h2>
			<div className='square-b'></div>
			<div className='square-c'></div>
			<Swiper
				className='container testimonials__container'
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{clickable: true}}
			>
				{data.map(({avatar, name, review, id}, index) => {
					return (
						<SwiperSlide className='testimonial' key={id}>
							<div className='testimonial__avatar'>
								<img src={avatar} alt={name} />
							</div>
							<h5 className='testimonial__name'>{name}</h5>
							<small className='testimonial__review'>{review}</small>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonials;
