import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import style from './Header.module.scss';
import {Link} from "react-router";
import {IoSearchSharp} from "react-icons/io5";
import {Categories} from '@/components';
import {useContextDispatch} from "@/hooks";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useContextDispatch();

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (!dispatch) return;

    const timeoutId = setTimeout(() => {
      dispatch({type: "SET_SEARCH", payload: searchValue});
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchValue]);

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

