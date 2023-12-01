import { FC } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
  element?: HTMLElement;
}

export const Portal: FC<IPortalProps> = props => {
  const { element = document.body, children } = props;

  // @ts-ignore-next-line
  return createPortal(children, element);
};
