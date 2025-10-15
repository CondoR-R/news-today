import React, {useState} from 'react';
import cn from 'classnames';
import style from './Header.module.scss';
import {Link} from "react-router";
import {IoSearchSharp} from "react-icons/io5";
import {Categories} from '@/components';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

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
          <label
            htmlFor="search"
            className={style.search}
          >
            <input
              type="search"
              id="search"
              value={searchValue}
              onChange={onChangeSearch}
              placeholder="Поиск..."
            />
            <IoSearchSharp />
          </label>
        </div>
        <Categories className={style.categories} />
      </div>
    </header>
  )
}

