'use client';
import React from 'react';
import Image from 'next/image';
import larrow from '@/assets/icon3.svg';

interface CaseCardProps {
  title: string;
  link: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, link }) => {
  return (
    <div className="flex p-[60px] h-full rounded-[45px] m-[1px]">
      <div className="flex flex-col gap-5">
        <p>{title}</p>
        <a
          href={link}
          className="flex items-center gap-[15px]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-green">Case Info</span>
          <Image src={larrow} alt="Arrow icon" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default CaseCard;
