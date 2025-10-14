import {useContext} from "react";
import {HomeContextState} from "@/state/home-reducer.ts";

export const useHomeState = () => {
  return useContext(HomeContextState);
}