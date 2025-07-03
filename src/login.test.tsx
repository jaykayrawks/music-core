import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Login from './Login';
import { describe, it, expect } from 'vitest';

describe('Select Component', () => {
  it('renders with options', () => {
    render(<Login />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});