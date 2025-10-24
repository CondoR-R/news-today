import React, {useEffect, useState} from 'react';
import style from './Search.module.scss';
import {IoSearchSharp} from "react-icons/io5";
import {useContextDispatch} from "@/hooks";


export const Search: React.FC = () => {
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
  )
}