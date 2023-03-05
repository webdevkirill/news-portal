import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './Navbar.module.scss';

export interface INavbarProps {
  className?: string;
}

export const Navbar: React.FC<INavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.link} theme={AppLinkTheme.SECONDARY}>
          {t('navbar.home')}
        </AppLink>
        <AppLink to={'/about'} className={cls.link} theme={AppLinkTheme.SECONDARY}>
          {t('navbar.about')}
        </AppLink>
      </div>
    </div>
  );
};
