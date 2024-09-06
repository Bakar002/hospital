import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-green-500 to-blue-200">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto overflow-hidden transition-transform duration-300 transform bg-white rounded-lg shadow-2xl hover:scale-105">
          <div className="py-6 text-center text-white bg-gradient-to-r from-blue-500 to-purple-600">
            <h1 className="text-3xl font-bold">
              {getTitle()}
            </h1>
          </div>
          <div className="p-8">
            <div className="flex justify-center mb-6 space-x-2">
              <button
                onClick={() => setTab('teacher')}
                className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${
                  tab === 'teacher' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Teacher
              </button>
              <button
                onClick={() => setTab('admin')}
                className={`px-4 py-2 focus:outline-none transition-colors duration-300 ${
                  tab === 'admin' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
              >
                Admin
              </button>
              <button
                onClick={() => setTab('student')}
                className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${
                  tab === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
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
                  <FaEnvelope className="absolute text-gray-400 left-2 top-3" />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Password"
                  />
                  <FaLock className="absolute text-gray-400 left-1 top-3" />
                </div>
                <button className="w-full py-2 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Login as Teacher
                </button>
              </form>
            )}
            {tab === 'admin' && (
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Email"
                  />
                  <FaEnvelope className="absolute text-gray-400 left-2 top-3" />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Password"
                  />
                  <FaLock className="absolute text-gray-400 left-1 top-3" />
                </div>
                <button className="w-full py-2 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Login as Admin
                </button>
              </form>
            )}
            {tab === 'student' && (
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Email"
                  />
                  <FaEnvelope className="absolute text-gray-400 left-1 top-3" />
                </div>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter Password"
                  />
                  <FaLock className="absolute text-gray-400 left-1 top-3" />
                </div>
                <button className="w-full py-2 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 hover:scale-105">
                  Login as Student
                </button>
              </form>
            )}
            <div className="mt-6">
              <p className="mb-4 text-center text-gray-600">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <button className="px-4 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
                  Facebook
                </button>
                <button className="px-4 py-2 text-white transition-colors duration-300 bg-red-600 rounded-md hover:bg-red-700">
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