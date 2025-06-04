import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className="px-5 flex justify-center overflow-hidden lg:block">
      <div className="w-full max-w-[1280px] mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
