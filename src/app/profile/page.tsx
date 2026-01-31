'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import Link from 'next/link';

interface UserData {
  data: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  support: {
    url: string;
    text: string;
  };
}

export default function ProfilePage() {
  const { user, logout, isLoggedIn, loading } = useAuth();
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  const [users, setUsers] = useState<UserData | null>(null);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const getUsers = () => {
    fetch("https://reqres.in/api/users/2", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres_78a869f591654962800d3a55978d5b34",
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

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

  if (!users) {
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
          <h1 className="text-2xl font-bold text-gray-800">My Profile {users?.data?.first_name} {users?.data?.last_name}</h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 pb-6">
            {/* User Info */}
            <div className="text-center mb-8 pt-6 bg-linear-to-r from-pink-500 to-pink-600 h-32">
              <h2 className="text-3xl font-bold text-white">
                {users?.data?.first_name} {users?.data?.last_name}
              </h2>
              <p className="text-white mt-2">{users?.data?.email}</p>
            </div>

            {/* Account Info */}
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Account Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-800">{users?.data?.email}</span>
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
