import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Branch Name Generator', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('renders the main title', () => {
    expect(screen.getByText('Branch Name Generator')).toBeInTheDocument();
  });

  it('generates feature branch name correctly', async () => {
    const descriptionInput = screen.getByPlaceholderText('Brief description of the branch');
    await userEvent.type(descriptionInput, 'add login page');
    
    const generatedBranch = screen.getByRole('textbox', { name: /generated branch name/i });
    expect(generatedBranch).toHaveValue('feature/add-login-page');
  });

  it('generates branch name with ticket number', async () => {
    const ticketInput = screen.getByPlaceholderText('e.g., JIRA-123');
    const descriptionInput = screen.getByPlaceholderText('Brief description of the branch');
    
    await userEvent.type(ticketInput, 'JIRA-456');
    await userEvent.type(descriptionInput, 'add signup form');
    
    const generatedBranch = screen.getByRole('textbox', { name: /generated branch name/i });
    expect(generatedBranch).toHaveValue('feature/JIRA-456-add-signup-form');
  });

  it('handles custom branch type correctly', async () => {
    const branchTypeSelect = screen.getByRole('combobox');
    await userEvent.selectOptions(branchTypeSelect, 'custom');
    
    const customPrefixInput = screen.getByPlaceholderText('Enter custom prefix');
    const descriptionInput = screen.getByPlaceholderText('Brief description of the branch');
    
    await userEvent.type(customPrefixInput, 'test');
    await userEvent.type(descriptionInput, 'integration tests');
    
    const generatedBranch = screen.getByRole('textbox', { name: /generated branch name/i });
    expect(generatedBranch).toHaveValue('test/integration-tests');
  });

  it('sanitizes branch names correctly', async () => {
    const descriptionInput = screen.getByPlaceholderText('Brief description of the branch');
    await userEvent.type(descriptionInput, 'Add User Authentication!!!');
    
    const generatedBranch = screen.getByRole('textbox', { name: /generated branch name/i });
    expect(generatedBranch).toHaveValue('feature/add-user-authentication');
  });

  it('copies branch name to clipboard', async () => {
    const mockClipboard = {
      writeText: vi.fn().mockResolvedValue(undefined)
    };
    Object.assign(navigator, { clipboard: mockClipboard });

    const descriptionInput = screen.getByPlaceholderText('Brief description of the branch');
    await userEvent.type(descriptionInput, 'test feature');
    
    const copyButton = screen.getByTitle('Copy to clipboard');
    await userEvent.click(copyButton);
    
    expect(mockClipboard.writeText).toHaveBeenCalledWith('feature/test-feature');
    expect(screen.getByText('Copied to clipboard!')).toBeInTheDocument();
  });

  it('resets form correctly', async () => {
    const descriptionInput = screen.getByPlaceholderText('Brief description of the branch');
    const ticketInput = screen.getByPlaceholderText('e.g., JIRA-123');
    
    await userEvent.type(descriptionInput, 'test feature');
    await userEvent.type(ticketInput, 'JIRA-789');
    
    const resetButton = screen.getByTitle('Reset form');
    await userEvent.click(resetButton);
    
    expect(descriptionInput).toHaveValue('');
    expect(ticketInput).toHaveValue('');
    expect(screen.getByRole('combobox')).toHaveValue('feature');
  });

  it('shows error message when clipboard copy fails', async () => {
    const mockClipboard = {
      writeText: vi.fn().mockRejectedValue(new Error('Clipboard error'))
    };
    Object.assign(navigator, { clipboard: mockClipboard });

    const descriptionInput = screen.getByPlaceholderText('Brief description of the branch');
    await userEvent.type(descriptionInput, 'test feature');
    
    const copyButton = screen.getByTitle('Copy to clipboard');
    await userEvent.click(copyButton);
    
    expect(screen.getByText('Failed to copy to clipboard')).toBeInTheDocument();
  });
});
