import { FC, useState } from 'react';

import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import { classNames } from 'shared/lib/classNames';

import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = props => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div data-testid="sidebar" className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button data-testid="sidebar-toggle" onClick={handleToggleSidebar}>
        toggle
      </button>
      <div className={cls.switchers}>
        <LangSwitcher className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
};
