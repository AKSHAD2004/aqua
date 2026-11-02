import React, { useEffect } from 'react';

export const Toast = ({ message, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="bg-primary text-on-primary px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-secondary/40 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-primary flex-shrink-0">
          <span className="material-symbols-outlined text-[18px]">check_circle</span>
        </div>
        <p className="font-label-md text-label-md text-white text-sm max-w-sm">{message}</p>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>
      </div>
    </div>
  );
};
