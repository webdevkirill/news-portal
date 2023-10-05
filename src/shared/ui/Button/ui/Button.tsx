import { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: React.FC<IButtonProps> = props => {
  const { className, children, theme = ThemeButton.CLEAR, ...rest } = props;

  return (
    <button className={classNames(cls.button, {}, [className, cls[theme]])} {...rest}>
      {children}
    </button>
  );
};
