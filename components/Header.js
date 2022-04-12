import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "../styles/Header.css";
import {Link} from "react-router-dom";
import {useStateValue} from "../StateProvider";
import {auth} from "../firebase";

function Header() {
	let [{basket, user}, dispatch] = useStateValue();

	let signOut = () => {
		auth.signOut();
		dispatch({
			type: "set_user",
			user: null,
		});
	};

	return (
		<div className="header">
			<Link to="/">
				<img
					className="header-logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt=""
				/>
			</Link>

			<div className="header-search">
				<input className="header-search-input" type="text" />
				<SearchIcon className="header-search-icon" />
			</div>
			<div className="header-options">
				{!user ? (
					<Link to="/login">
						<div className="header-option">
							<span className="line-one">Hello Guest</span>
							<span className="line-two">Sign In</span>
						</div>
					</Link>
				) : (
					<div className="header-option header-sign-out" onClick={signOut}>
						<span className="line-one">Hello {user?.email}</span>
						<span className="line-two">Sign Out</span>
					</div>
				)}

				<div className="header-option">
					<span className="line-one">Return</span>
					<span className="line-two">& Orders</span>
				</div>
				<div className="header-option">
					<span className="line-one">Your</span>
					<span className="line-two">Prime</span>
				</div>
				<Link to="/checkout">
					<div className="header-cart">
						<ShoppingBasketIcon className="header-cart-icon" />
						<span className="header-cart-count">{basket.length}</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
