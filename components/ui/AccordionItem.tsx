'use client';

import React, { useRef, useEffect, useState } from 'react';

interface AccordionItemProps {
  index: number;
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  index,
  title,
  description,
  isOpen,
  onClick
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<string>('160px');

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${160 + contentRef.current.scrollHeight}px`);
    } else {
      setHeight('160px');
    }
  }, [isOpen]);

  return (
    <div
      className={`accordion__item group w-full overflow-hidden transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] ${
        isOpen ? 'bg-green' : 'bg-[#F3F3F3]'
      }`}
      style={{ height }}
    >
      <button
        className="accordion__toggle w-full h-[160px] flex items-center justify-between p-[60px] cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`${title}-accordion-content`}
        onClick={onClick}
      >
        <div className="flex items-center gap-[25px]">
          <span className="hidden sm:block sm:text-6xl text-black">0{index}</span>
          <span className="text-xl sm:text-2xl font-semibold text-black">{title}</span>
        </div>
        <div className="bg-gray w-[58px] h-[58px] flex justify-center items-center rounded-full border border-dark">
          <div
            className={`accordion__icon h-10 w-10 flex justify-center items-center relative transition-transform duration-300 ${
              isOpen ? 'collapsed rotate-180' : ''
            }`}
            aria-hidden="true"
          ></div>
        </div>
      </button>

      <div
        ref={contentRef}
        id={`${title}-accordion-content`}
        className="accordion__content px-[60px]"
      >
        <div className="w-full h-[2px] bg-black" />
        <p className="prose text-black mb-4 mt-1 max-w-full pt-5 pb-[60px] text-base">
          {description}
        </p>
      </div>

      <style jsx>{`
        .accordion__icon::before,
        .accordion__icon::after {
          content: '';
          position: absolute;
          background-color: black;
          transition: opacity 0.3s ease;
        }

        .accordion__icon::before {
          width: 100%;
          height: 6px;
          left: 0;
          top: calc(50% - 3px);
        }

        .accordion__icon::after {
          width: 6px;
          height: 100%;
          left: calc(50% - 3px);
          top: 0;
        }

        .accordion__icon.collapsed::after {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default AccordionItem;

