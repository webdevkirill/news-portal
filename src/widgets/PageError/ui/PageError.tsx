import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import cls from './PageError.module.scss';

interface IPageErrorProps {
  className?: string;
}

export const PageError: FC<IPageErrorProps> = props => {
  const { className } = props;
  const { t } = useTranslation('common');

  const handleReloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>{t('page-error')}</p>
      <Button onClick={handleReloadPage}>{t('buttons.reload-page')}</Button>
    </div>
  );
};
