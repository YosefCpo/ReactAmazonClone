import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../reducer";
import {useNavigate} from "react-router-dom";

function Subtotal() {
	let navigate = useNavigate();
	let [{basket}, dispatch] = useStateValue();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => {
					return (
						<>
							<p className="subtotal-items">
								Subtotal ({basket.length} items): <strong>{value}</strong>
							</p>
							<div className="subtotal-gift">
								<input type="checkbox" />
								<small>This order contains a gift</small>
							</div>
						</>
					);
				}}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;
