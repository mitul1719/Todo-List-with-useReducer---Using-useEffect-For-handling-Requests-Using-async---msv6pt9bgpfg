const todoReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD": {
      return { ...state, todo: [...state.todo, action.payload] };
      break;
    }
    case "DELETE": {
      return {
        ...state,
        todo: state.todo.filter((item, id) => id !== action.payload),
      };
    }
  }
};

export { todoReducer };
