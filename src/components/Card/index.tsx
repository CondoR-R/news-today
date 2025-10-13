import React from 'react';
import cn from 'classnames';

import style from './Card.module.scss';

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = ({className}) => {
  return (
    <div className={cn(style.wrapper, className)}>
      Card
    </div>
  )
}