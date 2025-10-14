import {useContext} from "react";
import {HomeContextDispatch} from "@/state/home-reducer.ts";

export const useHomeDispatch = () => {
  return useContext(HomeContextDispatch);
}