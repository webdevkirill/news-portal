import { useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

export interface ISidebarProps {
  className?: string;
}

export const Sidebar: React.FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  // Handlers
  const handleToggleCollapse = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      {/* TODO: убрать потом отключение eslint */}
      {/* eslint-disable-next-line */}
      <button onClick={handleToggleCollapse}>Toggle</button>

      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lanSwitcher} />
      </div>
    </div>
  );
};
