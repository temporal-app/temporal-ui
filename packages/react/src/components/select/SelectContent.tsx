import { type ListCollection, Select } from "@ark-ui/react/select";
import type { SelectItem as CoreSelectItem } from "@temporal-ui/core/select";
import { Check } from "lucide-react";

export type SelectItem<M = unknown> = CoreSelectItem<M, React.ReactNode>;

export interface SelectContentProps<M = unknown> {
	testId?: string;
	collection: ListCollection<SelectItem<M>>;
	renderItem?: (item: SelectItem<M>) => React.ReactNode;
}

export function SelectContent<M = unknown>(props: SelectContentProps<M>) {
	const { testId, collection, renderItem } = props;

	return (
		<Select.Positioner data-testid={testId ? `${testId}--positioner` : undefined}>
			<Select.Content data-testid={testId ? `${testId}--content` : undefined}>
				{collection.group().map(([type, group]) => (
					<Select.ItemGroup key={type}>
						{type && <Select.ItemGroupLabel>{type}</Select.ItemGroupLabel>}
						{group.map((item) => (
							<Select.Item
								key={item.value}
								item={item}
							>
								{renderItem ? (
									<div style={{ pointerEvents: "none" }}>{renderItem(item)}</div>
								) : (
									<>
										{item.icon}
										<Select.ItemText>{item.label}</Select.ItemText>
									</>
								)}
								<Select.ItemIndicator>
									<Check />
								</Select.ItemIndicator>
							</Select.Item>
						))}
					</Select.ItemGroup>
				))}
			</Select.Content>
		</Select.Positioner>
	);
}
