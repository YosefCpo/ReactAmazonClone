export const initialState = {
	basket: [],
	user: null,
};

// Selector
export const getBasketTotal = (basket) =>
	basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case "add_to_basket":
			return {
				...state,
				basket: [...state.basket, action.item],
			};
		case "remove_from_basket":
			let index = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			let newBasket = [...state.basket];

			if (index >= 0) {
				newBasket.splice(index, 1);
			} else {
				console.warn(`Product with id ${action.id} Not Found!`);
			}

			return {
				...state,
				basket: newBasket,
			};
		case "set_user":
			return {
				...state,
				user: action.user,
			};
		default:
			return state;
	}
};

export default reducer;
