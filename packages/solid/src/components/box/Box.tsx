import type { HTMLProps } from "@ark-ui/solid";
import type { BoxProps as CoreBoxProps } from "@temporal-ui/core/box";
import { cx } from "@temporal-ui/core/utils/cx";
import {splitProps, type JSX, children} from 'solid-js';

export interface BoxProps extends CoreBoxProps<JSX.Element>, HTMLProps<'div'> { }

export function Box(_props: BoxProps) {

	const [props, elementProps] = splitProps(_props, [
		"children", "class", "className", "style",
		"p", "px", "pl", "pr", "pt", "pb", "py",
		"m", "mx", "ml", "mr", "mt", "mb", "my",
		"w", "h",
	]);

	const style: JSX.CSSProperties = {};

	if (props.p) {
		style.padding = `calc(var(--spacing) * ${ props.p })`;
	}
	if (props.px || props.pl) {
		style[ "padding-left" ] = `calc(var(--spacing) * ${ props.pl ?? props.px })`;
	}
	if (props.pr || props.px) {
		style[ "padding-right" ] = `calc(var(--spacing) * ${ props.pr ?? props.px })`;
	}
	if (props.pt || props.py) {
		style[ "padding-top" ] = `calc(var(--spacing) * ${ props.pt ?? props.py })`;
	}
	if (props.pb || props.py) {
		style[ "padding-bottom" ] = `calc(var(--spacing) * ${ props.pb ?? props.py })`;
	}
	if (props.m) {
		style.margin = `calc(var(--spacing) * ${ props.m })`;
	}
	if (props.mx || props.ml) {
		style[ "margin-left" ] = `calc(var(--spacing) * ${ props.ml ?? props.mx })`;
	}
	if (props.mr || props.mx) {
		style[ "margin-right" ] = `calc(var(--spacing) * ${ props.mr ?? props.mx })`;
	}
	if (props.mt || props.my) {
		style[ "margin-top" ] = `calc(var(--spacing) * ${ props.mt ?? props.my })`;
	}
	if (props.mb || props.my) {
		style[ "margin-bottom" ] = `calc(var(--spacing) * ${ props.mb ?? props.my })`;
	}
	if (props.w) {
		style.width = typeof props.w === 'string' ? props.w : `${ props.w }px`;
	}
	if (props.h) {
		style.height = typeof props.h === 'string' ? props.h : `${ props.h }px`;
	}


	return (
		<div
			{...elementProps}
			class={cx(props.className, props.class)}
			style={{ ...style, ...(props.style as JSX.CSSProperties)}}
		>
			{children(() => props.children)}
		</div>
	);
}
