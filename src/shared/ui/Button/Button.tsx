import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<IButtonProps> = props => {
  const { className, theme, children, ...rest } = props;

  return (
    <button {...rest} className={classNames(cls.Button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
};
