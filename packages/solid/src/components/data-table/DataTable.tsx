import { createSolidTable, flexRender, getCoreRowModel, type TableOptions } from "@tanstack/solid-table";
import type { BaseComponent } from "@temporal-ui/core/base";
import { For, type JSX } from "solid-js";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";

export interface DataTableProps<TData>
	extends BaseComponent<JSX.Element>,
		Omit<TableOptions<TData>, "getCoreRowModel"> {
	getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
}

export function DataTable<TData>({ testId, ...props }: DataTableProps<TData>) {
	const table = createSolidTable({
		getCoreRowModel: getCoreRowModel(),
		...props,
	});

	return (
		<div
			data-scope="data-table"
			data-part="container"
			data-testid={testId ? `${testId}--container` : undefined}
		>
			<Table testId={testId ? `${testId}--table` : undefined}>
				<TableHeader testId={testId ? `${testId}--thead` : undefined}>
					<For each={table.getHeaderGroups()}>
						{(headerGroup) => (
							<TableRow testId={testId ? `${testId}--tr` : undefined}>
								<For each={headerGroup.headers}>
									{(header) => (
										<TableHead testId={testId ? `${testId}--th` : undefined}>
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
				<TableBody testId={testId ? `${testId}--tbody` : undefined}>
					{table.getRowModel().rows?.length ? (
						<For each={table.getRowModel().rows}>
							{(row) => (
								<TableRow
									data-state={row.getIsSelected() && "selected"}
									testId={testId ? `${testId}--tr` : undefined}
								>
									<For each={row.getVisibleCells()}>
										{(cell) => (
											<TableCell testId={testId ? `${testId}--td` : undefined}>
												{flexRender(cell.column.columnDef.cell, cell.getContext())}
											</TableCell>
										)}
									</For>
								</TableRow>
							)}
						</For>
					) : (
						<TableRow testId={testId ? `${testId}--row` : undefined}>
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
