import React from "react";
import "../styles/CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import {useStateValue} from "../StateProvider";

function CheckoutProduct({id, title, price, rating, image}) {
	let [{basket}, dispatch] = useStateValue();

	let removeFromBasket = () => {
		dispatch({
			type: "remove_from_basket",
			id: id,
		});
	};

	return (
		<div className="checkout-product">
			<div className="img-container">
				<img src={image} alt="" />
			</div>

			<div className="checkout-product-info">
				<p className="title">{title}</p>
				<div className="price">
					<small>$</small>
					<strong>{price}</strong>
				</div>
				<div className="rating">
					{Array(rating)
						.fill()
						.map(() => (
							<StarIcon />
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
