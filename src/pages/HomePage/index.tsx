import React from 'react';
import {HomeContextDispatch, HomeContextState,} from "@/state/home-reducer.ts";
import {Categories} from '@/components';
import {useHomeReducer, useTitle} from "@/hooks";

export const HomePage: React.FC = () => {
  const [state, dispatch] = useHomeReducer();
  useTitle("Home");

  return (
    <HomeContextState.Provider value={state}>
      <HomeContextDispatch.Provider value={dispatch}>
        <Categories />
      </HomeContextDispatch.Provider>
    </HomeContextState.Provider>
  )
}