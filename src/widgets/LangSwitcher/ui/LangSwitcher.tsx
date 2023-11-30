import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';

interface ILangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<ILangSwitcherProps> = props => {
  const { className, short } = props;
  const { i18n, t } = useTranslation('common');

  const handleToggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={handleToggleLang} className={classNames('', {}, [className])} theme={ButtonTheme.CLEAR}>
      {t(short ? 'short-lang' : 'lang')}
    </Button>
  );
};
