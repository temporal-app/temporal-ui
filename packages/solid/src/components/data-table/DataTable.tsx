import { createSolidTable, flexRender, getCoreRowModel, getFilteredRowModel, type TableOptions } from "@tanstack/solid-table";
import type { BaseComponent } from "@temporal-ui/core/base";
import { For, type JSX } from "solid-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";

export interface DataTableProps<TData>
	extends BaseComponent<JSX.Element>,
		Omit<TableOptions<TData>, "getCoreRowModel"> {
	getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
}

export function DataTable<TData>(props: DataTableProps<TData>) {
	const table = createSolidTable({
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		...props,
		get data() {
			return props.data;
		},
	});

	return (
		<div
			data-scope="data-table"
			data-part="container"
			data-testid={props.testId ? `${props.testId}--container` : undefined}
		>
			<Table testId={props.testId ? `${props.testId}--table` : undefined}>
				<TableHeader testId={props.testId ? `${props.testId}--thead` : undefined}>
					<For each={table.getHeaderGroups()}>
						{(headerGroup) => (
							<TableRow testId={props.testId ? `${props.testId}--tr` : undefined}>
								<For each={headerGroup.headers}>
									{(header) => (
										<TableHead testId={props.testId ? `${props.testId}--th` : undefined}>
											{header.isPlaceholder
												? null
												: flexRender(header.column.columnDef.header, header.getContext())}
										</TableHead>
									)}
								</For>
							</TableRow>
						)}
					</For>
				</TableHeader>
				<TableBody testId={props.testId ? `${props.testId}--tbody` : undefined}>
					{table.getRowModel().rows?.length ? (
						<For each={table.getRowModel().rows}>
							{(row) => (
								<TableRow
									data-state={row.getIsSelected() && "selected"}
									testId={props.testId ? `${props.testId}--tr` : undefined}
								>
									<For each={row.getVisibleCells()}>
										{(cell) => (
											<TableCell testId={props.testId ? `${props.testId}--td` : undefined}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</TableCell>
										)}
									</For>
								</TableRow>
							)}
						</For>
					) : (
						<TableRow testId={props.testId ? `${props.testId}--row` : undefined}>
							<TableCell
								colSpan={props.columns.length}
								className="h-24 text-center"
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
