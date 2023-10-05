import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<ILangSwitcherProps> = props => {
  const { className } = props;
  const { i18n, t } = useTranslation('common');

  const handleToggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={handleToggleLang} className={classNames('', {}, [className])}>
      {t('lang')}
    </Button>
  );
};
