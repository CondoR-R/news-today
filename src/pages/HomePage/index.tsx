import React from 'react';
import {Card, Categories} from '@/components';
import {useTitle} from "@/hooks";
import style from "./HomePage.module.scss";
import {useFetchData} from "@/hooks/useFetchData.ts";

export const HomePage: React.FC = () => {
  useTitle("Home");
  useFetchData();

  return (
    <>
      <Categories className={style.categories} />
      <div className={style.cardBox}>
        <Card />
      </div>
    </>
  )
}