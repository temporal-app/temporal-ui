import { type ListCollection, Select } from "@ark-ui/react/select";
import type { RenderItemFn as CoreRenderItemFn, SelectItem as CoreSelectItem } from "@temporal-ui/core/select";
import { Check } from "lucide-react";
import { ScrollArea } from "../scroll-area";

export type SelectItem<M = unknown> = CoreSelectItem<M, React.ReactNode>;
export type RenderItemFn<M = unknown> = CoreRenderItemFn<M, React.ReactNode>;

export interface SelectContentProps<M = unknown> {
	testId?: string;
	collection: ListCollection<SelectItem<M>>;
	renderItem?: RenderItemFn<M>;
	maxHeight?: number;
	classes?: {
		content?: string;
		itemGroup?: string;
		itemGroupLabel?: string;
		item?: string;
		itemText?: string;
		itemIndicator?: string;
		positioner?: string;
		scrollArea?: string;
	};
}

export function SelectContent<M = unknown>(props: SelectContentProps<M>) {
	const { testId, collection, maxHeight = 300, classes, renderItem } = props;

	return (
		<Select.Positioner
			className={classes?.positioner}
			data-testid={testId ? `${testId}--positioner` : undefined}
		>
			<Select.Content
				className={classes?.content}
				data-testid={testId ? `${testId}--content` : undefined}
			>
				<ScrollArea
					className={classes?.scrollArea}
					style={{ height: `${maxHeight}px` }}
				>
					{collection.group().map(([type, group]) => (
						<Select.ItemGroup
							key={type}
							className={classes?.itemGroup}
						>
							{type && (
								<Select.ItemGroupLabel className={classes?.itemGroupLabel}>
									{type}
								</Select.ItemGroupLabel>
							)}
							{group.map((item) => (
								<Select.Item
									key={item.value}
									item={item}
									className={classes?.item}
								>
									{renderItem ? (
										<div style={{ pointerEvents: "none" }}>{renderItem(item, "option")}</div>
									) : (
										<>
											{item.icon}
											<Select.ItemText className={classes?.itemText}>
												{item.label}
											</Select.ItemText>
										</>
									)}
									<Select.ItemIndicator className={classes?.itemIndicator}>
										<Check />
									</Select.ItemIndicator>
								</Select.Item>
							))}
						</Select.ItemGroup>
					))}
				</ScrollArea>
			</Select.Content>
		</Select.Positioner>
	);
}
