import React, { useReducer } from "react";
import { DrawerContext } from "./drawer.context";
const initialState = {
  isOpen: false,
  modalIsOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "MODAL-TOGGLE":
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
      };
    default:
      return state;
  }
}
export const DrawerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DrawerContext.Provider value={{ state, dispatch }}>
      {children}
    </DrawerContext.Provider>
  );
};
