import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button';

import cls from './LangSwitcher.module.scss';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = props => {
  const { className } = props;
  const { i18n, t } = useTranslation('common');

  const handleToggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={handleToggleLang} className={classNames(cls.langSwitcher, {}, [className])}>
      {t('lang')}
    </Button>
  );
};
