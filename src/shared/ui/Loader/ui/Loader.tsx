import { FC } from 'react';

import { classNames } from 'shared/lib/classNames';

import './Loader.scss';

interface ILoaderProps {
  className?: string;
}

export const Loader: FC<ILoaderProps> = props => {
  const { className } = props;

  return (
    <div className={classNames('loadingio-spinner-rolling-v7tepglob3m', {}, [className])}>
      <div className="ldio-d5beqwftl9a">
        <div />
      </div>
    </div>
  );
};
