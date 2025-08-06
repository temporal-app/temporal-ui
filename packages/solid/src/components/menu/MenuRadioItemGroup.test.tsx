import { cleanup, render, screen, waitFor } from "@solidjs/testing-library";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Menu, type MenuProps } from "./Menu";
import { MenuRadioItem } from "./MenuRadioItem";
import { MenuRadioItemGroup } from "./MenuRadioItemGroup";

describe("MenuRadioItemGroup Component", () => {
	const MenuWrapper = (props: Omit<MenuProps, "trigger">) => (
		<Menu
			trigger={(_props) => (
				<button
					type="button"
					{..._props}
				>
					Trigger
				</button>
			)}
			{...props}
		>
			{props.children}
		</Menu>
	);

	beforeEach(() => {
		cleanup();
	});

	it("renders radio group with label", async () => {
		const user = userEvent.setup();
		render(() => (
			<MenuWrapper>
				<MenuRadioItemGroup
					label="Choose Option"
					value="option1"
				>
					<MenuRadioItem value="option1">Option 1</MenuRadioItem>
					<MenuRadioItem value="option2">Option 2</MenuRadioItem>
				</MenuRadioItemGroup>
			</MenuWrapper>
		));

		await user.click(screen.getByRole("button"));

		await waitFor(() => {
			expect(screen.getByText("Choose Option")).toBeVisible();
			expect(screen.getByRole("menuitemradio", { name: "Option 1" })).toBeVisible();
			expect(screen.getByRole("menuitemradio", { name: "Option 2" })).toBeVisible();
		});
	});

	it("calls onValueChange when radio item is selected", async () => {
		const user = userEvent.setup();
		const onValueChange = vi.fn();

		render(() => (
			<MenuWrapper closeOnSelect={false}>
				<MenuRadioItemGroup
					value="option1"
					onValueChange={onValueChange}
				>
					<MenuRadioItem value="option1">Option 1</MenuRadioItem>
					<MenuRadioItem value="option2">Option 2</MenuRadioItem>
				</MenuRadioItemGroup>
			</MenuWrapper>
		));

		await user.click(screen.getByRole("button"));

		await waitFor(() => {
			expect(screen.getByRole("menuitemradio", { name: "Option 2" })).toBeVisible();
		});

		const option2 = screen.getByRole("menuitemradio", { name: "Option 2" });
		await user.click(option2);

		expect(onValueChange).toHaveBeenCalledWith("option2");
	});

	it("renders without label when not provided", async () => {
		const user = userEvent.setup();
		render(() => (
			<MenuWrapper>
				<MenuRadioItemGroup value="option1">
					<MenuRadioItem value="option1">Option 1</MenuRadioItem>
				</MenuRadioItemGroup>
			</MenuWrapper>
		));

		await user.click(screen.getByRole("button"));

		await waitFor(() => {
			expect(screen.getByRole("menuitemradio", { name: "Option 1" })).toBeVisible();
		});
	});

	it("accepts additional props", async () => {
		const user = userEvent.setup();
		render(() => (
			<MenuWrapper>
				<MenuRadioItemGroup
					value="option1"
					testId="custom-radio-group"
				>
					<MenuRadioItem value="option1">Option 1</MenuRadioItem>
				</MenuRadioItemGroup>
			</MenuWrapper>
		));

		await user.click(screen.getByRole("button"));

		await waitFor(() => {
			expect(screen.getByTestId("custom-radio-group")).toBeVisible();
		});
	});
});
