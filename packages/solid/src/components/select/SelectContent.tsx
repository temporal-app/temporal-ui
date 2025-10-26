import { type ListCollection, Select } from "@ark-ui/solid/select";
import type { RenderItemFn as CoreRenderItemFn, SelectItem as CoreSelectItem } from "@temporal-ui/core/select";
import { CheckIcon } from "lucide-solid";
import { For, type JSX } from "solid-js";
import { ScrollArea } from "../scroll-area";

export type SelectItem<M = unknown> = CoreSelectItem<M, JSX.Element>;
export type RenderItemFn<M = unknown> = CoreRenderItemFn<M, JSX.Element>;

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
	return (
		<Select.Positioner
			class={props.classes?.positioner}
			data-testid={props.testId ? `${props.testId}--positioner` : undefined}
		>
			<Select.Content
				class={props.classes?.content}
				data-testid={props.testId ? `${props.testId}--content` : undefined}
			>
				<ScrollArea
					class={props.classes?.scrollArea}
					style={{ height: `${props.maxHeight ?? 300}px` }}
				>
					<For each={props.collection.group()}>
						{([type, group]) => (
							<Select.ItemGroup class={props.classes?.itemGroup}>
								{type && (
									<Select.ItemGroupLabel class={props.classes?.itemGroupLabel}>
										{type}
									</Select.ItemGroupLabel>
								)}
								<For each={group}>
									{(item) => (
										<Select.Item
											class={props.classes?.item}
											item={item}
										>
											{props.renderItem?.(item, "option") ?? (
												<>
													{item.icon}
													<Select.ItemText class={props.classes?.itemText}>
														{item.label}
													</Select.ItemText>
												</>
											)}
											<Select.ItemIndicator class={props.classes?.itemIndicator}>
												<CheckIcon />
											</Select.ItemIndicator>
										</Select.Item>
									)}
								</For>
							</Select.ItemGroup>
						)}
					</For>
				</ScrollArea>
			</Select.Content>
		</Select.Positioner>
	);
}
