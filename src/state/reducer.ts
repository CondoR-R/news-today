import {createContext, type Dispatch} from "react";
import type {ActionT, CategoryT, StateT} from "@/type/state.type.ts";

export const initialState: StateT = {
  activeCategory: 'top',
  isLoading: false,
  data: {},
  error: null,
};

export const reducer =
  (state: StateT, action: ActionT) => {
    switch (action.type) {
      case 'setActiveCategory': {
        return ((action.payload as CategoryT) ? {
          ...state,
          activeCategory: action.payload,
        } : state)
      }
      case 'setIsLoading': {
        return {
          ...state,
          isLoading: true
        };
      }
      case 'setError': {
        return {
          ...state,
          error: action.payload,
          isLoading: false
        };
      }
      case 'setData': {
        return {
          ...state,
          data: action.payload,
          isLoading: false,
          error: null,
        }
      }
    }
    throw Error('Unknown action: ' + action.type);
  }

export const ContextState =
  createContext<StateT>(initialState);
export const ContextDispatch =
  createContext<Dispatch<ActionT> | null>(null);