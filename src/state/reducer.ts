import {createContext, type Dispatch} from "react";
import type {ActionT, CategoryT, StateT} from "@/type/state.type.ts";

export const initialState: StateT = {
  activeCategory: 'top',
  isLoading: false,
  news: {},
  error: null,
};

export const reducer =
  (state: StateT, action: ActionT) => {
    switch (action.type) {
      case 'setActiveCategory':
        return ((action.payload as CategoryT) ? {
          ...state,
          activeCategory: action.payload,
        } : state);
    }
    throw Error('Unknown action: ' + action.type);
  }

export const ContextState =
  createContext<StateT>(initialState);
export const ContextDispatch =
  createContext<Dispatch<ActionT> | null>(null);