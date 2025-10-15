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
  if (!card.description && !card.content) return;

  const date = new Date(card.publishedAt);
  const renderDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

  return (
    <div className={style.card}>
      <Link
        className={cn(style.link, className)}
        to={'/'}
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
        <p className={style.description}>{cutText(card?.description ? card.description : card.content, 80)}</p>
      </Link>
      <div className={style.bottom}>
        <div className={style.bottomLeft}>
          {card.author &&
            <span className={style.author}>{card.author}</span>}
          <span className={style.date}>{renderDate}</span>
        </div>
        <div className={style.bottomRight}>
          <span>Source:</span>
          <a
            className={style.source}
            href={card.url}
            target="_blank"
          >
            {card.source.name}
          </a>
        </div>
      </div>

    </div>
  )
}

// 80

// 30