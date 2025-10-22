import React from 'react';
import cn from 'classnames';
import style from './Pagination.module.scss';
import {useContextDispatch, useContextState} from "@/hooks";
import {pageSize} from "@/API/pageSize.ts";

interface Props {
  className?: string;
}

export const Pagination: React.FC<Props> = ({className}) => {
  const {page, data} = useContextState();
  const dipsatch = useContextDispatch();

  if (data && data?.totalResults <= pageSize) return;
  const pagesArr = new Array(
    Math.ceil(data?.totalResults ? data?.totalResults / pageSize : 0)).fill(null);

  const onClickLeftArrow = () => {
  }


  return (
    <div className={cn(style.wrapper, className)}>
      <button
        className={style.leftArrow}
        type="button"
        onClick={onClickLeftArrow}
      >
        Back
      </button>
      <div className={style.pagesGroup}>
        <ul className={style.list}>
          {pagesArr.map((_, index) => (
            <li key={index}>
              <button
                className={style.pageButton}
                type="button"
                onClick={() => {
                }}
              >
                {index + 1}
              </button>
            </li>))}
        </ul>

      </div>
      <button
        className={style.rightArrow}
        type="button"
        onClick={() => {
        }}
      >
        Forward
      </button>
    </div>
  )
}