import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";

describe("ToggleGroup", () => {
	it("should render all items", () => {
		render(() => (
			<ToggleGroup>
				<ToggleGroupItem value="bold">B</ToggleGroupItem>
				<ToggleGroupItem value="italic">I</ToggleGroupItem>
				<ToggleGroupItem value="underline">U</ToggleGroupItem>
			</ToggleGroup>
		));
		expect(screen.getByRole("button", { name: "B" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "I" })).toBeInTheDocument();
		expect(screen.getByRole("button", { name: "U" })).toBeInTheDocument();
	});

	it("should be disabled when disabled prop is true", () => {
		render(() => (
			<ToggleGroup disabled>
				<ToggleGroupItem value="bold">B</ToggleGroupItem>
				<ToggleGroupItem value="italic">I</ToggleGroupItem>
				<ToggleGroupItem value="underline">U</ToggleGroupItem>
			</ToggleGroup>
		));
		expect(screen.getByRole("button", { name: "B" })).toBeDisabled();
		expect(screen.getByRole("button", { name: "I" })).toBeDisabled();
		expect(screen.getByRole("button", { name: "U" })).toBeDisabled();
	});

	it("should show selected state for controlled value", () => {
		render(() => (
			<ToggleGroup value={["bold"]}>
				<ToggleGroupItem value="bold">B</ToggleGroupItem>
				<ToggleGroupItem value="italic">I</ToggleGroupItem>
				<ToggleGroupItem value="underline">U</ToggleGroupItem>
			</ToggleGroup>
		));
		expect(screen.getByRole("button", { name: "B" })).toHaveAttribute("data-state", "on");
		expect(screen.getByRole("button", { name: "I" })).toHaveAttribute("data-state", "off");
	});

	it("should disable individual items", () => {
		render(() => (
			<ToggleGroup>
				<ToggleGroupItem value="bold">B</ToggleGroupItem>
				<ToggleGroupItem
					value="italic"
					disabled
				>
					I
				</ToggleGroupItem>
				<ToggleGroupItem value="underline">U</ToggleGroupItem>
			</ToggleGroup>
		));
		expect(screen.getByRole("button", { name: "B" })).not.toBeDisabled();
		expect(screen.getByRole("button", { name: "I" })).toBeDisabled();
		expect(screen.getByRole("button", { name: "U" })).not.toBeDisabled();
	});
});
