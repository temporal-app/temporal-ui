import { DatePicker, parseDate } from "@ark-ui/react/date-picker";
import type { DateInputProps } from "@temporal-ui/core/date-input";
import { DayView } from "./DayView";
import { MonthView } from "./MonthView";
import { YearView } from "./YearView";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
	DateInputNextTrigger,
	DateInputPrevTrigger,
	DateInputRoot,
	DateInputViewControl,
	DateInputViewTrigger,
} from "./Components";
import { testId as testIdFn } from "@temporal-ui/core/utils/string";

export function Calendar(
	props: DateInputProps<React.ReactNode> &
		Omit<React.ComponentProps<typeof DatePicker.Root>, "value" | "defaultValue" | "onValueChange">,
) {
	const { testId, value, defaultValue, onValueChange, ...rootProps } = props;
	const tid = testIdFn(testId);
	return (
		<DateInputRoot
			{...rootProps}
			value={value?.map((date) => parseDate(date))}
			defaultValue={defaultValue?.map((date) => parseDate(date))}
			onValueChange={(details) => onValueChange?.(details.value.map((date) => date.toString()))}
			inline
			data-testid={tid("--root")}
		>
			<DateInputViewControl data-testid={tid("--view-control")}>
				<DateInputPrevTrigger data-testid={tid("--prev-trigger")}>
					<ChevronLeft />
				</DateInputPrevTrigger>
				<DateInputViewTrigger data-testid={tid("--view-trigger")}>
					<DatePicker.RangeText />
				</DateInputViewTrigger>
				<DateInputNextTrigger data-testid={tid("--next-trigger")}>
					<ChevronRight />
				</DateInputNextTrigger>
			</DateInputViewControl>
			<DayView numOfMonths={props.numOfMonths} />
			<MonthView />
			<YearView />
		</DateInputRoot>
	);
}
