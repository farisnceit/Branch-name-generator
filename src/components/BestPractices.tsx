import React from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';

interface BestPracticesProps {
  className?: string;
}

export const BestPractices: React.FC<BestPracticesProps> = ({ className = '' }) => {
  const dosList = [
    'Use lowercase letters, numbers, and hyphens',
    'Start with a category (feature/, bugfix/, etc.)',
    'Include ticket number when applicable',
    'Keep it concise but descriptive',
    'Use hyphens to separate words',
  ];

  const dontsList = [
    'Use spaces or underscores',
    'Include special characters',
    'Make it too long (max 50 chars)',
    'Use uppercase letters',
    'Include sensitive information',
  ];

  return (
    <div className={`bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 ${className}`}>
      <h2 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-6">
        Best Practices for Git Branch Names
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-emerald-400 font-medium mb-3">
            <CheckCircle2 className="w-5 h-5" />
            Do's
          </h3>
          <ul className="space-y-3">
            {dosList.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-amber-400 font-medium mb-3">
            <AlertTriangle className="w-5 h-5" />
            Don'ts
          </h3>
          <ul className="space-y-3">
            {dontsList.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-slate-300">
                <span className="mt-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0"></span>
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
