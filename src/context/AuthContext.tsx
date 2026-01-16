'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  isLoggedIn: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple in-memory user database for demo
const DEMO_USERS: Record<string, { password: string; user: User }> = {
  'eve.holt@reqres.in': {
    password: 'cityslicka',
    user: {
      id: 1,
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=eve.holt@reqres.in',
    },
  },
  'charles.morris@reqres.in': {
    password: 'password123',
    user: {
      id: 2,
      email: 'charles.morris@reqres.in',
      first_name: 'Charles',
      last_name: 'Morris',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=charles.morris@reqres.in',
    },
  },
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUser = localStorage.getItem('authUser');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      // Check if user exists in demo users
      const demoUser = DEMO_USERS[email];
      
      if (!demoUser || demoUser.password !== password) {
        throw new Error('Email atau password salah');
      }

      const userData = demoUser.user;
      const token = `token_${Math.random().toString(36).substr(2, 9)}`;

      setToken(token);
      setUser(userData);
      localStorage.setItem('authToken', token);
      localStorage.setItem('authUser', JSON.stringify(userData));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));

      if (!email || !password) {
        throw new Error('Email dan password harus diisi');
      }

      if (DEMO_USERS[email]) {
        throw new Error('Email sudah terdaftar');
      }

      // Create new user
      const newUser: User = {
        id: Math.floor(Math.random() * 1000),
        email: email,
        first_name: email.split('@')[0].split('.')[0],
        last_name: email.split('@')[0].split('.')[1] || 'User',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
      };

      const token = `token_${Math.random().toString(36).substr(2, 9)}`;

      // Save to demo users for this session
      DEMO_USERS[email] = { password, user: newUser };

      setToken(token);
      setUser(newUser);
      localStorage.setItem('authToken', token);
      localStorage.setItem('authUser', JSON.stringify(newUser));
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isLoggedIn: !!token,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
