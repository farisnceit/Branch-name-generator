import React from 'react';
import { GitBranch } from 'lucide-react';

interface BranchTypesProps {
  className?: string;
}

export const BranchTypes: React.FC<BranchTypesProps> = ({ className = '' }) => {
  const branchTypes = [
    {
      type: 'feature/*',
      description: 'For new features and enhancements',
      example: 'feature/user-authentication',
    },
    {
      type: 'bugfix/*',
      description: 'For bug fixes',
      example: 'bugfix/login-validation',
    },
    {
      type: 'hotfix/*',
      description: 'For urgent production fixes',
      example: 'hotfix/security-patch',
    },
    {
      type: 'release/*',
      description: 'For release branches',
      example: 'release/v1.2.0',
    },
    {
      type: 'custom/*',
      description: 'For custom branch types',
      example: 'docs/api-documentation',
    },
  ];

  return (
    <div className={`bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 ring-1 ring-slate-700/5 ${className}`}>
      <h2 className="text-xl font-semibold mb-6 text-slate-900 dark:text-white">Branch Types Guide</h2>
      
      <div className="space-y-4">
        {branchTypes.map((branch, index) => (
          <div key={index} className="group">
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
              <h3 className="font-mono text-emerald-600 dark:text-emerald-400">{branch.type}</h3>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-sm mb-1">{branch.description}</p>
            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">Example: {branch.example}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border border-slate-600/30">
        <h3 className="text-lg font-medium text-emerald-400 mb-3">Pro Tips</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
            Use feature branches for new development
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
            Hotfix branches should be created from main/master
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></span>
            Release branches help manage deployment cycles
          </li>
        </ul>
      </div>
    </div>
  );
};
