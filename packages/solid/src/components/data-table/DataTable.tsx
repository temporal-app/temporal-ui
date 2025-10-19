import {
	createSolidTable,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	type TableOptions,
} from "@tanstack/solid-table";
import type { DataTableProps as CoreDataTableProps } from "@temporal-ui/core/data-table";
import { For, splitProps, type JSX } from "solid-js";
import { Loader } from "../loader";
import { Table } from "../table";

export interface DataTableProps<TData>
	extends CoreDataTableProps<JSX.Element>,
		Omit<TableOptions<TData>, "getCoreRowModel"> {
	getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
}

export function DataTable<TData>(props: DataTableProps<TData>) {
	const [controlProps, tableProps] = splitProps(props, ["loading", "testId"]);
	const table = createSolidTable({
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		...tableProps,
		get data() {
			return tableProps.data;
		},
	});

	return (
		<div
			data-scope="data-table"
			data-part="container"
			data-testid={props.testId ? `${props.testId}--container` : undefined}
		>
			<Table testId={props.testId ? `${props.testId}--table` : undefined}>
				<thead data-testid={props.testId ? `${props.testId}--thead` : undefined}>
					<For each={table.getHeaderGroups()}>
						{(headerGroup) => (
							<tr data-testid={props.testId ? `${props.testId}--tr` : undefined}>
								<For each={headerGroup.headers}>
									{(header) => (
										<th data-testid={props.testId ? `${props.testId}--th` : undefined}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</th>
									)}
								</For>
							</tr>
						)}
					</For>
				</thead>
				<tbody data-testid={props.testId ? `${props.testId}--tbody` : undefined}>
					{table.getRowModel().rows?.length ? (
						<For each={table.getRowModel().rows}>
							{(row) => (
								<tr
									data-state={row.getIsSelected() && "selected"}
									data-testid={props.testId ? `${props.testId}--tr` : undefined}
								>
									<For each={row.getVisibleCells()}>
										{(cell) => (
											<td data-testid={props.testId ? `${props.testId}--td` : undefined}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</td>
										)}
									</For>
								</tr>
							)}
						</For>
					) : (
						<tr data-testid={props.testId ? `${props.testId}--row` : undefined}>
							<td
								colSpan={props.columns.length}
								class="h-24 text-center"
							>
								No results.
							</td>
						</tr>
					)}
				</tbody>
			</Table>

			{controlProps.loading && (
				<div
					data-scope="data-table"
					data-part="loading"
					data-testid={props.testId ? `${props.testId}--loading` : undefined}
				>
					<Loader
						size="xl"
						testId={props.testId ? `${props.testId}--loader` : undefined}
					/>
				</div>
			)}
		</div>
	);
}
