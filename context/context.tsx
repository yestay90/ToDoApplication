"use client";

import { ToDoItem } from "@/models/ToDoItem";
import { createContext, Dispatch, useReducer } from "react";

type StateType = {
  toDoList: ToDoItem[];
};

type ActionType = {
  type: string;
  data: any;
};

const initialState: StateType = {
  toDoList: [],
};

const reducer = (state: StateType, action: ActionType) => {
  const updatedState = { ...state };
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = action.data;
      newItem.id = Math.random().toString().slice(2, 7);
      return {
        ...updatedState,
        toDoList: [...state.toDoList, newItem],
      };
    case "REMOVE_ITEM":
      const itemId = action.data;
      updatedState.toDoList = updatedState.toDoList.filter(
        (item) => item.id !== itemId
      );
      return updatedState;
    default:
      return state;
  }
};

export const ToToListContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export function ToDoListContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ToToListContext.Provider value={{ state, dispatch } as any}>
      {children}
    </ToToListContext.Provider>
  );
}
