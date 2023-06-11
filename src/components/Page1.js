import React from 'react';
import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-sky-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Enter into Student Information System</h1>
      <Link
        to="/chatbot"
        className="py-2 px-4 bg-sky-700 text-white rounded-md shadow-md hover:bg-sky-800 transition-colors duration-300 ease-in-out"
      >
        Enroll Now!
      </Link>
    </div>
  );
}
