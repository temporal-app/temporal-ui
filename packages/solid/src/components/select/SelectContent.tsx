import { type ListCollection, Select } from "@ark-ui/solid/select";
import type { SelectItem as CoreSelectItem } from "@temporal-ui/core/select";
import { CheckIcon } from "lucide-solid";
import { For, type JSX } from "solid-js";

export type SelectItem<M = unknown> = CoreSelectItem<M, JSX.Element>;

export interface SelectContentProps<M = unknown> {
	testId?: string;
	collection: ListCollection<SelectItem<M>>;
	renderItem?: (item: SelectItem<M>) => JSX.Element;
}

export function SelectContent<M = unknown>(props: SelectContentProps<M>) {
	return (
		<Select.Positioner data-testid={props.testId ? `${props.testId}--positioner` : undefined}>
			<Select.Content data-testid={props.testId ? `${props.testId}--content` : undefined}>
				<For each={props.collection.group()}>
					{([type, group]) => (
						<Select.ItemGroup>
							{type && <Select.ItemGroupLabel>{type}</Select.ItemGroupLabel>}
							<For each={group}>
								{(item) => (
									<Select.Item item={item}>
										{props.renderItem?.(item) ?? (
											<>
												{item.icon}
												<Select.ItemText>{item.label}</Select.ItemText>
											</>
										)}
										<Select.ItemIndicator>
											<CheckIcon />
										</Select.ItemIndicator>
									</Select.Item>
								)}
							</For>
						</Select.ItemGroup>
					)}
				</For>
			</Select.Content>
		</Select.Positioner>
	);
}
