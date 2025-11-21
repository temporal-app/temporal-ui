import { Combobox, useComboboxContext } from "@ark-ui/solid/combobox";
import { createVirtualizer, type VirtualizerOptions } from "@tanstack/solid-virtual";
import type { RenderItemFn as CoreRenderItemFn, SelectItem as CoreSelectItem } from "@temporal-ui/core/select";
import { CheckIcon, Search } from "lucide-solid";
import { createMemo, For, mergeProps, Show, type JSX } from "solid-js";

export type SelectItem<D = unknown> = CoreSelectItem<D, JSX.Element>;
export type RenderItemFn<D = unknown> = CoreRenderItemFn<D, JSX.Element>;

export interface SelectContentProps<D = unknown> {
	testId?: string;
	renderItem?: RenderItemFn<D>;
	maxHeight?: number;
	showSearch?: boolean;
	searchPlaceholder?: string;
	virtualizerOptions?: VirtualizerOptions<HTMLDivElement, HTMLDivElement>;
	classes?: {
		content?: string;
		itemGroup?: string;
		itemGroupLabel?: string;
		item?: string;
		itemText?: string;
		itemIndicator?: string;
		positioner?: string;
		scrollArea?: string;
		input?: string;
	};
}

type FlattenedItemGroup = { type: "group"; label: string };
type FlattenedItemItem<M> = { type: "item"; item: SelectItem<M>; index: number };
type FlattenedItem<M> = FlattenedItemGroup | FlattenedItemItem<M>;

export function SelectContent<M = unknown>(_props: SelectContentProps<M>) {
	const props = mergeProps({ maxHeight: 500, searchPlaceholder: "Search options..." }, _props);
	const context = useComboboxContext();
	let parentRef!: HTMLDivElement;

	const flattenedItems = createMemo(() => {
		const result: FlattenedItem<M>[] = [];
		const groups = context().collection.group();
		if (groups.length > 1) {
			for (const [type, group] of groups) {
				result.push({ type: "group", label: type });
				for (const item of group) {
					result.push({ type: "item", item, index: context().collection.items.indexOf(item) });
				}
			}
		} else {
			for (const item of context().collection.items) {
				result.push({ type: "item", item, index: context().collection.items.indexOf(item) });
			}
		}
		return result;
	});

	const rowVirtualizer = createVirtualizer({
		getScrollElement: () => parentRef,
		estimateSize: (i) => (flattenedItems()[i]?.type === "group" ? 30 : 35),
		...props.virtualizerOptions,
		count: flattenedItems().length,
	});

	return (
		<Combobox.Positioner
			class={props.classes?.positioner}
			data-testid={props.testId ? `${props.testId}--positioner` : undefined}
		>
			<Combobox.Content
				ref={parentRef}
				class={props.classes?.content}
				data-testid={props.testId ? `${props.testId}--content` : undefined}
				style={{ "max-height": `${props.maxHeight}px` }}
			>
				<div
					data-scope="combobox"
					data-part="input-wrapper"
					hidden={!props.showSearch}
				>
					<Search />
					<Combobox.Input
						class={props.classes?.input}
						placeholder={props.searchPlaceholder}
					/>
				</div>
				<div
					data-scope="combobox"
					data-part="content-list"
				>
					<div
						style={{
							height: `${rowVirtualizer.getTotalSize()}px`,
							width: "100%",
							position: "relative",
						}}
					>
						<Combobox.ItemGroup class={props.classes?.itemGroup}>
							<For each={rowVirtualizer.getVirtualItems()}>
								{(virtualItem) => {
									const item = flattenedItems()[virtualItem.index];
									if (!item) return null;
									return (
										<div
											style={{
												height: `${virtualItem.size}px`,
												width: "100%",
												position: "absolute",
												top: 0,
												left: 0,
												transform: `translateY(${virtualItem.start}px)`,
											}}
										>
											<Show when={item?.type === "group" && item.label}>
												<Combobox.ItemGroupLabel class={props.classes?.itemGroupLabel}>
													{(item as FlattenedItemGroup).label}
												</Combobox.ItemGroupLabel>
											</Show>
											<Show when={item?.type === "item"}>
												<Combobox.Item
													class={props.classes?.item}
													item={(item as FlattenedItemItem<M>).item}
												>
													<Show when={props.renderItem}>
														<div style={{ "pointer-events": "none" }}>
															{props.renderItem?.(
																(item as FlattenedItemItem<M>).item,
																"option",
															)}
														</div>
													</Show>
													<Show when={!props.renderItem}>
														<Show when={(item as FlattenedItemItem<M>).item.icon}>
															{(item as FlattenedItemItem<M>).item.icon}
														</Show>
														<Combobox.ItemText class={props.classes?.itemText}>
															{(item as FlattenedItemItem<M>).item.label}
														</Combobox.ItemText>
													</Show>
													<Combobox.ItemIndicator class={props.classes?.itemIndicator}>
														<CheckIcon />
													</Combobox.ItemIndicator>
												</Combobox.Item>
											</Show>
										</div>
									);
								}}
							</For>
						</Combobox.ItemGroup>
					</div>
				</div>
			</Combobox.Content>
		</Combobox.Positioner>
	);
}
