const initialState = {
  categories: [],
  todos: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'categories/load/pending':
      return {
        ...state,
        loading: true,
      }
    case "todos/load/fulfilled":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const loadCategories = () => {
  return (dispatch) => {
    dispatch({ type: "categories/load/pending" });
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((categories) => {
        dispatch({
          type: "todos/load/fulfilled",
          payload: categories,
        });
      });
  };
};
