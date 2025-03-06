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
      example: 'feature/user-dashboard'
    },
    {
      type: 'bugfix/*',
      description: 'For fixing non-critical bugs',
      example: 'bugfix/form-validation'
    },
    {
      type: 'hotfix/*',
      description: 'For critical bug fixes in production',
      example: 'hotfix/security-patch'
    },
    {
      type: 'release/*',
      description: 'For release branches',
      example: 'release/v1.2.0'
    },
    {
      type: 'custom/*',
      description: 'For custom branch types',
      example: 'docs/update-readme'
    }
  ];

  return (
    <div className={`bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 ${className}`}>
      <h2 className="text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-6">
        Branch Types Guide
      </h2>
      
      <div className="grid gap-4">
        {branchTypes.map((branch, index) => (
          <div 
            key={index}
            className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-emerald-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <GitBranch className="w-5 h-5 text-emerald-400" />
              <code className="text-emerald-400 font-mono">{branch.type}</code>
            </div>
            <p className="text-slate-300 text-sm mb-2">{branch.description}</p>
            <div className="text-slate-400 text-sm font-mono">
              Example: {branch.example}
            </div>
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
