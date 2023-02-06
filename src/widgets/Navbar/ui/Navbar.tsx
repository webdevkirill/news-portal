import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './Navbar.module.scss';

export interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.link} theme={AppLinkTheme.SECONDARY}>
          Home Page
        </AppLink>
        <AppLink to={'/about'} className={cls.link} theme={AppLinkTheme.SECONDARY}>
          About Page
        </AppLink>
      </div>
    </div>
  );
};
