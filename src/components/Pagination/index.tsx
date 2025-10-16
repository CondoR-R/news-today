import React from 'react';
import cn from 'classnames';
import style from './Pagination.module.scss';

interface Props {
  className?: string;
}

export const Pagination: React.FC<Props> = ({className}) => {
  return (
    <div className={cn(style.wrapper, className)}>
      Pagination
    </div>
  )
}