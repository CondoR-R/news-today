import React from 'react';
import cn from 'classnames';

import style from './Card.module.scss';
import {Link} from "react-router";

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({className}) => {
  return (
    <div className={style.card}>
      <Link
        className={cn(style.link, className)}
        to={'/'}
      >
        <img
          className={style.image}
          width={340}
          height={190}
          src={'https://www.nj.com/resizer/v2/TLUFU3C4UJBRLB42JIZXRJM4LE.jpeg?auth=2aaaede8289d723aa433a1063eef632afab0e7ab7cacdd05981590ac51bc2520&width=1280&smart=true&quality=90'}
          alt={''}
          loading="lazy"
        />
        <h2 className={style.title}>Legendary Jersey Shore nightclub announces closure, final days of operation - NJ.com</h2>
        <p className={style.description}>The popular Jersey Shore bar will be demolished for a waterfront redevelopment project including a hotel, residential buildings and retail space.</p>
      </Link>
      <div className={style.bottom}>
        <div className={style.bottomLeft}>
          <span className={style.author}>N.J. News Report</span>
          <span className={style.date}>12.10.2025</span>
        </div>
        <div className={style.bottomRight}>
          <span>Source:</span>
          <a
            className={style.source}
            href={'https://www.nj.com/monmouth/2025/10/legendary-jersey-shore-nightclub-announces-closure-final-days-of-operation.html'}
            target="_blank"
            onClick={() => console.log(1)}
          >
            nj.com
          </a>
        </div>
      </div>

    </div>
  )
}