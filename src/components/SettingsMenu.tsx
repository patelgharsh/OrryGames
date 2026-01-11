import { Settings, Zap, ZapOff } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { animationsEnabled, toggleAnimations } = useTheme();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 transition-colors backdrop-blur-sm border border-white/30 dark:border-gray-700"
        aria-label="Settings"
      >
        <Settings className="w-5 h-5 text-white dark:text-gray-300" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 animate-scale-in">
            <div className="p-4">
              <h3 className="text-lg font-black text-gray-800 dark:text-white mb-4">
                Settings
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {animationsEnabled ? (
                      <Zap className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ZapOff className="w-5 h-5 text-gray-400" />
                    )}
                    <div>
                      <p className="font-bold text-sm text-gray-800 dark:text-white">
                        Animations
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {animationsEnabled ? 'Enabled' : 'Disabled'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={toggleAnimations}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      animationsEnabled
                        ? 'bg-orange-500'
                        : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        animationsEnabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    Disable animations to improve performance or reduce motion effects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
