import { DatePicker } from "@ark-ui/react/date-picker";
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

export function Calendar(props: DateInputProps<React.ReactNode> & React.ComponentProps<typeof DatePicker.Root>) {
	const { testId, ...rootProps } = props;
	return (
		<DateInputRoot
			{...rootProps}
			inline
			data-testid={testId ? `${testId}--root` : undefined}
		>
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
			<DayView numOfMonths={props.numOfMonths} />
			<MonthView />
			<YearView />
		</DateInputRoot>
	);
}
