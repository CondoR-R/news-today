import React from 'react';
import {Card, Categories} from '@/components';
import {useTitle} from "@/hooks";
import style from "./HomePage.module.scss";

export const HomePage: React.FC = () => {

  useTitle("Home");

  return (
    <>
      <Categories className={style.categories} />
      <div className={style.cardBox}>
        <Card />
      </div>
    </>
  )
}