import React from "react";
import "./about.css";
import ME from "../../assets/headshot.jpeg";
import {
	FaAward,
	FaFolderOpen,
	FaCss3Alt,
	FaBootstrap,
	FaGitSquare,
	FaReact,
} from "react-icons/fa";
import {AiFillHtml5} from "react-icons/ai";
import {SiJavascript, SiSass, SiMaterialui, SiFirebase} from "react-icons/si";

const About = () => {
	return (
		<section id='about' className='bg-dark'>
			<h2>Sobre Mi</h2>

			<div className=' about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={ME} alt='die pick' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						<article className='about__card c1'>
							<FaAward className='about__icon' />
							<h5>Experiencia</h5>
							<small>3+ años trabajando</small>
						</article>

						<article className='about__card c2'>
							<FaFolderOpen className='about__icon' />
							<h5>Proyectos</h5>
							<small>14+ Proyectos Terminados</small>
						</article>
					</div>
					<p>
						Hola soy Diego Asensio de Argentina. Siempre estoy en búsqueda de
						nuevos retos en un equipo de desarrollo, donde pueda aportar valor
						desde mi experiencia y conocimiento dentro del área de Front-End,
						además complementar con seguir aprendiendo día a día.
					</p>

					<article className='stack'>
						<h5>Mi stack de tecnologias:</h5>

						<div className='stack__list'>
							<ul>
								<li>
									<SiJavascript />
								</li>
								<li>
									<AiFillHtml5 />
								</li>
								<li>
									<FaCss3Alt />
								</li>
								<li>
									<SiSass />
								</li>
								<li>
									<FaBootstrap />
								</li>
								<li>
									<SiMaterialui />
								</li>
								<li>
									<FaGitSquare />
								</li>
								<li>
									<FaReact />
								</li>
								<li>
									<SiFirebase />
								</li>
							</ul>
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default About;
