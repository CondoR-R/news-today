import React from 'react';
import cn from 'classnames';
import style from './Categories.module.scss';
import {categories} from "@/API/categories.ts";
import type {CategoryT} from "@/type/home-state.type.ts";
import {useHomeDispatch, useHomeState} from "@/hooks";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({className}) => {
  const state = useHomeState();
  const dispatch = useHomeDispatch();

  const onClickButton = (category: CategoryT) => () => {
    if (dispatch === null) return;

    dispatch({type: 'setActiveCategory', payload: category});

  }

  return (
    <nav className={cn(style.nav, className)}>
      <ul className={style.categories}>
        {categories.map((category, i) => (
          <li
            key={i}
            className={style.categoriesItem}
          >
            <button
              type={'button'}
              className={cn(
                style.categoriesButton,
                state.activeCategory === category && 'active'
              )}
              onClick={onClickButton(category)}
            >{category}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}