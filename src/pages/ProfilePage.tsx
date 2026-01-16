'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, logout, isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated && !isLoggedIn && !loading) {
      router.push('/login');
    }
  }, [isLoggedIn, loading, hydrated, router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (!hydrated || loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-gray-600">Redirecting...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-4xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 h-32"></div>

          <div className="px-6 pb-6">
            {/* Avatar */}
            <div className="flex flex-col items-center -mt-20 mb-4">
              <img
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>

            {/* User Info */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-gray-600 mt-2">{user.email}</p>
            </div>

            {/* User Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm font-semibold">User ID</p>
                <p className="text-2xl font-bold text-pink-600 mt-2">{user.id}</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm font-semibold">First Name</p>
                <p className="text-2xl font-bold text-pink-600 mt-2">{user.first_name}</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="text-gray-600 text-sm font-semibold">Last Name</p>
                <p className="text-2xl font-bold text-pink-600 mt-2">{user.last_name}</p>
              </div>
            </div>

            {/* Account Info */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Account Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-800">{user.email}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Member Since:</span>
                  <span className="font-semibold text-gray-800">2024</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Status:</span>
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                Edit Profile
              </button>
              <button className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition font-semibold">
                Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold shadow"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
