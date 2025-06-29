import { cx, type LoaderProps as CoreLoaderProps } from "@temporal-ui/core";

export interface LoaderProps extends CoreLoaderProps<React.ReactNode>, React.HTMLAttributes<HTMLDivElement> { }

export function Loader(props: LoaderProps) {

	const { size = "md", className, ...rest } = props;
	const baseClass = [ "loader", size !== "md" ? size : "" ].filter(Boolean).join("-");

	return (
		<div
			className={cx(baseClass, className)}
			{...rest}
		/>
	);
}
