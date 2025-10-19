import type { BaseComponent } from "../base";

export interface DataTableProps<T> extends BaseComponent<T> {
	loading?: boolean;
}