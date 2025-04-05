const FillterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { allProducts, filter } = state;
      let tempProducts = [...allProducts];
      const { text, category } = filter;

      // ✅ 1. Filter by category FIRST (should apply even if text search is empty)
      if (category && category !== "All") {
        tempProducts = tempProducts.filter((curElm) => curElm.category === category);
      }

      // ✅ 2. Filter by text search SECOND (should work independently)
      if (text) {
        tempProducts = tempProducts.filter((curElm) =>
          curElm.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      return {
        ...state,
        filterProducts: tempProducts,
      };

    default:
      return state;
  }
};

export default FillterReducer;
