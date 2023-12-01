import { FC, MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';

import { classNames } from 'shared/lib/classNames';
import { Portal } from 'shared/ui/Portal';

import cls from './Modal.module.scss';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

const ANIMATION_DELAY = 300;

export const Modal: FC<IModalProps> = props => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const { theme } = useTheme();

  const Mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const handleClose = useCallback(() => {
    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, ANIMATION_DELAY);
  }, [onClose]);

  const handleContentClick = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.modal, Mods, [className, cls[theme]])}>
        <div className={cls.overlay} onClick={handleClose}>
          <div className={cls.content} onClick={handleContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
