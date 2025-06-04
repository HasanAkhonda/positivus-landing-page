// Accordion.tsx
'use client';

import React, { useState } from 'react';
import AccordionItem from './AccordionItem';

export interface AccordionContentItem {
  index: number;
  title: string;
  description: string;
}

interface AccordionProps {
  data: AccordionContentItem[];
}

const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="mt-[60px]">
      {data.map(item => (
        <AccordionItem
          key={item.index}
          index={item.index}
          title={item.title}
          description={item.description}
          isOpen={openIndex === item.index}
          onClick={() => toggleItem(item.index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
