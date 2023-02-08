import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';

import cls from './ThemeSwitcher.module.scss';

import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

export interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
      <ThemeIcon />
    </Button>
  );
};
