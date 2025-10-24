import React from 'react';
import cn from 'classnames';
import style from './Header.module.scss';
import {Link, useLocation} from "react-router";
import {Categories, Search} from '@/components';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  const pathname = useLocation().pathname;
  const isNewsPage = pathname.includes('/news');

  return (
    <header className={cn(style.header, className)}>
      <div className={cn(style.inner, 'container')}>
        <div className={style.body}>
          <h1 className={style.title}>
            <Link
              to="/"
              title={'Go to Home page'}
              aria-label={'Go to Home page'}
            >News.today</Link>
          </h1>
          {!isNewsPage && (<Search />)}
        </div>
        {!isNewsPage && (<Categories className={style.categories} />)}
        {isNewsPage && (<Link
          to={'/'}
          className={style.backLink}
        >← Go back</Link>)}
      </div>
    </header>
  )
}

