import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal';

import cls from './Navbar.module.scss';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = props => {
  const { className } = props;
  const { t } = useTranslation('common');

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleToggleAuthModal = () => {
    setIsAuthModalOpen(prev => !prev);
  };

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR_INVERTED} className={cls.links} onClick={handleToggleAuthModal}>
        {t('log-in')}
      </Button>

      <Modal isOpen={isAuthModalOpen} onClose={handleToggleAuthModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, fuga accusantium id cupiditate temporibus
        voluptates vel possimus blanditiis unde? Exercitationem!
      </Modal>
    </div>
  );
};
