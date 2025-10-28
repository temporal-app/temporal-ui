import { Combobox } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import type { SelectProps as CoreSelectProps } from "@temporal-ui/core/select";
import { Field } from "../field";
import { SelectContent } from "./SelectContent";
import { SelectControl } from "./SelectControl";
import { cx } from "@temporal-ui/core/utils/cx";

export interface SelectProps<D = unknown> extends CoreSelectProps<D, React.ReactNode> {}

export const Select: Combobox.RootComponent<SelectProps> = (props) => {
	const {
		label,
		hint,
		error,
		required,
		readOnly,
		disabled,
		classes,
		testId,
		icon,
		placeholder,
		portal,
		renderItem,
		className,
		maxDropdownHeight,
		searchable,
		...rest
	} = props;

	return (
		<Field
			label={label}
			hint={hint}
			classes={classes}
			required={required}
			readOnly={readOnly}
			error={error}
			disabled={disabled}
			testId={testId ? `${testId}-field` : undefined}
		>
			<Combobox.Root
				disabled={disabled}
				invalid={!!error}
				required={required}
				readOnly={readOnly}
				{...rest}
				className={cx(className, classes?.selectRoot)}
				data-testid={testId ? `${testId}--root` : undefined}
			>
				<SelectControl
					icon={icon}
					testId={testId}
					placeholder={placeholder}
					renderItem={renderItem}
					classes={{
						...classes,
						control: cx(className, classes?.control),
					}}
				/>
				{portal && (
					<Portal>
						<SelectContent
							testId={testId}
							renderItem={renderItem}
							maxHeight={maxDropdownHeight}
							showSearch={searchable}
							classes={classes}
						/>
					</Portal>
				)}
				{!portal && (
					<SelectContent
						testId={testId}
						renderItem={renderItem}
						maxHeight={maxDropdownHeight}
						showSearch={searchable}
						classes={classes}
					/>
				)}
			</Combobox.Root>
		</Field>
	);
};
