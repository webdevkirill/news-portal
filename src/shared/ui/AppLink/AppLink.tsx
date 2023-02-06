import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface IAppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: React.FC<IAppLinkProps> = props => {
  const { to, theme = AppLinkTheme.PRIMARY, className, children, ...rest } = props;

  return (
    <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...rest}>
      {children}
    </Link>
  );
};
