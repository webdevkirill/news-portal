import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';

import cls from './PageLoader.module.scss';

export interface IPageLoaderProps {
  className?: string;
}

export const PageLoader: React.FC<IPageLoaderProps> = props => {
  const { className } = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};
