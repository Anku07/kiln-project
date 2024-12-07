import { createContext, useContext, useReducer } from 'react';

export const TodoContext = createContext(null);


export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';


export const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { ...action.payload, id: Date.now(), completed: false }];
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
};