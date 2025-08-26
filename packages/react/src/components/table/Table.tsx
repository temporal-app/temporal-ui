import type {
	TableBodyProps as CoreTableBodyProps,
	TableCaptionProps as CoreTableCaptionProps,
	TableCellProps as CoreTableCellProps,
	TableFooterProps as CoreTableFooterProps,
	TableHeaderProps as CoreTableHeaderProps,
	TableHeadProps as CoreTableHeadProps,
	TableProps as CoreTableProps,
	TableRowProps as CoreTableRowProps,
} from "@temporal-ui/core/table";

export interface TableProps extends CoreTableProps<React.ReactNode>, React.ComponentProps<"table"> {}

export function Table({ testId, ...props }: TableProps) {
	return (
		<div
			data-scope="table"
			data-part="container"
			data-testid={testId ? `${testId}--container` : undefined}
		>
			<table
				{...props}
				data-scope="table"
				data-part="table"
				data-testid={testId ? `${testId}--table` : undefined}
			/>
		</div>
	);
}

export interface TableHeaderProps extends CoreTableHeaderProps<React.ReactNode>, React.ComponentProps<"thead"> {}

export function TableHeader({ testId, ...props }: TableHeaderProps) {
	return (
		<thead
			{...props}
			data-testid={testId}
		/>
	);
}

export interface TableBodyProps extends CoreTableBodyProps<React.ReactNode>, React.ComponentProps<"tbody"> {}

export function TableBody({ testId, ...props }: TableBodyProps) {
	return (
		<tbody
			{...props}
			data-testid={testId}
		/>
	);
}

export interface TableFooterProps extends CoreTableFooterProps<React.ReactNode>, React.ComponentProps<"tfoot"> {}

export function TableFooter({ testId, ...props }: TableFooterProps) {
	return (
		<tfoot
			{...props}
			data-testid={testId}
		/>
	);
}

export interface TableHeadProps extends CoreTableHeadProps<React.ReactNode>, React.ComponentProps<"th"> {}

export function TableHead({ testId, ...props }: TableHeadProps) {
	return (
		<th
			{...props}
			data-testid={testId}
		/>
	);
}

export interface TableRowProps extends CoreTableRowProps<React.ReactNode>, React.ComponentProps<"tr"> {}

export function TableRow({ testId, ...props }: TableRowProps) {
	return (
		<tr
			{...props}
			data-testid={testId}
		/>
	);
}

export interface TableCellProps extends CoreTableCellProps<React.ReactNode>, React.ComponentProps<"td"> {}

export function TableCell({ testId, ...props }: TableCellProps) {
	return (
		<td
			{...props}
			data-testid={testId}
		/>
	);
}

export interface TableCaptionProps extends CoreTableCaptionProps<React.ReactNode>, React.ComponentProps<"caption"> {}

export function TableCaption({ testId, ...props }: TableCaptionProps) {
	return (
		<caption
			{...props}
			data-testid={testId}
		/>
	);
}
