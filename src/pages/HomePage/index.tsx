import React from 'react';
import {HomeContextDispatch, HomeContextState,} from "@/state/home-reducer.ts";
import {Card, Categories} from '@/components';
import {useHomeReducer, useTitle} from "@/hooks";
import style from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const [state, dispatch] = useHomeReducer();
  useTitle("Home");

  return (
    <HomeContextState.Provider value={state}>
      <HomeContextDispatch.Provider value={dispatch}>
        <Categories className={style.categories} />
        <div className={style.cardBox}>
          <Card />
        </div>
      </HomeContextDispatch.Provider>
    </HomeContextState.Provider>
  )
}