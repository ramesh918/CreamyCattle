// src/Managers.tsx
import React from 'react';
import { useSelector } from 'react-redux';


const Managers: React.FC = () => {
  const token = useSelector((state: any) => state.auth.token);
  return (
    <div>
      <h1>Managers Page</h1>
      {/* Add content for Managers page */}
    </div>
  );
};

export default Managers;
