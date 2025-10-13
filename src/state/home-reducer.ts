import {createContext, type Dispatch} from "react";
import type {HomeActionT, HomeStateT} from "@/type/home-state.type.ts";

export const initialState: HomeStateT = {
  activeCategory: 'all',
};

export const reducer =
  (state: HomeStateT, action: HomeActionT) => {
    switch (action.type) {
      case 'setActiveCategory':
        return ({
          ...state,
          activeCategory: action.payload,
        });
    }
    throw Error('Unknown action: ' + action.type);
  }

export const HomeContextState =
  createContext<HomeStateT>(initialState);
export const HomeContextDispatch =
  createContext<Dispatch<HomeActionT> | null>(null);