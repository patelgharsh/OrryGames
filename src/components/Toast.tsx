import { useEffect, useState } from 'react';
import { CheckCircle, Moon, Sun, X } from 'lucide-react';

interface ToastProps {
  message: string;
  type?: 'success' | 'info' | 'theme-light' | 'theme-dark';
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, type = 'success', duration = 2000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    'success': <CheckCircle className="w-5 h-5" />,
    'info': <CheckCircle className="w-5 h-5" />,
    'theme-light': <Sun className="w-5 h-5" />,
    'theme-dark': <Moon className="w-5 h-5" />
  };

  const colors = {
    'success': 'bg-green-500 dark:bg-green-600',
    'info': 'bg-blue-500 dark:bg-blue-600',
    'theme-light': 'bg-gradient-to-r from-orange-500 to-yellow-500',
    'theme-dark': 'bg-gradient-to-r from-gray-700 to-gray-900'
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className={`${colors[type]} text-white rounded-xl shadow-2xl px-4 py-3 flex items-center space-x-3 min-w-[280px] animate-scale-in`}>
        {icons[type]}
        <span className="font-bold flex-1">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
