import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
	return (
		<header id='home'>
			<section className='header__container bg-dark'>
				<div className='circle-b'></div>
				<div className='circle-c'></div>
				<article className='header__container-article'>
					<p className='text-light'>Hola, soy</p>
					<h1 className='text-gradient'>Diego Asensio</h1>
					<p className='text-light'>Desarrollador Web Front End</p>
					<CTA />
					<HeaderSocials />
				</article>

				<article className='header__img'>
					<img
						src='https://i.ibb.co/23Rx1kW/226-2265578-imagen-recuadro-celular-android-iphone-1-removebg-preview.png'
						alt='handcode mobile'
						className='img2'
					/>
					<img
						src='https://i.ibb.co/4YbnG2M/web3.png'
						alt='pinder mobile'
						className='img1'
					/>
					<img
						src='https://i.ibb.co/7RWL38t/web1.png'
						alt='viajaya mobile'
						className='img3'
					/>
				</article>
			</section>
		</header>
	);
};

export default Header;
