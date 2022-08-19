import React, {useState} from "react";
import "./Nav.css";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {BiMessageSquareDetail} from "react-icons/bi";
import {HiOutlineDesktopComputer} from "react-icons/hi";

function Navbar() {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<nav>
			<a
				href='#home'
				onClick={() => setActiveNav("#home")}
				className={activeNav === "#home" ? "active" : ""}
			>
				<AiOutlineHome />
			</a>
			<a
				href='#about'
				onClick={() => setActiveNav("#about")}
				className={activeNav === "#about" ? "active" : ""}
			>
				<AiOutlineUser />
			</a>
			<a
				href='#portfolio'
				onClick={() => setActiveNav("#portfolio")}
				className={activeNav === "#portfolio" ? "active" : ""}
			>
				<HiOutlineDesktopComputer />
			</a>
			<a
				href='#testimonials'
				onClick={() => setActiveNav("#testimonials")}
				className={activeNav === "#testimonials" ? "active" : ""}
			>
				<BiBook />
			</a>
			<a
				href='#contact'
				onClick={() => setActiveNav("#contact")}
				className={activeNav === "#contact" ? "active" : ""}
			>
				<BiMessageSquareDetail />
			</a>
		</nav>
	);
}

export default Navbar;
