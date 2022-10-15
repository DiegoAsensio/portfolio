import React from "react";
import "./portfolio.css";

const Portfolio = () => {
	const workData = [
		{
			id: 1,
			title: "Paisajismo Web",
			img: "https://i.ibb.co/fdWHq2L/paisajismo.png",
			descrip:
				"Web realizada como proyecto final en el curso de desarrollo web en Coderhouse, la cual es una página para un miembro familiar que se dedica al paisajismo. En este proyecto encontraras, información de la persona, servicios que ofrece, una galería. El maquetado se realizó con HTML5, CSS y SASS para los estilos, Bootstrap para un mayor dinamismo, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizada.",
			demo: "https://lghpaisajismo.000webhostapp.com/",
			class: "p-dark portfolio__item",
			class_item: "portfolio__content dark",
		},
		{
			id: 2,
			title: "Perfect Shoes",
			img: "https://i.ibb.co/cXFsJnT/shoes.png",
			descrip:
				"Web realizada como proyecto final en el curso de ReactJs en Coderhouse, el cual es un Ecommerce de calzado deportivo y urbano. En este proyecto encontraras distintos productos, se utilizó Firebase para crear la base de datos de los productos, se usaron hooks para traerlos, un carrito de compras, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.",
			demo: "https://e-commerce-asensio.web.app/",
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
