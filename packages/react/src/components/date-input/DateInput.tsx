import { DatePicker, parseDate } from "@ark-ui/react/date-picker";
import { Portal } from "@ark-ui/react/portal";
import type { DateInputProps as CoreDateInputProps } from "@temporal-ui/core/date-input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Field } from "../field";
import { DayView } from "./DayView";
import { MonthView } from "./MonthView";
import { YearView } from "./YearView";
import {
	DateInputContent,
	DateInputContext,
	DateInputControl,
	DateInputInput,
	DateInputNextTrigger,
	DateInputPositioner,
	DateInputPrevTrigger,
	DateInputRoot,
	DateInputTrigger,
	DateInputViewControl,
	DateInputViewTrigger,
} from "./Components";

export interface DateInputProps
	extends CoreDateInputProps<React.ReactNode>,
		Omit<React.ComponentProps<typeof DatePicker.Root>, "value" | "defaultValue" | "onValueChange"> {}

export function DateInput(props: DateInputProps) {
	const {
		label,
		hint,
		error,
		required,
		readOnly,
		disabled,
		classes,
		testId,
		placeholder,
		value,
		defaultValue,
		onValueChange,
		position,
		startSection,
		endSection,
		...rootProps
	} = props;
	return (
		<Field
			label={label}
			hint={hint}
			error={error}
			required={required}
			readOnly={readOnly}
			disabled={disabled}
			classes={classes}
			testId={testId ? `${testId}-field` : undefined}
		>
			<DateInputRoot
				{...rootProps}
				value={value?.map((date) => parseDate(date))}
				defaultValue={defaultValue?.map((date) => parseDate(date))}
				onValueChange={(details) => onValueChange?.(details.value.map((date) => date.toString()))}
				positioning={{ placement: "bottom-start", ...position }}
				data-testid={testId ? `${testId}--root` : undefined}
			>
				<DateInputControl data-testid={testId ? `${testId}--control` : undefined}>
					{startSection && (
						<div
							data-scope={"date-input"}
							data-part={"start-section"}
							data-testid={testId ? `${testId}--start-section` : undefined}
						>
							{startSection}
						</div>
					)}
					{endSection && (
						<div
							data-scope={"date-input"}
							data-part={"end-section"}
							data-testid={testId ? `${testId}--end-section` : undefined}
						>
							{endSection}
						</div>
					)}
					<DateInputContext>
						{(datePicker) => {
							return (
								<DateInputTrigger
									data-placeholder={datePicker.valueAsString.length === 0}
									data-testid={testId ? `${testId}--trigger` : undefined}
									data-with-start-section={startSection ? true : undefined}
									data-with-end-section={endSection ? true : undefined}
								>
									{datePicker.valueAsString.length
										? datePicker.valueAsString.join(" - ")
										: (placeholder ??
											`Select a date${rootProps.selectionMode === "range" ? " range" : ""}...`)}
								</DateInputTrigger>
							);
						}}
					</DateInputContext>
					<DateInputInput
						data-testid={testId ? `${testId}--input` : undefined}
						hidden
					/>
				</DateInputControl>
				<Portal>
					<DateInputPositioner data-testid={testId ? `${testId}--positioner` : undefined}>
						<DateInputContent data-testid={testId ? `${testId}--content` : undefined}>
							<DateInputViewControl data-testid={testId ? `${testId}--view-control` : undefined}>
								<DateInputPrevTrigger data-testid={testId ? `${testId}--prev-trigger` : undefined}>
									<ChevronLeft />
								</DateInputPrevTrigger>
								<DateInputViewTrigger data-testid={testId ? `${testId}--view-trigger` : undefined}>
									<DatePicker.RangeText />
								</DateInputViewTrigger>
								<DateInputNextTrigger data-testid={testId ? `${testId}--next-trigger` : undefined}>
									<ChevronRight />
								</DateInputNextTrigger>
							</DateInputViewControl>
							<DayView numOfMonths={rootProps.numOfMonths} />
							<MonthView />
							<YearView />
						</DateInputContent>
					</DateInputPositioner>
				</Portal>
			</DateInputRoot>
		</Field>
	);
}
