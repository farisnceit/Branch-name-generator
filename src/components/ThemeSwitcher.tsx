import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

type Theme = 'light' | 'dark';

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    return savedTheme || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-slate-800/50 dark:bg-slate-700/50 backdrop-blur-sm border border-slate-700/50 dark:border-slate-600/50 hover:bg-slate-700/50 dark:hover:bg-slate-600/50 transition-all duration-200 group"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
      ) : (
        <Moon className="w-5 h-5 text-slate-400 group-hover:-rotate-90 transition-transform duration-500" />
      )}
    </button>
  );
};
