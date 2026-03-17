import { render, screen, fireEvent } from "@solidjs/testing-library";
import { describe, expect, it, vi } from "vitest";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
	it("renders basic input with label and placeholder", () => {
		render(() => (
			<TextInput
				label="Username"
				placeholder="Enter your username"
				testId="username"
			/>
		));

		expect(screen.getByText("Username")).toBeInTheDocument();
		const input = screen.getByPlaceholderText("Enter your username");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("data-testid", "username--input");
	});

	it("renders hint and error messages", () => {
		const { rerender } = render(() => (
			<TextInput
				label="Email"
				hint="We will never share your email."
				testId="email"
			/>
		));

		expect(screen.getByText("We will never share your email.")).toBeInTheDocument();

		rerender(() => (
			<TextInput
				label="Email"
				error="Invalid email address"
				testId="email"
			/>
		));

		expect(screen.getByText("Invalid email address")).toBeInTheDocument();
		expect(screen.getByTestId("email--input")).toHaveAttribute("aria-invalid", "true");
	});

	it("renders start and end sections", () => {
		render(() => (
			<TextInput
				label="Search"
				startSection={<span data-testid="search-icon">🔍</span>}
				endSection={<button type="button" data-testid="clear-button">X</button>}
				testId="search"
			/>
		));

		expect(screen.getByTestId("search-icon")).toBeInTheDocument();
		expect(screen.getByTestId("clear-button")).toBeInTheDocument();

		const input = screen.getByTestId("search--input");
		expect(input).toHaveAttribute("data-with-start-section", "true");
		expect(input).toHaveAttribute("data-with-end-section", "true");
	});

	it("calls onValueChange and onInput when typing", () => {
		const onValueChange = vi.fn();
		const onInput = vi.fn();

		render(() => (
			<TextInput
				label="Name"
				onValueChange={onValueChange}
				onInput={onInput}
				testId="name"
			/>
		));

		const input = screen.getByTestId("name--input") as HTMLInputElement;
		fireEvent.input(input, { target: { value: "John" } });

		expect(onValueChange).toHaveBeenCalledWith("John");
		expect(onInput).toHaveBeenCalled();
	});

	it("handles disabled and readOnly states", () => {
		const { rerender } = render(() => (
			<TextInput label="Disabled" disabled testId="disabled" />
		));

		expect(screen.getByTestId("disabled--input")).toBeDisabled();

		rerender(() => (
			<TextInput label="Read Only" readOnly testId="readonly" />
		));

		expect(screen.getByTestId("readonly--input")).toHaveAttribute("readonly");
	});

	it("applies required attribute", () => {
		render(() => <TextInput label="Required" required testId="required" />);
		expect(screen.getByTestId("required--input")).toBeRequired();
	});
});
