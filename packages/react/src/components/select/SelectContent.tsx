import { Combobox, useComboboxContext } from "@ark-ui/react/combobox";
import type { RenderItemFn as CoreRenderItemFn, SelectItem as CoreSelectItem } from "@temporal-ui/core/select";
import { Check, Search } from "lucide-react";

export type SelectItem<D = unknown> = CoreSelectItem<D, React.ReactNode>;
export type RenderItemFn<D = unknown> = CoreRenderItemFn<D, React.ReactNode>;

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

export function SelectContent<M = unknown>(props: SelectContentProps<M>) {
	const { testId, maxHeight = 500, classes, renderItem, showSearch, searchPlaceholder } = props;
	const context = useComboboxContext();
	return (
		<Combobox.Positioner
			className={classes?.positioner}
			data-testid={testId ? `${testId}--positioner` : undefined}
		>
			<Combobox.Content
				className={classes?.content}
				data-testid={testId ? `${testId}--content` : undefined}
				style={{ maxHeight: `${maxHeight}px` }}
			>
				<div
					data-scope="combobox"
					data-part="input-wrapper"
					hidden={!showSearch}
				>
					<Search />
					<Combobox.Input
						className={classes?.input}
						placeholder={searchPlaceholder ?? "Search options..."}
					/>
				</div>
				<div
					data-scope="combobox"
					data-part="content-list"
				>
					{context.collection.group().map(([type, group]) => (
						<Combobox.ItemGroup
							key={type}
							className={classes?.itemGroup}
						>
							{type && (
								<Combobox.ItemGroupLabel className={classes?.itemGroupLabel}>
									{type}
								</Combobox.ItemGroupLabel>
							)}
							{group.map((item) => (
								<Combobox.Item
									key={item.value}
									item={item}
									className={classes?.item}
								>
									{renderItem ? (
										<div style={{ pointerEvents: "none" }}>{renderItem(item, "option")}</div>
									) : (
										<>
											{item.icon}
											<Combobox.ItemText className={classes?.itemText}>
												{item.label}
											</Combobox.ItemText>
										</>
									)}
									<Combobox.ItemIndicator className={classes?.itemIndicator}>
										<Check />
									</Combobox.ItemIndicator>
								</Combobox.Item>
							))}
						</Combobox.ItemGroup>
					))}
				</div>
			</Combobox.Content>
		</Combobox.Positioner>
	);
}
