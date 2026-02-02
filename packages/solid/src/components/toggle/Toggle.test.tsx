import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
	it("should render", () => {
		render(() => <Toggle>Toggle me</Toggle>);
		expect(screen.getByRole("button", { name: "Toggle me" })).toBeInTheDocument();
	});

	it("should be disabled when disabled prop is true", () => {
		render(() => <Toggle disabled>Toggle me</Toggle>);
		expect(screen.getByRole("button", { name: "Toggle me" })).toBeDisabled();
	});

	it("should have pressed state when pressed prop is true", () => {
		render(() => <Toggle pressed>Toggle me</Toggle>);
		expect(screen.getByRole("button", { name: "Toggle me" })).toHaveAttribute("data-state", "on");
	});

	it("should have unpressed state when pressed prop is false", () => {
		render(() => <Toggle pressed={false}>Toggle me</Toggle>);
		expect(screen.getByRole("button", { name: "Toggle me" })).toHaveAttribute("data-state", "off");
	});
});
