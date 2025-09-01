import { type createListCollection, Select } from "@ark-ui/react/select";
import type { SelectItem } from "@temporal-ui/core/select";
import { Check } from "lucide-react";

export interface SelectContentProps {
		testId?: string;
		collection: ReturnType<typeof createListCollection<SelectItem<React.ReactNode>>>;
		renderItem?: (item: SelectItem<React.ReactNode>) => React.ReactNode;
	}

export function SelectContent(props: SelectContentProps) {
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
								{renderItem?.(item) ?? (
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