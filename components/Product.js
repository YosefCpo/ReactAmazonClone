import React from "react";
import "../styles/Product.css";
import StarIcon from "@mui/icons-material/Star";
import {useStateValue} from "../StateProvider";

function Product({id, title, price, rating, image}) {
	let [state, dispatch] = useStateValue();

	let addToBasket = () => {
		dispatch({
			type: "add_to_basket",
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				image: image,
			},
		});
	};

	return (
		<div className="product" key={id}>
			<div className="info">
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
			</div>
			<img src={image} alt="" />
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
