import {createContext, type Dispatch} from "react";
import type {ActionT, StateT} from "@/type/state.type.ts";

export const initialState: StateT = {
  activeCategory: 'general',
  isLoading: false,
  data: null,
  error: null,
  search: '',
  page: 1,
};

export const reducer =
  (state: StateT, action: ActionT) => {
    switch (action.type) {
      case 'SET_ACTIVE_CATEGORY': {
        return ({
          ...state,
          activeCategory: action.payload,
          search: '',
          page: 1,
        })
      }
      case 'SET_IS_LOADING': {
        return ({
          ...state,
          isLoading: true,
        });
      }
      case 'SET_ERROR': {
        return ({
          ...state,
          error: action.payload,
        });
      }
      case 'SET_DATA': {
        return ({
          ...state,
          data: action.payload,
          isLoading: false,
          error: null,
        });
      }
      case 'SET_SEARCH': {
        if (action.payload === '') {
          return {
            ...state,
            search: action.payload,
            activeCategory: 'general',
            page: 1,
          }
        }
        return {
          ...state,
          search: action.payload,
          activeCategory: '',
        }
      }
      case 'SET_PAGE': {
        return {
          ...state,
          page: action.payload,
        }
      }
    }
  }

export const ContextState =
  createContext<StateT>(initialState);
export const ContextDispatch =
  createContext<Dispatch<ActionT> | null>(null);