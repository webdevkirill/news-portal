import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import AboutPageIcon from 'shared/assets/icons/about-page.svg';
import MainPageIcon from 'shared/assets/icons/main-page.svg';
import { RoutePath } from 'shared/config/routerConfig';
import { classNames } from 'shared/lib/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';

import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = props => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation('common');

  const handleToggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <div className={cls.items}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main} className={cls.item}>
          <MainPageIcon className={cls.icon} />
          <span className={cls.link}>{t('pages.main')}</span>
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about} className={cls.item}>
          <AboutPageIcon className={cls.icon} />
          <span className={cls.link}>{t('pages.about')}</span>
        </AppLink>
      </div>
      <Button
        square
        size={ButtonSize.L}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        data-testid="sidebar-toggle"
        onClick={handleToggleSidebar}
        className={cls.collapseBtn}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.switchers}>
        <LangSwitcher className={cls.lang} short={collapsed} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
