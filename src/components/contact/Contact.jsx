import React, {useRef} from "react";
import "./contact.css";
import {BiMap} from "react-icons/bi";
import {MdOutlineMail} from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_myavux5",
				"template_csnkimw",
				form.current,
				"_MHO8uQy8U4lOi7vu"
			)
			.then(
				(result) => {
					console.log(result.text);
					Swal.fire({
						icon: "success",
						title: "Gracias por el mensaje, me contactare pronto contigo.",
						padding: "3em",
						color: "#fff",
						background: "#422c6c",
						backdrop: `    background: rgba(238, 238, 238, 0.068) `,
					});
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id='contact' className=' bg-dark'>
			<h2>Contactame</h2>
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<BiMap className='contact__option-icon' />
						<h4>Ubicación</h4>
						<h5>Buenos Aires, Argentina.</h5>
						<a
							href='https://goo.gl/maps/79RaGLpAiAqF8ytd9'
							target='_blank'
							rel='noopener noreferrer'
						>
							Ver el mapa
						</a>
					</article>

					<article className='contact__option'>
						<MdOutlineMail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>dieasensio@gmail.com</h5>
						<a
							href='mailto:dieasensio@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Enviar Mensaje
						</a>
					</article>
				</div>

				<form ref={form} onSubmit={sendEmail}>
					<label htmlFor='name' aria-describedby='full name'>
						Nombre Completo{" "}
					</label>
					<input
						type='text'
						name='name'
						placeholder='Escribe tu nombre completo'
						required
					/>

					<label htmlFor='email' aria-describedby='Tu email'>
						Tu Email
					</label>
					<input
						type='email'
						name='email'
						placeholder='escribe tu email'
						required
					/>

					<label htmlFor='message' aria-describedby='Dejame un mensaje'>
						Dejame Un Mensaje
					</label>
					<textarea
						name='message'
						rows='7'
						placeholder='Deja tu mensaje'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Enviar Mensaje
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
