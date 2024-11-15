// Modal.tsx
import React, { useEffect, useMemo } from "react";

type Props = {
  onClose: () => void;
  open: boolean;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  align?: 'top' | 'center' | 'left' | 'right';
  isDarkMode?: boolean;
};

const Modal = ({ onClose, open, children, className, style, align = 'center', isDarkMode = false }: Props) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation(); // Prevent closing when clicking inside the modal content
  };

  const getPositionStyles = useMemo(() => {
    switch (align) {
      case 'top':
        return 'justify-center items-start';
      case 'center':
        return 'justify-center items-center';
      case 'left':
        return 'justify-start items-center';
      case 'right':
        return 'justify-end items-center';
      default:
        return 'justify-center items-center';
    }
  }, [align]);

  return (
    <>
      {open && (
        <div
          className={`fixed inset-0 z-20 flex ${getPositionStyles} bg-black/20 backdrop-blur-0 transition-opacity duration-300`}
          onClick={onClose} // Close the modal when clicking the overlay
          aria-modal="true"
          role="dialog"
        >
          <div
            className={`rounded-3xl h-auto ${className || 'w-[60%]'} transition-transform duration-300 ${isDarkMode ? 'bg-[#151414]' : 'bg-white'}`}
            onClick={handleModalClick} // Prevents close when clicking inside the modal
            style={style}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
