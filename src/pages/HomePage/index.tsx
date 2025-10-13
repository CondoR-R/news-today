import React, {useReducer} from 'react';
import {
  HomeContextDispatch,
  HomeContextState,
  initialState,
  reducer
} from "@/state/home-reducer.ts";
import {Categories} from '@/components';
import {useTitle} from "@/hooks";

export const HomePage: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useTitle("Home");

  return (
    <HomeContextState.Provider value={state}>
      <HomeContextDispatch.Provider value={dispatch}>
        <Categories />
      </HomeContextDispatch.Provider>
    </HomeContextState.Provider>
  )
}