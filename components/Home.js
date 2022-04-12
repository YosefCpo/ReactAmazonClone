import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home-container">
				<img
					className="home-image"
					src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
					alt=""
				/>
				<div className="home-row">
					<Product
						id="12312378"
						title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller,
					Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass
					Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games"
						price={29.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UY218_.jpg"
					/>
					<Product
						id="2313037"
						title="Xbox Series S"
						price={299.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL320_.jpg"
					/>
				</div>
				<div className="home-row">
					<Product
						id="21375375"
						title="Razer Cynosa Chroma Gaming Keyboard: Individually Backlit RGB Keys - Spill-Resistant Design - Programmable Macro Functionality - Quiet & Cushioned"
						price={34.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/61WgmLgwuQL._AC_UY218_.jpg"
					/>
					<Product
						id="123756"
						title="Sceptre 24 Professional Thin 75Hz 1080p LED Monitor 2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
						price={125}
						rating={4}
						image="https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg"
					/>
					<Product
						id="212376"
						title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PlayStation, & Xbox - 1-Year Rescue Service"
						price={59.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg"
					/>
				</div>
				<div className="home-row">
					<Product
						id="2864278"
						title='Amazon Fire TV 50" 4-Series 4K UHD smart TV'
						price={319.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/51EPd38RHQL._AC_UY218_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
