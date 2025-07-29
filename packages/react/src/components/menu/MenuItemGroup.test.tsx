import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu, type MenuProps } from './Menu';
import { MenuItem } from './MenuItem';
import { MenuItemGroup } from './MenuItemGroup';

describe('MenuItemGroup Component', () => {
	const MenuWrapper = ({ children, ...props }: Omit<MenuProps, 'trigger'>) => (
		<Menu trigger={<button type="button">Trigger</button>} {...props}>
			{children}
		</Menu>
	);

	beforeEach(() => {
		cleanup();
	});

	it('renders item group with label', async () => {
		const user = userEvent.setup();
		render(
			<MenuWrapper>
				<MenuItemGroup label="Group Label">
					<MenuItem value="item1">Item 1</MenuItem>
					<MenuItem value="item2">Item 2</MenuItem>
				</MenuItemGroup>
			</MenuWrapper>
		);

		await user.click(screen.getByRole('button'));

		await waitFor(() => {
			expect(screen.getByText('Group Label')).toBeVisible();
			expect(screen.getByRole('menuitem', { name: 'Item 1' })).toBeVisible();
			expect(screen.getByRole('menuitem', { name: 'Item 2' })).toBeVisible();
		});
	});

	it('renders without label when not provided', async () => {
		const user = userEvent.setup();
		render(
			<MenuWrapper>
				<MenuItemGroup>
					<MenuItem value="item1">Item 1</MenuItem>
				</MenuItemGroup>
			</MenuWrapper>
		);

		await user.click(screen.getByRole('button'));

		await waitFor(() => {
			expect(screen.getByRole('menuitem', { name: 'Item 1' })).toBeVisible();
		});
	});

	it('accepts additional props', async () => {
		const user = userEvent.setup();
		render(
			<MenuWrapper>
				<MenuItemGroup data-testid="custom-group">
					<MenuItem value="item1">Item 1</MenuItem>
				</MenuItemGroup>
			</MenuWrapper>
		);

		await user.click(screen.getByRole('button'));

		await waitFor(() => {
			expect(screen.getByTestId('custom-group')).toBeVisible();
		});
	});
});
