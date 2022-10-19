import React from "react";
import CV from "../../assets/CVasensio.pdf";
const CTA = () => {
	return (
		<div className='cta'>
			<a href={CV} download className='btn'>
				Descargar Cv
			</a>
			<a href='#contact' className='btn btn-primary talk'>
				Hablemos
			</a>
		</div>
	);
};

export default CTA;
