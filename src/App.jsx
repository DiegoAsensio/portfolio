import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
	return (
		<>
			<Header />
			<Navbar />
			<About />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
