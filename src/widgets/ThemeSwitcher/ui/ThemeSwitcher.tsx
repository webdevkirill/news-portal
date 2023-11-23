import { FC } from 'react';

import { Theme, useTheme } from 'app/providers/ThemeProvider';

import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = props => {
  const { className } = props;
  const { theme, handleToggleTheme } = useTheme();

  return (
    <Button className={classNames('', {}, [className])} onClick={handleToggleTheme} theme={ThemeButton.CLEAR}>
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
