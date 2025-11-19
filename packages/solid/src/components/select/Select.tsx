import { Combobox } from "@ark-ui/solid/combobox";
import type { SelectProps as CoreSelectProps, SelectItem } from "@temporal-ui/core/select";
import { splitProps, type JSX } from "solid-js";
import { Portal } from "solid-js/web";
import { Field } from "../field";
import { SelectContent } from "./SelectContent";
import { SelectControl } from "./SelectControl";
import { cx } from "@temporal-ui/core/utils/cx";

export interface SelectProps<D extends object = never>
	extends CoreSelectProps<D, JSX.Element>,
		Combobox.RootProps<SelectItem<D, JSX.Element>> {}

export function Select<D extends object>(_props: SelectProps<D>) {
	const [fieldProps, controlProps, rootProps] = splitProps(
		_props,
		["label", "hint", "error", "required", "readOnly", "disabled", "classes", "testId"],
		[
			"portal",
			"icon",
			"renderItem",
			"maxDropdownHeight",
			"searchable",
			"className",
			"searchPlaceholder",
			"class",
			"deselectable",
		],
	);

	return (
		<Field
			{...fieldProps}
			testId={fieldProps.testId ? `${fieldProps.testId}-field` : undefined}
		>
			<Combobox.Root
				disabled={fieldProps.disabled}
				invalid={!!fieldProps.error}
				required={fieldProps.required}
				readOnly={fieldProps.readOnly}
				{...rootProps}
				class={cx(controlProps.className, fieldProps.classes?.selectRoot)}
				data-testid={fieldProps.testId ? `${fieldProps.testId}--root` : undefined}
			>
				<SelectControl
					icon={controlProps.icon}
					testId={fieldProps.testId}
					placeholder={rootProps.placeholder}
					renderItem={controlProps.renderItem}
					deselectable={controlProps.deselectable}
					invalid={!!fieldProps.error}
					classes={{
						...fieldProps.classes,
						control: cx(controlProps.className, controlProps.class, fieldProps.classes?.control),
					}}
				/>
				{controlProps.portal ? (
					<Portal>
						<SelectContent
							testId={fieldProps.testId}
							renderItem={controlProps.renderItem}
							maxHeight={controlProps.maxDropdownHeight}
							showSearch={controlProps.searchable}
							searchPlaceholder={controlProps.searchPlaceholder}
							classes={fieldProps.classes}
						/>
					</Portal>
				) : (
					<SelectContent
						testId={fieldProps.testId}
						renderItem={controlProps.renderItem}
						maxHeight={controlProps.maxDropdownHeight}
						showSearch={controlProps.searchable}
						searchPlaceholder={controlProps.searchPlaceholder}
						classes={fieldProps.classes}
					/>
				)}
			</Combobox.Root>
		</Field>
	);
}
