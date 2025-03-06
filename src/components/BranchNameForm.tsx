import React, { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';

type BranchType = 'feature' | 'bugfix' | 'hotfix' | 'release' | 'custom';

interface BranchNameFormProps {
  className?: string;
}

export const BranchNameForm: React.FC<BranchNameFormProps> = ({ className = '' }) => {
  const [branchType, setBranchType] = useState<BranchType>('feature');
  const [ticketNumber, setTicketNumber] = useState('');
  const [description, setDescription] = useState('');
  const [customPrefix, setCustomPrefix] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const generateBranchName = () => {
    let prefix = branchType;
    if (branchType === 'custom' && customPrefix) {
      prefix = customPrefix.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    }

    const sanitizedDescription = description
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');

    const ticketPart = ticketNumber ? `${ticketNumber}-` : '';
    
    if (!sanitizedDescription) {
      return '';
    }

    return `${prefix}/${ticketPart}${sanitizedDescription}`;
  };

  const branchName = generateBranchName();

  const copyToClipboard = async () => {
    if (!branchName) return;
    
    try {
      await navigator.clipboard.writeText(branchName);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy to clipboard');
      setTimeout(() => setError(''), 2000);
    }
  };

  const resetForm = () => {
    setBranchType('feature');
    setTicketNumber('');
    setDescription('');
    setCustomPrefix('');
    setError('');
  };

  return (
    <div className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-700/50 ring-1 ring-slate-700/5 ${className}`}>
      <div className="space-y-6">
        <div className="group">
          <label className="block text-sm font-medium mb-2 text-slate-200">Branch Type</label>
          <select
            value={branchType}
            onChange={(e) => setBranchType(e.target.value as BranchType)}
            className="w-full bg-slate-700/50 rounded-xl border-slate-600 text-white px-4 py-2.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200"
          >
            <option value="feature">Feature</option>
            <option value="bugfix">Bugfix</option>
            <option value="hotfix">Hotfix</option>
            <option value="release">Release</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        {branchType === 'custom' && (
          <div className="animate-fadeIn">
            <label className="block text-sm font-medium mb-2 text-slate-200">Custom Prefix</label>
            <input
              type="text"
              value={customPrefix}
              onChange={(e) => setCustomPrefix(e.target.value)}
              placeholder="Enter custom prefix"
              className="w-full bg-slate-700/50 rounded-xl border-slate-600 text-white px-4 py-2.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200 placeholder:text-slate-400"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">Ticket Number <span className="text-slate-400">(Optional)</span></label>
          <input
            type="text"
            value={ticketNumber}
            onChange={(e) => setTicketNumber(e.target.value)}
            placeholder="e.g., JIRA-123"
            className="w-full bg-slate-700/50 rounded-xl border-slate-600 text-white px-4 py-2.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200 placeholder:text-slate-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-slate-200">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Brief description of the branch"
            className="w-full bg-slate-700/50 rounded-xl border-slate-600 text-white px-4 py-2.5 focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-200 placeholder:text-slate-400"
          />
        </div>

        <div className="pt-4">
          <label className="block text-sm font-medium mb-2 text-slate-200">Generated Branch Name:</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={branchName}
              readOnly
              className="w-full bg-slate-900/50 rounded-xl border-slate-600 text-emerald-400 px-4 py-2.5 font-mono"
            />
            <button
              onClick={copyToClipboard}
              disabled={!branchName}
              className="px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-95"
              title="Copy to clipboard"
            >
              <Copy className="w-5 h-5" />
            </button>
            <button
              onClick={resetForm}
              className="px-4 py-2.5 bg-slate-600 text-white rounded-xl hover:bg-slate-700 transition-all duration-200 hover:shadow-lg hover:shadow-slate-500/20 active:scale-95"
              title="Reset form"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
        </div>

        {copied && (
          <div className="text-sm text-emerald-400 mt-2 flex items-center gap-2 animate-fadeIn">
            <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full"></span>
            Copied to clipboard!
          </div>
        )}
        
        {error && (
          <div className="text-sm text-red-400 mt-2 flex items-center gap-2 animate-fadeIn">
            <span className="inline-block w-2 h-2 bg-red-400 rounded-full"></span>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};
