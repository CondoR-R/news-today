import React from 'react';
import cn from 'classnames';
import style from './Card.module.scss';
import {Link} from "react-router";
import type {ArticlesT} from "@/type/state.type.ts";
import {cutText} from "@/functions";

interface Props {
  className?: string;
  card: ArticlesT;
}

export const Card: React.FC<Props> = ({className, card}) => {
  const date = new Date(card.publishedAt);
  const renderDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  let description: string;
  if (card?.description) description = cutText(card.description, 80);
  else if (card?.content) description = cutText(card.content, 80);
  else description = '';

  return (
    <div className={style.card}>
      <Link
        className={cn(style.link, className)}
        to={`/news/${card.title}`}
        state={card}
        title={'Read more'}
        aria-label={'Read more'}
      >
        <img
          className={style.image}
          width={340}
          height={190}
          src={card.urlToImage}
          alt={''}
          loading="lazy"
        />
        <h2 className={style.title}>{cutText(card.title, 25)}</h2>
        <p className={style.description}>{description}</p>
      </Link>
      <div className={style.bottom}>
        <div className={style.bottomLeft}>
          <span className={style.date}>{renderDate}</span>
        </div>
        <div className={style.bottomRight}>
          <span>Source:</span>
          <a
            className={style.source}
            href={card.url}
            target="_blank"
          >
            {cutText(card.source.name, 15)}
          </a>
        </div>
      </div>

    </div>
  )
}

// 80

// 30