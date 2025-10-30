import React from 'react';

interface CardProps {
  // Add your card props here
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="rounded-lg shadow-md p-4 bg-white">
      {children}
    </div>
  );
};

export default Card;