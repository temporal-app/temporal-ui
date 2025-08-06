import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "../button";
import { Menu, type MenuProps } from "./Menu";
import { MenuItem } from "./MenuItem";

describe("MenuItem Component", () => {
	const MenuWrapper = ({ children, ...props }: Omit<MenuProps, "trigger">) => (
		<Menu
			{...props}
			trigger={<Button>Trigger</Button>}
		>
			{children}
		</Menu>
	);

	beforeEach(() => {
		cleanup();
	});

	it("renders menu item correctly", async () => {
		const user = userEvent.setup();
		render(
			<MenuWrapper>
				<MenuItem value="test">Test Item</MenuItem>
			</MenuWrapper>,
		);

		await user.click(screen.getByRole("button"));

		await waitFor(() => {
			expect(screen.getByRole("menuitem", { name: "Test Item" })).toBeVisible();
		});
	});

	it("handles disabled state", async () => {
		const user = userEvent.setup();
		const onSelect = vi.fn();

		render(
			<MenuWrapper onSelect={onSelect}>
				<MenuItem
					value="disabled"
					disabled
				>
					Disabled Item
				</MenuItem>
			</MenuWrapper>,
		);

		await user.click(screen.getByRole("button"));

		const menuItem = screen.getByRole("menuitem", { name: "Disabled Item" });
		expect(menuItem).toBeVisible();
		expect(menuItem).toHaveAttribute("data-disabled");
	});

	it("accepts additional props", async () => {
		const user = userEvent.setup();
		render(
			<MenuWrapper>
				<MenuItem
					value="test"
					testId="custom-menu-item"
				>
					Test Item
				</MenuItem>
			</MenuWrapper>,
		);

		await user.click(screen.getByRole("button"));

		await waitFor(() => {
			expect(screen.getByTestId("custom-menu-item")).toBeVisible();
		});
	});
});
