import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContentProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme';

export const ThemeContext = createContext<IThemeContentProps>({});
