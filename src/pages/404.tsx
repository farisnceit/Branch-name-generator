import React from 'react';
import { GitBranch, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white p-4 sm:p-6 antialiased">
      <div className="max-w-lg mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <GitBranch className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
            404 - Branch Not Found
          </h1>
        </div>
        
        <p className="text-slate-700 dark:text-slate-300 mb-8">
          Oops! Looks like you've wandered into an untracked branch. Let's get you back to the main branch.
        </p>

        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
        >
          <Home className="w-5 h-5" />
          Return Home
        </Link>
      </div>
    </div>
  );
};
