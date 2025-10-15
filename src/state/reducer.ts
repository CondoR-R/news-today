import {createContext, type Dispatch} from "react";
import type {ActionT, CategoryT, DataT, StateT} from "@/type/state.type.ts";

export const initialState: StateT = {
  activeCategory: 'general',
  isLoading: false,
  data: null,
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
        return ((action.payload as boolean) ? {
          ...state,
          isLoading: true
        } : state);
      }
      case 'setError': {
        return ((action.payload as string) ? {
          ...state,
          error: action.payload,
          isLoading: false
        } : state);
      }
      case 'setData': {
        return ((action.payload as DataT) ? {
          ...state,
          data: action.payload,
          isLoading: false,
          error: null,
        } : state);
      }
    }
    throw Error('Unknown action: ' + action.type);
  }

export const ContextState =
  createContext<StateT>(initialState);
export const ContextDispatch =
  createContext<Dispatch<ActionT> | null>(null);