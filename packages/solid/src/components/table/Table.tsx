import type { HTMLProps } from "@ark-ui/solid";
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
import { splitProps, type JSX } from "solid-js";

export interface TableProps extends CoreTableProps<JSX.Element>, HTMLProps<"table"> {}

export function Table(_props: TableProps) {
	const [props, elementProps] = splitProps(_props, ["className", "class", "children", "testId"]);
	return (
		<div
			data-scope="table"
			data-part="container"
			data-testid={props.testId ? `${props.testId}--container` : undefined}
		>
			<table
				{...elementProps}
				class={props.className ?? props.class}
				data-scope="table"
				data-part="table"
				data-testid={props.testId ? `${props.testId}--table` : undefined}
			>
				{props.children}
			</table>
		</div>
	);
}

export interface TableHeaderProps extends CoreTableHeaderProps<JSX.Element>, HTMLProps<"thead"> {}

export function TableHeader(props: TableHeaderProps) {
	return (
		<thead
			{...props}
			data-testid={props.testId}
		/>
	);
}

export interface TableBodyProps extends CoreTableBodyProps<JSX.Element>, HTMLProps<"tbody"> {}

export function TableBody(props: TableBodyProps) {
	return (
		<tbody
			{...props}
			data-testid={props.testId}
		/>
	);
}

export interface TableFooterProps extends CoreTableFooterProps<JSX.Element>, HTMLProps<"tfoot"> {}

export function TableFooter(props: TableFooterProps) {
	return (
		<tfoot
			{...props}
			data-testid={props.testId}
		/>
	);
}

export interface TableHeadProps extends CoreTableHeadProps<JSX.Element>, HTMLProps<"th"> {}

export function TableHead(props: TableHeadProps) {
	return (
		<th
			{...props}
			data-testid={props.testId}
		/>
	);
}

export interface TableRowProps extends CoreTableRowProps<JSX.Element>, HTMLProps<"tr"> {}

export function TableRow(props: TableRowProps) {
	return (
		<tr
			{...props}
			data-testid={props.testId}
		/>
	);
}

export interface TableCellProps extends CoreTableCellProps<JSX.Element>, HTMLProps<"td"> {}

export function TableCell(props: TableCellProps) {
	return (
		<td
			{...props}
			data-testid={props.testId}
		/>
	);
}

export interface TableCaptionProps extends CoreTableCaptionProps<JSX.Element>, HTMLProps<"caption"> {}

export function TableCaption(props: TableCaptionProps) {
	return (
		<caption
			{...props}
			data-testid={props.testId}
		/>
	);
}
