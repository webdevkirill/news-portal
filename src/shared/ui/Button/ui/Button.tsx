import { ButtonHTMLAttributes, FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'm',
  L = 'l',
  XL = 'xl',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<IButtonProps> = props => {
  const { className, children, theme, square, size = ButtonSize.M, ...rest } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: !!square,
  };

  return (
    <button className={classNames(cls.button, mods, [className, cls[theme], cls[`size_${size}`]])} {...rest}>
      {children}
    </button>
  );
};
