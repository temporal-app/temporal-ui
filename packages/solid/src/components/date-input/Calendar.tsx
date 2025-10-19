import { DatePicker, parseDate } from "@ark-ui/solid/date-picker";
import type { DateInputProps } from "@temporal-ui/core/date-input";
import { DayView } from "./DayView";
import { MonthView } from "./MonthView";
import { YearView } from "./YearView";
import { ChevronLeft, ChevronRight } from "lucide-solid";
import {
	DateInputNextTrigger,
	DateInputPrevTrigger,
	DateInputRoot,
	DateInputViewControl,
	DateInputViewTrigger,
} from "./Components";
import { splitProps, type ComponentProps, type JSX } from "solid-js";

export function Calendar(props: DateInputProps<JSX.Element> & ComponentProps<typeof DatePicker.Root>) {
	const [controlProps, rootProps] = splitProps(props, ["testId", "value", "defaultValue", "onValueChange"]);
	return (
		<DateInputRoot
			{...rootProps}
			value={controlProps.value?.map((date) => parseDate(date))}
			defaultValue={controlProps.defaultValue?.map((date) => parseDate(date))}
			onValueChange={(details) => controlProps.onValueChange?.(details.value.map((date) => date.toString()))}
			inline
			data-testid={controlProps.testId ? `${controlProps.testId}--root` : undefined}
		>
			<DateInputViewControl
				data-testid={controlProps.testId ? `${controlProps.testId}--view-control` : undefined}
			>
				<DateInputPrevTrigger
					data-testid={controlProps.testId ? `${controlProps.testId}--prev-trigger` : undefined}
				>
					<ChevronLeft />
				</DateInputPrevTrigger>
				<DateInputViewTrigger
					data-testid={controlProps.testId ? `${controlProps.testId}--view-trigger` : undefined}
				>
					<DatePicker.RangeText />
				</DateInputViewTrigger>
				<DateInputNextTrigger
					data-testid={controlProps.testId ? `${controlProps.testId}--next-trigger` : undefined}
				>
					<ChevronRight />
				</DateInputNextTrigger>
			</DateInputViewControl>
			<DayView numOfMonths={props.numOfMonths} />
			<MonthView />
			<YearView />
		</DateInputRoot>
	);
}
