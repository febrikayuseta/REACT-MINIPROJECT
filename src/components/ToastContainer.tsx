'use client';

import React from 'react';
import { useToast } from '../context/ToastContext';

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`
            px-4 py-3 rounded-lg shadow-lg text-white animate-in fade-in slide-in-from-top-4
            flex items-center gap-2 animate-bounce-in
            ${
              toast.type === 'success'
                ? 'bg-green-500'
                : toast.type === 'error'
                ? 'bg-red-500'
                : 'bg-blue-500'
            }
          `}
        >
          {toast.type === 'success' && (
            <span className="text-xl">✓</span>
          )}
          {toast.type === 'error' && (
            <span className="text-xl">✕</span>
          )}
          {toast.type === 'info' && (
            <span className="text-xl">ℹ</span>
          )}
          <span>{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="ml-2 hover:opacity-80"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
