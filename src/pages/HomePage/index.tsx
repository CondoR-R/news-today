import React from 'react';
import {Card, CardSkeleton} from '@/components';
import {useContextState, useFetchData, useTitle} from "@/hooks";
import style from "./HomePage.module.scss";

export const HomePage: React.FC = () => {
  const {isLoading, data} = useContextState();
  const emptyArr: null[] = new Array(12).fill(null)

  useTitle("Home");
  useFetchData();

  return (
    <>

      <div className={style.cardBox}>
        {isLoading && emptyArr.map((_, i) => <CardSkeleton key={i} />)}
        {!isLoading && data && data?.articles && data.articles.map((article, i) => (
          <Card
            key={i}
            card={article}
          />))}
      </div>
    </>
  )
}