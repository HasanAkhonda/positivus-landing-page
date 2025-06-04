import React from 'react';

interface SectionTitleProps {
  sectionTitle: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ sectionTitle, description }) => {
  return (
    <div className="flex flex-col items-center font-[Grotesk] gap-10 mb-20 sm:flex-row">
      <h2 className="greenhead text-center sm:text-left text-3xl sm:text-4xl">{sectionTitle}</h2>
      <p className="w-auto text-center sm:text-left sm:w-[580px]">{description}</p>
    </div>
  );
};

export default SectionTitle;
