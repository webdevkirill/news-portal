import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<IButtonProps> = props => {
  const { className, children, theme, ...rest } = props;

  return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...rest}>
      {children}
    </button>
  );
};
