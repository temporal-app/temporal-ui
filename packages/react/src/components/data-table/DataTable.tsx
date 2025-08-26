import { flexRender, getCoreRowModel, useReactTable, type TableOptions } from "@tanstack/react-table";
import type { BaseComponent } from "@temporal-ui/core/base";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../table";

export interface DataTableProps<TData>
	extends BaseComponent<React.ReactNode>,
		Omit<TableOptions<TData>, "getCoreRowModel"> {
	getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
}

export function DataTable<TData>({ testId, ...props }: DataTableProps<TData>) {
	const table = useReactTable({
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
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow
							key={headerGroup.id}
							testId={testId ? `${testId}--tr` : undefined}
						>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										key={header.id}
										testId={testId ? `${testId}--th` : undefined}
									>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody testId={testId ? `${testId}--tbody` : undefined}>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								testId={testId ? `${testId}--tr` : undefined}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell
										key={cell.id}
										testId={testId ? `${testId}--td` : undefined}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
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
