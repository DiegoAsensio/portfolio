import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/nav/Navbar";

function App() {
	return (
		<>
			<Header />
			<Navbar />
			<About />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
