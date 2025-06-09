import { cx, type LoaderProps } from "@temporal-ui/core";

export function Loader(props: LoaderProps) {

	const size = props.size !== "md" ? props.size : "";
	const baseClass = ["loader", size].filter(Boolean).join("-");

	return (
		<div
			className={cx("loader", baseClass, props.class)}
		/>
	)
}
