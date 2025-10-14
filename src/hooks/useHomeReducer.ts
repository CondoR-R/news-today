import {useReducer} from "react";
import {initialState, reducer} from "@/state/home-reducer.ts";

export const useHomeReducer = () => {
  return useReducer(reducer, initialState);
}