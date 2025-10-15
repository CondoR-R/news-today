import {createContext, type Dispatch} from "react";
import type {ActionT, CategoryT, DataT, StateT} from "@/type/state.type.ts";

export const initialState: StateT = {
  activeCategory: 'general',
  isLoading: false,
  data: null,
  error: null,
  search: '',
};

export const reducer =
  (state: StateT, action: ActionT) => {
    switch (action.type) {
      case 'SET_ACTIVE_CATEGORY': {
        return ((action.payload as CategoryT) ? {
          ...state,
          activeCategory: action.payload,
        } : state)
      }
      case 'SET_IS_LOADING': {
        return ((action.payload as boolean) ? {
          ...state,
          isLoading: true
        } : state);
      }
      case 'SET_ERROR': {
        return ((action.payload as string) ? {
          ...state,
          error: action.payload,
          isLoading: false
        } : state);
      }
      case 'SET_DATA': {
        return ((action.payload as DataT) ? {
          ...state,
          data: action.payload,
          isLoading: false,
          error: null,
        } : state);
      }
      case 'SET_SEARCH': {
        if (action.payload === '') {
          return {
            ...state,
            search: action.payload,
            activeCategory: 'general',
          }
        }
        return {
          ...state,
          search: action.payload,
          activeCategory: '',
        }
      }
    }
    throw Error('Unknown action: ' + action.type);
  }

export const ContextState =
  createContext<StateT>(initialState);
export const ContextDispatch =
  createContext<Dispatch<ActionT> | null>(null);