const initialState = {
  todos: [],
  categories: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "todos/load/fulfilled":
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case "categories/load/pending":
      return {
        ...state,
        loading: true,
      };
    case "categories/load/fulfilled":
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    default:
      return state
  }
}

export const loadTodos = () => {
  return (dispatch) => {
    dispatch({ type: "todos/load/pending" });
    fetch("http://localhost:4000/todos")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "todos/load/fulfilled", payload: data });
    });
  };
};


export const loadCategories = () => {
  return (dispatch) => {
    dispatch({ type: "categories/load/pending" });
    fetch("http://localhost:4000/categories")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: "categories/load/fulfilled", payload: data });
    });
  };
};