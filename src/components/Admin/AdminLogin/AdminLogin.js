import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const TeacherAdminStudent = () => {
  const [tab, setTab] = useState('teacher');

  // Determine the title based on the selected tab
  const getTitle = () => {
    switch (tab) {
      case 'teacher':
        return 'Welcome Teacher Portal';
      case 'admin':
        return 'Welcome Admin Portal';
      case 'student':
        return 'Welcome Student Portal';
      default:
        return 'Welcome Our Portal';
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-400 via-green-500 to-blue-200">
      <div className="w-full max-w-xl"> {/* Increase the width here */}
        <div className="max-w-md mx-auto overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-2xl hover:scale-105">
          <div className="py-8 text-center text-black bg-gradient-to-r from-blue-500 to-purple-600"> {/* Increase the padding here */}
            <h1 className="text-3xl font-bold">
              {getTitle()}
            </h1>
          </div>
          <div className="p-10"> {/* Increase the padding here */}
            <div className="flex justify-center mb-6 space-x-2">
              <button
                onClick={() => setTab('teacher')}
                className={`px-8 rounded-l-md focus:outline-none transition-colors duration-300 ${
                  tab === 'teacher' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Teacher
              </button>
              <button
                onClick={() => setTab('admin')}
                className={`px-8 py-3 focus:outline-none transition-colors duration-300 ${
                  tab === 'admin' ? 'bg-blue-500 text-black' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Admin
              </button>
              <button
                onClick={() => setTab('student')}
                className={`px-8 rounded-md focus:outline-none transition-colors duration-300 ${
                  tab === 'student' ? 'bg-blue-300 text-black' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Student
              </button>
            </div>
            {tab === 'teacher' && (
              <form className="space-y-5">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Email"
                  />
                  <FaEnvelope className="absolute text-gray-400 left-1 top-3.5" />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Password"
                  />
                  <FaLock className="absolute text-gray-400 left-1 top-3" />
                </div>
                <button className="w-full py-3 text-black transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Login as Teacher
                </button>
              </form>
            )}
            {tab === 'admin' && (
              <form className="space-y-4 text-black">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2  pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Email"
                  />
                  <FaEnvelope className="absolute text-gray-400 left-1 top-3.5" />
                </div>
                <div className="relative text-black">
                  <input
                    type="password"
                    className="w-full px-4 py-2 pl-10 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Password"
                  />
                  <FaLock className="absolute text-gray-400 left-1 top-3" />
                </div>
                <NavLink to={"/admin-dashboard"}>
                <button className="w-full py-3 text-black mt-6 transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Login as Admin
                </button>
                </NavLink>
              </form>
            )}
            {tab === 'student' && (
              <form className="space-y-4 text-black">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Email"
                  />
                  <FaEnvelope className="absolute text-gray-400 left-1 top-3.5" />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Password"
                  />
                  <FaLock className="absolute text-gray-400 left-1 top-3" />
                </div>
                <NavLink to={"/student-result"}>
                <button className="w-full py-3 text-black transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Login as Student
                </button>
                </NavLink>
              </form>
            )}
            <div className="mt-8">
              <p className="mb-4 text-center text-gray-600">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <button className="px-6 py-3 text-black transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
                  Facebook
                </button>
                <button className="px-6 py-3 text-black transition-colors duration-300 bg-red-600 rounded-md hover:bg-red-700">
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAdminStudent;
