import React from "react";
import "./footer.css";
import LOGO from "../../assets/Logo.png";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";

const Footer = () => {
	return (
		<footer>
			<div className='footer__grid'>
				<img src={LOGO} alt='logo' />

				<ul className='permalinks'>
					<li>
						<a href='#home'>Inicio</a>
					</li>
					<li>
						<a href='#about'>Sobre mi</a>
					</li>
					<li>
						<a href='#portfolio'>Portfolio</a>
					</li>
					<li>
						<a href='#testimonials'>Referencias</a>
					</li>
					<li>
						<a href='#contact'>Contacto</a>
					</li>
				</ul>

				<div className='footer__socials'>
					<a
						href='https://www.linkedin.com/in/diego-asensio/'
						target='_blank'
						rel='noopener noreferrer'
					>
						<BsLinkedin />
					</a>
					<a
						href='https://github.com/DiegoAsensio'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub />
					</a>
				</div>
			</div>

			<div className='footer_copyright'>
				<small>&copy; Diego Asensio. derechos reservados.</small>
			</div>
		</footer>
	);
};

export default Footer;
