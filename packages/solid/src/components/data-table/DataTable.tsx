import { createSolidTable, flexRender, getCoreRowModel, getFilteredRowModel, type TableOptions } from "@tanstack/solid-table";
import type { DataTableProps as CoreDataTableProps } from "@temporal-ui/core/data-table";
import { For, splitProps, type JSX } from "solid-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";
import { Loader } from "../loader";

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
			<Table
				data-scope="data-table"
				testId={props.testId ? `${props.testId}--table` : undefined}
			>
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
