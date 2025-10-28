import React, {useState} from "react";
import "./portfolio.css";

const Portfolio = () => {
	const [activeFilter, setActiveFilter] = useState("all");

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
			technology: "javascript",
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
			technology: "php",
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
			technology: "javascript",
		},
		{
			id: 4,
			title: "Historia Argentina",
			img: "https://i.ibb.co/WW3wSR43/historia.png",
			descrip:
				"Se trata de una página informativa sobre la historia argentina, donde se recorre de forma clara y ordenada los principales acontecimientos desde la época colonial hasta la actualidad. El sitio está desarrollado con HTML, CSS y JavaScript, cuenta con un diseño totalmente responsive que se adapta a cualquier dispositivo, incorpora buenas prácticas de SEO para mejorar su posicionamiento y está optimizado en rendimiento y accesibilidad para ofrecer una experiencia fluida al usuario.",
			demo: "https://historiaargentina.netlify.app/",
			class: "p-dark portfolio__item",
			class_item: "portfolio__content dark",
			technology: "javascript",
		},
		{
			id: 5,
			title: "Tercer Tiempo",
			img: "https://i.ibb.co/67t38gzQ/3t.png",
			descrip:
				"Web creada para una escuela de fútbol donde los profesores pueden subir los resultados de los partidos y el sistema actualiza automáticamente los puntos de cada alumno. Está conectada a la API de Google Sheets, que funciona como base de datos para almacenar y gestionar la información en tiempo real. El sitio es totalmente responsive, se adapta a todo tipo de dispositivos, y cuenta con optimización SEO y un rendimiento eficiente para garantizar una experiencia fluida e intuitiva.",
			demo: "https://3tiempo.netlify.app/",
			class: "p-dark portfolio__item p-blue",
			class_item: "portfolio__content dark",
			technology: "javascript",
		},
		{
			id: 6,
			title: "Perfect Shoes",
			img: "https://i.ibb.co/cSVK4RcZ/shoes.png",
			descrip:
				"Web realizada como proyecto final en el curso de ReactJs en coderhouse, el cual es un Ecommerce de calzado deportivo y urbano. En este proyecto encontraras distintos productos, se utilizo firebase para crear la base de datos de los productos, se usaron hooks para traerlos, un carrito de compras, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.",
			class: "p-dark portfolio__item p-yellow",
			class_item: "portfolio__content dark",
			technology: "React",
		},
	];

	const filteredWork =
		activeFilter === "all"
			? workData
			: workData.filter((work) => work.technology === activeFilter);

	const filters = [
		{id: "all", label: "Todos"},
		{id: "javascript", label: "JavaScript"},
		{id: "react", label: "React"},
		{id: "php", label: "PHP"},
	];

	return (
		<section id='portfolio'>
			<h2>Portfolio</h2>

			<div className='portfolio__filters'>
				{filters.map((filter) => (
					<button
						key={filter.id}
						className={`filter__btn ${
							activeFilter === filter.id ? "active" : ""
						}`}
						onClick={() => setActiveFilter(filter.id)}
					>
						{filter.label}
					</button>
				))}
			</div>

			<article className='portfolio__container'>
				{filteredWork.map((data) => (
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
