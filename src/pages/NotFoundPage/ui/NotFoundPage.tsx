import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import cls from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation('notFound');

  return <div className={classNames(cls.NotFoundPage, {}, [className])}>{t('pageTitle')}</div>;
};

export default NotFoundPage;
