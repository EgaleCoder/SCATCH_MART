const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { product } = action.payload;
      let cartProduct;
      cartProduct = {
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: product.size.type,
        discount: product.discount,
        quantity: 1,
      };
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;
