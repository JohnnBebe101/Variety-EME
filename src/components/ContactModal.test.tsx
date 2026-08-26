import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ContactModal } from './ContactModal';

vi.mock('framer-motion', () => ({
  motion: {
    div: React.forwardRef<HTMLDivElement>((props, ref) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { initial, animate, exit, transition, whileHover, whileTap, ...rest } = props as Record<string, unknown>;
      return <div ref={ref} {...rest} />;
    }),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('ContactModal', () => {
  it('does not render when isOpen is false', () => {
    render(<ContactModal isOpen={false} onClose={() => {}} subject="" />);
    expect(screen.queryByText("Let's Start Your Project")).not.toBeInTheDocument();
  });

  it('renders form content when isOpen is true', () => {
    render(<ContactModal isOpen={true} onClose={() => {}} subject="" />);
    expect(screen.getByText("Let's Start Your Project")).toBeInTheDocument();
    expect(screen.getByText("Send Us a Message")).toBeInTheDocument();
  });

  it('has name, email, phone, message fields', () => {
    render(<ContactModal isOpen={true} onClose={() => {}} subject="" />);
    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('your@email.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+251 xxx xxxx')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Tell us about your project/)).toBeInTheDocument();
  });

  it('has a submit button', () => {
    render(<ContactModal isOpen={true} onClose={() => {}} subject="" />);
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('has a close button', () => {
    render(<ContactModal isOpen={true} onClose={() => {}} subject="" />);
    expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument();
  });

  it('has a service dropdown', () => {
    render(<ContactModal isOpen={true} onClose={() => {}} subject="" />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(screen.getByText('Select service')).toBeInTheDocument();
  });
});
