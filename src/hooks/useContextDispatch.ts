import {useContext} from "react";
import {ContextDispatch} from "@/state/reducer.ts";

export const useContextDispatch = () => {
  return useContext(ContextDispatch);
}