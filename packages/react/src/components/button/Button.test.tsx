import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
	const defaultProps = {
		children: 'Test Button',
	};

	it('renders correctly with default props', () => {
		render(<Button {...defaultProps} />);
		const buttonElement = screen.getByRole('button', { name: 'Test Button' });
		expect(buttonElement).toBeInTheDocument();
		// Default variant: "primary", Default size: "md" (no explicit size class part for "md")
		expect(buttonElement).toHaveClass('btn-primary');
		expect(buttonElement).not.toBeDisabled();
		expect(buttonElement).not.toHaveAttribute('data-loading');
	});

	it('applies variant classes correctly', () => {
		const { rerender } = render(<Button {...defaultProps} variant="secondary" />);
		expect(screen.getByRole('button', { name: 'Test Button' })).toHaveClass('btn-secondary');

		rerender(<Button {...defaultProps} variant="destructive" />);
		expect(screen.getByRole('button', { name: 'Test Button' })).toHaveClass('btn-destructive');
	});

	it('applies size classes correctly', () => {
		const { rerender } = render(<Button {...defaultProps} size="sm" />);
		// Default variant "primary"
		expect(screen.getByRole('button', { name: 'Test Button' })).toHaveClass('btn-sm-primary');

		rerender(<Button {...defaultProps} size="lg" />);
		expect(screen.getByRole('button', { name: 'Test Button' })).toHaveClass('btn-lg-primary');

		// Test default size "md" (should not add a size-specific part like "btn-md-primary")
		rerender(<Button {...defaultProps} size="md" />);
		expect(screen.getByRole('button', { name: 'Test Button' })).toHaveClass('btn-primary');
		expect(screen.getByRole('button', { name: 'Test Button' })).not.toHaveClass('btn-md-primary');
	});

	it('renders as an icon button with correct class', () => {
		render(<Button {...defaultProps} icon />);
		// Class logic: [ "btn", size !== "md" ? size : "", isIcon && "icon", variant ]
		// For default size "md", icon=true, variant="primary": ["btn", "", "icon", "primary"] -> "btn-icon-primary"
		expect(screen.getByRole('button', { name: 'Test Button' })).toHaveClass('btn-icon-primary');
	});

	it('handles disabled state', () => {
		render(<Button {...defaultProps} disabled />);
		expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
	});

	it('is disabled if loading is true, even if disabled prop is false', () => {
		render(<Button {...defaultProps} loading disabled={false} />);
		expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
	});

	it('is disabled if disabled prop is true, even if loading is false', () => {
		render(<Button {...defaultProps} disabled loading={false} />);
		expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
	});

	it('calls onClick handler when not disabled or loading', () => {
		const handleClick = vi.fn();
		render(<Button {...defaultProps} onClick={handleClick} />);
		fireEvent.click(screen.getByRole('button', { name: 'Test Button' }));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not call onClick handler when disabled', () => {
		const handleClick = vi.fn();
		render(<Button {...defaultProps} onClick={handleClick} disabled />);
		fireEvent.click(screen.getByRole('button', { name: 'Test Button' }));
		expect(handleClick).not.toHaveBeenCalled();
	});

	it('applies custom className alongside base classes', () => {
		render(<Button {...defaultProps} class="custom-class another-custom" />);
		const buttonElement = screen.getByRole('button', { name: 'Test Button' });
		expect(buttonElement).toHaveClass('btn-primary');
		expect(buttonElement).toHaveClass('custom-class');
		expect(buttonElement).toHaveClass('another-custom');
	});

	it('handles combination of props: variant, size, and icon', () => {
		render(<Button {...defaultProps} variant="destructive" size="lg" icon />);
		// Expected: ["btn", "lg", "icon", "danger"] -> "btn-lg-icon-danger"
		expect(screen.getByRole('button', { name: 'Test Button' })).toHaveClass('btn-lg-icon-destructive');
	});
});
