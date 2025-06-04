import React from 'react';

interface CardProps {
  isUnderline?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ isUnderline, children }) => {
  return (
    <div
      className={`${
        isUnderline
          ? 'rounded-[45px] border border-dark mb-2  shadow-[0px_5px_0px_#191a23]'
          : 'rounded-[45px]'
      }`}
    >
      {children}
    </div>
  );
};

export default Card;
