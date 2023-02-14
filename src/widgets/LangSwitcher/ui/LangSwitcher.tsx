import { classNames } from 'shared/lib/classNames';

import { Button, ThemeButton } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

export interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={ThemeButton.CLEAR} className={classNames('', {}, [className])} onClick={changeLanguage}>
      {t('lang')}
    </Button>
  );
};
