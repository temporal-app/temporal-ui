import { DatePicker } from "@ark-ui/solid/date-picker";
import type { DateInputProps as CoreDateInputProps } from "@temporal-ui/core/date-input";
import { ChevronLeft, ChevronRight } from "lucide-solid";
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
import { splitProps, type ComponentProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";

export interface DateInputProps extends CoreDateInputProps<JSX.Element> {}

export function DateInput(props: DateInputProps & ComponentProps<typeof DatePicker.Root>) {
	const [fieldProps, rootProps] = splitProps(props, [
		"label",
		"hint",
		"error",
		"required",
		"readOnly",
		"disabled",
		"classes",
		"testId",
		"placeholder",
	]);
	return (
		<Field
			{...fieldProps}
			testId={fieldProps.testId ? `${fieldProps.testId}-field` : undefined}
		>
			<DateInputRoot
				{...rootProps}
				positioning={{ placement: "bottom-start", ...rootProps.positioning }}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--root` : undefined}
			>
				<DateInputControl data-testid={fieldProps.testId ? `${fieldProps.testId}--control` : undefined}>
					<DateInputContext>
						{(datePicker) => {
							return (
								<DateInputTrigger
									data-placeholder={datePicker().valueAsString.length === 0}
									data-testid={fieldProps.testId ? `${fieldProps.testId}--trigger` : undefined}
								>
									{datePicker().valueAsString.length
										? datePicker().valueAsString.join(" - ")
										: (fieldProps.placeholder ??
											`Select a date${rootProps.selectionMode === "range" ? " range" : ""}...`)}
								</DateInputTrigger>
							);
						}}
					</DateInputContext>
					<DateInputInput
						data-testid={fieldProps.testId ? `${fieldProps.testId}--input` : undefined}
						hidden
					/>
				</DateInputControl>
				<Portal>
					<DateInputPositioner
						data-testid={fieldProps.testId ? `${fieldProps.testId}--positioner` : undefined}
					>
						<DateInputContent data-testid={fieldProps.testId ? `${fieldProps.testId}--content` : undefined}>
							<DateInputViewControl
								data-testid={fieldProps.testId ? `${fieldProps.testId}--view-control` : undefined}
							>
								<DateInputPrevTrigger
									data-testid={fieldProps.testId ? `${fieldProps.testId}--prev-trigger` : undefined}
								>
									<ChevronLeft />
								</DateInputPrevTrigger>
								<DateInputViewTrigger
									data-testid={fieldProps.testId ? `${fieldProps.testId}--view-trigger` : undefined}
								>
									<DatePicker.RangeText />
								</DateInputViewTrigger>
								<DateInputNextTrigger
									data-testid={fieldProps.testId ? `${fieldProps.testId}--next-trigger` : undefined}
								>
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
