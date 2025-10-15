import {useContext} from "react";
import {ContextState} from "@/state/reducer.ts";

export const useContextState = () => {
  return useContext(ContextState);
}