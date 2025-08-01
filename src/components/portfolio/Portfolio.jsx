import React from "react";
import "./portfolio.css";

const Portfolio = () => {
	const workData = [
		{
			id: 1,
			title: "Ink Master",
			img: "https://i.ibb.co/V01gtK96/Captura-de-pantalla-2025-07-31-115014.png",
			descrip:
				"Es una página profesional para un tatuador, donde se presenta información del artista, una galería de trabajos y una sección de contacto. El sitio fue desarrollado con HTML5, CSS3 y JavaScript para lograr interactividad y dinamismo. Es completamente responsive, se adapta a todo tipo de dispositivos, cuenta con buenas prácticas de SEO y está optimizada para una carga rápida.",
			demo: "https://diegotatua.netlify.app/",
			class: "p-dark portfolio__item",
			class_item: "portfolio__content dark",
		},
		{
			id: 2,
			title: "My Tech",
			img: "https://i.ibb.co/gMmNwhLx/mytech.png",
			descrip:
				"Web realizada para una tienda de tecnología, es un Ecommerce de productos tecnológicos. En este proyecto encontraras distintos productos, se utilizó PHP y MySQL para crear la base de datos de los productos, un carrito de compras, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.",
			demo: "https://my-tech.infinityfreeapp.com/index.php?sec=home",
			class: "p-dark portfolio__item p-blue",
			class_item: "portfolio__content dark",
		},
		{
			id: 3,
			title: "Matienzo",
			img: "https://i.ibb.co/4MtjFFM/matienzo.png",
			descrip:
				"Web realizada como proyecto final en el curso de Javascript en Coderhouse, el cual es un Ecommerce de mates de acero, calabaza o con temática, los productos son llamados a través de un fetch, tiene un carrito de compras y para el formulario de contacto utilicé EmailJS para que me lleguen los mails directamente a mi casilla, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.",
			demo: "https://tiendamatienzo.netlify.app/",
			class: "p-dark portfolio__item p-yellow",
			class_item: "portfolio__content dark",
		},
	];

	return (
		<section id='portfolio'>
			<h2>Portfolio</h2>

			<article className='portfolio__container'>
				{/* SEPARACION DE PROYECTO*/}

				{workData.map((data) => (
					<div className={data?.class} key={data?.id}>
						<img src={data?.img} alt={data?.title} className='circle' />
						<span className='portfolio__number'>0{data?.id}.</span>
						<div className={data?.class_item}>
							<h3>{data?.title}</h3>
							<p>{data?.descrip}</p>
							<div className='portfolio__btn'>
								<a
									href={data?.demo}
									target='_blank'
									rel='noopener noreferrer'
									className='btn-link'
								>
									Ver Web
								</a>
							</div>
						</div>
						<div className='portfolio__slider'>
							<img src={data?.img} alt={data?.title} className='img1' />
						</div>
					</div>
				))}
			</article>
		</section>
	);
};

export default Portfolio;
