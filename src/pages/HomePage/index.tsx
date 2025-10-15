import React from 'react';
import {Card, Categories} from '@/components';
import {useContextState, useFetchData, useTitle} from "@/hooks";
import style from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const {isLoading, data} = useContextState();

  useTitle("Home");
  useFetchData();

  return (
    <>
      <Categories className={style.categories} />
      <div className={style.cardBox}>
        {isLoading && 'Loading...'}
        {!isLoading && data && data?.articles && data.articles.map((article, i) => (
          <Card
            key={i}
            card={article}
          />))}
      </div>
    </>
  )
}