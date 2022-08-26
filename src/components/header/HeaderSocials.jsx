import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {MdEmail} from "react-icons/md";

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href='#contact'>
				{" "}
				<MdEmail />
			</a>
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
	);
};

export default HeaderSocials;
