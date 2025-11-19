import { Combobox, useComboboxContext } from "@ark-ui/solid/combobox";
import type { RenderItemFn as CoreRenderItemFn, SelectItem as CoreSelectItem } from "@temporal-ui/core/select";
import { CheckIcon, Search } from "lucide-solid";
import { For, mergeProps, Show, type JSX } from "solid-js";

export type SelectItem<D = unknown> = CoreSelectItem<D, JSX.Element>;
export type RenderItemFn<D = unknown> = CoreRenderItemFn<D, JSX.Element>;

export interface SelectContentProps<D = unknown> {
	testId?: string;
	renderItem?: RenderItemFn<D>;
	maxHeight?: number;
	showSearch?: boolean;
	searchPlaceholder?: string;
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

export function SelectContent<M = unknown>(_props: SelectContentProps<M>) {
	const props = mergeProps({ maxHeight: 500, searchPlaceholder: "Search options..." }, _props);
	const context = useComboboxContext();
	return (
		<Combobox.Positioner
			class={props.classes?.positioner}
			data-testid={props.testId ? `${props.testId}--positioner` : undefined}
		>
			<Combobox.Content
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
					<For each={context().collection.group()}>
						{([type, group]) => (
							<Combobox.ItemGroup class={props.classes?.itemGroup}>
								<Show when={type}>
									<Combobox.ItemGroupLabel class={props.classes?.itemGroupLabel}>
										{type}
									</Combobox.ItemGroupLabel>
								</Show>
								<For each={group}>
									{(item) => (
										<Combobox.Item
											class={props.classes?.item}
											item={item}
										>
											<Show when={props.renderItem}>
												<div style={{ "pointer-events": "none" }}>
													{props.renderItem?.(item, "option")}
												</div>
											</Show>
											<Show when={!props.renderItem}>
												<Show when={item.icon}>{item.icon}</Show>
												<Combobox.ItemText class={props.classes?.itemText}>
													{item.label}
												</Combobox.ItemText>
											</Show>
											<Combobox.ItemIndicator class={props.classes?.itemIndicator}>
												<CheckIcon />
											</Combobox.ItemIndicator>
										</Combobox.Item>
									)}
								</For>
							</Combobox.ItemGroup>
						)}
					</For>
				</div>
			</Combobox.Content>
		</Combobox.Positioner>
	);
}
