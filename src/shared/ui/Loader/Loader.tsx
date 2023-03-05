import { classNames } from 'shared/lib/classNames';

import './Loader.scss';

export interface ILoaderProps {
  className?: string;
}

export const Loader: React.FC<ILoaderProps> = props => {
  const { className } = props;

  return (
    <div className={classNames('loadingio-spinner-spin-amr7r77ar3a', {}, [className])}>
      <div className="ldio-cvg94amd9eu">
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
