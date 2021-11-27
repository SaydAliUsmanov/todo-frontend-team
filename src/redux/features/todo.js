const initialState = {
  categories: [],
  todos: [],
  loading: false,
  sortTodos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    case 'todos/load/pending':
      return {
        ...state,
        todosLoading: true,
      }
    case "todos/load/fulfilled":
      return {
        ...state,
        todos: action.payload,
        todosLoading: false,
      };
    case "todos/add/pending":
      return {
        ...state,
        adding: true,
      };
    case "todos/add/fulfilled":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        adding: false,
      };
    case 'todos/sort':
      return {
        ...state,
        sortTodos: action.payload
      }
    case 'todos/sort/clean':
      return {
        ...state,
        sortTodos: []
      }
    case "todos/delete/pending":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload) {
            return {
              ...todo,
              deleting: true,
            };
          }
          return todo;
        }),
      };
    case "todos/delete/fulfilled":
      return {
        ...state,
        todos: state.todos.filter((item) => item._id !== action.payload),
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
          type: "categories/load/fulfilled",
          payload: categories,
        });
      });
  };
};
export const loadTodos = () => {
  return (dispatch) => {
    dispatch({ type: "todos/load/pending" });
    fetch("http://localhost:4000/todos")
      .then((res) => res.json())
      .then((todos) => {
        dispatch({
          type: "todos/load/fulfilled",
          payload: todos,
        });
      });
  };
};
export const addTodo = (title, text, value) => {
  return (dispatch) => {
    dispatch({ type: "todos/add/pending" });
    fetch(`http://localhost:4000/todos`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        title: title,
        text: text,
        important: value,
      }),
    })
      .then((res) => res.json())
      .then((todo) => {
        dispatch({
          type: "todos/add/fulfilled",
          payload: todo,
        });
      });
  };
};
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: "todos/delete/pending", payload: id });
    fetch(`http://localhost:4000/todos/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        dispatch({
          type: "todos/delete/fulfilled",
          payload: id,
        });
      }
    });
  };
};
