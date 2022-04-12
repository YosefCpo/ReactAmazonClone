import React from "react";
import {useStateValue} from "../StateProvider";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
	let [{basket}] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout-left">
				<img
					className="checkout-ad"
					src="https://rallyrecruitmentmarketing.com/wp-content/uploads/2020/08/Digital-Job-Advertising-Strategies-Bootcamp-Horizontal-Ad.png"
					alt=""
				/>
				<div>
					<h2>Your shopping Basket</h2>
					{basket.map((product) => (
						<CheckoutProduct
							id={product.id}
							title={product.title}
							price={product.price}
							rating={product.rating}
							image={product.image}
						/>
					))}
				</div>
			</div>
			<div className="checkout-right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
