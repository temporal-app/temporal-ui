import { flexRender, getCoreRowModel, useReactTable, type TableOptions } from "@tanstack/react-table";
import type { DataTableProps as CoreDataTableProps } from "@temporal-ui/core/data-table";
import { Loader } from "../loader";
import { Table } from "../table";

export interface DataTableProps<TData>
	extends CoreDataTableProps<React.ReactNode>,
		Omit<TableOptions<TData>, "getCoreRowModel"> {
	getCoreRowModel?: TableOptions<TData>["getCoreRowModel"];
}

export function DataTable<TData>(props: DataTableProps<TData>) {
	const { loading, testId, ...tableProps } = props;
	const table = useReactTable({
		getCoreRowModel: getCoreRowModel(),
		...tableProps,
	});

	return (
		<div
			data-scope="data-table"
			data-part="container"
			data-testid={testId ? `${testId}--container` : undefined}
		>
			<Table testId={testId ? `${testId}--table` : undefined}>
				<thead data-testid={testId ? `${testId}--thead` : undefined}>
					{table.getHeaderGroups().map((headerGroup) => (
						<tr
							key={headerGroup.id}
							data-testid={testId ? `${testId}--tr` : undefined}
						>
							{headerGroup.headers.map((header) => {
								return (
									<th
										key={header.id}
										data-testid={testId ? `${testId}--th` : undefined}
									>
										{header.isPlaceholder
											? null
											: flexRender(header.column.columnDef.header, header.getContext())}
									</th>
								);
							})}
						</tr>
					))}
				</thead>
				<tbody data-testid={testId ? `${testId}--tbody` : undefined}>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<tr
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								data-testid={testId ? `${testId}--tr` : undefined}
							>
								{row.getVisibleCells().map((cell) => (
									<td
										key={cell.id}
										data-testid={testId ? `${testId}--td` : undefined}
									>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</td>
								))}
							</tr>
						))
					) : (
						<tr data-testid={testId ? `${testId}--row` : undefined}>
							<td
								colSpan={props.columns.length}
								className="h-24 text-center"
							>
								No results.
							</td>
						</tr>
					)}
				</tbody>
			</Table>
			{loading && (
				<div
					data-scope="data-table"
					data-part="loading"
					data-testid={testId ? `${testId}--loading` : undefined}
				>
					<Loader
						size="xl"
						testId={testId ? `${testId}--loader` : undefined}
					/>
				</div>
			)}
		</div>
	);
}
