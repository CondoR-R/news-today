import React from 'react';
import cn from 'classnames';
import style from './NewsPage.module.scss';
import {useLocation} from "react-router";
import {useTitle} from "@/hooks";
import type {ArticlesT} from "@/type/state.type.ts";

interface Props {
  className?: string;
}

export const NewsPage: React.FC<Props> = ({className}) => {
  const card: ArticlesT = useLocation().state;

  useTitle("News");

  console.log(card);

  return (
    <div className={cn(style.wrapper, className)}>
      <img
        className={style.image}
        width={1000}
        height={1000}
        src={card.urlToImage}
        alt={''}
        loading="lazy"
      />
      <h2 className={style.title}>{card.title}</h2>
      <p className={style.description}>{card.description}</p>
      <p className={style.content}>{card.content}</p>
      <div className={style.source}>
        <span>Source: </span>
        <a href={card.url}>{card.source.name}</a>
      </div>
    </div>
  )
}