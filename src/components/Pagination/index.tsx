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
  const dispatch = useContextDispatch();

  if (data && data?.totalResults <= pageSize) return;
  const pagesArr = new Array(
    Math.ceil(data?.totalResults ? data?.totalResults / pageSize : 0)).fill(null);

  const onClickBack = () => {
    if (page === 1 || !dispatch) return;
    dispatch({type: 'SET_PAGE', payload: page - 1});
  }

  const onClickForward = () => {
    if (page === pagesArr.length || !dispatch) return;
    dispatch({type: 'SET_PAGE', payload: page + 1});
  }

  const onClickPageNumber = (num: number) => () => {
    if (!dispatch) return;
    dispatch({type: 'SET_PAGE', payload: num});
  }

  return (
    <div className={cn(style.wrapper, className)}>
      <button
        className={style.leftArrow}
        type="button"
        onClick={onClickBack}
      >
        Back
      </button>
      <div className={style.pagesGroup}>
        <ul className={style.list}>
          {pagesArr.map((_, index) => (
            <li key={index}>
              <button
                className={cn(style.pageButton, {'active': index + 1 === page})}
                type="button"
                onClick={onClickPageNumber(index + 1)}
              >
                {index + 1}
              </button>
            </li>))}
        </ul>
      </div>
      <button
        className={style.rightArrow}
        type="button"
        onClick={onClickForward}
      >
        Forward
      </button>
    </div>
  )
}