import React from 'react';
import { GitBranch } from 'lucide-react';
import { BranchNameForm } from './components/BranchNameForm';
import { BestPractices } from './components/BestPractices';
import { BranchTypes } from './components/BranchTypes';
import { ThemeSwitcher } from './components/ThemeSwitcher';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white p-4 sm:p-6 antialiased transition-colors duration-200">
      <ThemeSwitcher />
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="p-3 bg-emerald-500/10 rounded-xl">
            <GitBranch className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
          </div>
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400">
            Branch Name Generator
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <BranchNameForm />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BestPractices />
            <BranchTypes />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;