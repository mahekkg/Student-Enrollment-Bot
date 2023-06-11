import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">Congratulations</h2>
        <p className="text-xl  mb-4 text-center">You are enrolled!</p>
      </div>
    </div>
  );
};

export default Page3;
