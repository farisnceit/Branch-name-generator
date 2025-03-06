import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface BestPracticesProps {
  className?: string;
}

export const BestPractices: React.FC<BestPracticesProps> = ({ className = '' }) => {
  const dosList = [
    'Use lowercase letters',
    'Use hyphens as separators',
    'Start with a category (e.g., feature)',
    'Include ticket number if applicable',
    'Keep it concise but descriptive',
  ];

  const dontsList = [
    'Use uppercase letters',
    'Use spaces or underscores',
    'Include unnecessary details',
    'Make it too long',
    'Use special characters',
  ];

  return (
    <div className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 ring-1 ring-slate-700/5 ${className}`}>
      <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Best Practices for Git Branch Names</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium mb-3">
            <CheckCircle2 className="w-5 h-5" />
            Do's
          </h3>
          <ul className="space-y-2">
            {dosList.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-red-600 dark:text-red-400 font-medium mb-3">
            <XCircle className="w-5 h-5" />
            Don'ts
          </h3>
          <ul className="space-y-2">
            {dontsList.map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 bg-red-500 dark:bg-red-400 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
        <h3 className="text-lg font-medium text-emerald-400 mb-3">Examples</h3>
        <div className="space-y-2 font-mono text-sm">
          <div className="text-emerald-400">✓ feature/user-authentication</div>
          <div className="text-emerald-400">✓ bugfix/JIRA-123-fix-login-error</div>
          <div className="text-emerald-400">✓ hotfix/security-patch-2024</div>
          <div className="text-red-400">✗ Feature_New_Login_Page</div>
          <div className="text-red-400">✗ fix/bug#123/login!error</div>
        </div>
      </div>
    </div>
  );
};
