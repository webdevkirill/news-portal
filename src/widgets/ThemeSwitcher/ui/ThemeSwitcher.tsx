import { Theme, useTheme } from 'app/providers/ThemeProvider';

import DarkThemeIcon from 'shared/assets/icons/theme-dark.svg';
import LightThemeIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import cls from './ThemeSwitcher.module.scss';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = props => {
  const { className } = props;
  const { theme, handleToggleTheme } = useTheme();

  return (
    <Button className={classNames(cls.themeSwitcher, {}, [className])} onClick={handleToggleTheme}>
      {theme === Theme.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
