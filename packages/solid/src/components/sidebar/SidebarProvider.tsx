import type { HTMLProps } from "@ark-ui/solid";
import {
	SIDEBAR_KEYBOARD_SHORTCUT,
	SIDEBAR_STORAGE_KEY,
	type SidebarProviderProps as CoreSidebarProviderProps,
	type SidebarContextProps,
} from "@temporal-ui/core/sidebar";
import { cx } from "@temporal-ui/core/utils/cx";
import type { JSX } from "solid-js";
import { createContext, createEffect, createMemo, createSignal, splitProps, useContext } from "solid-js";
import { useIsMobile } from "../../hooks/is-mobile";
import { Box } from "../box";

export interface SidebarProviderProps
	extends CoreSidebarProviderProps<JSX.Element>,
		HTMLProps<"div"> {}

const SidebarContext = createContext<SidebarContextProps | null>(null);

export function SidebarProvider(_props: SidebarProviderProps) {
	const isMobile = useIsMobile();
	const [openMobile, setOpenMobile] = createSignal(false);
	const [props, boxProps] = splitProps(_props, [
		"defaultOpen",
		"open",
		"onOpenChange",
		"children",
		"style",
		"class",
		"className",
	]);

	const defaultOpen = () => props.defaultOpen ?? true;
	
	const [_open, _setOpen] = createSignal(defaultOpen());
	const open = () => props.open ?? _open();
	
	const setOpen = (value: boolean | ((value: boolean) => boolean)) => {
		const openState = typeof value === "function" ? value(open()) : value;
		if (props.onOpenChange) {
			props.onOpenChange(openState);
		} else {
			_setOpen(openState);
		}

		localStorage.setItem(SIDEBAR_STORAGE_KEY, openState.toString());
	};

	const toggleSidebar = () => {
		return isMobile() ? setOpenMobile((open) => !open) : setOpen((open) => !open);
	};

	createEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				toggleSidebar();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	});

	const state = createMemo(() => (open() ? "expanded" : "collapsed"));

	const contextValue = createMemo<SidebarContextProps>(() => ({
		state: state(),
		open: open(),
		setOpen,
		isMobile: isMobile(),
		openMobile: openMobile(),
		setOpenMobile,
		toggleSidebar,
	}));

	return (
		<SidebarContext.Provider value={contextValue()}>
			<Box
				{...boxProps}
				data-scope="sidebar"
				data-part="wrapper"
				class={cx("group/sidebar-wrapper", props.className, props.class)}
				style={props.style}
			>
				{props.children}
			</Box>
		</SidebarContext.Provider>
	);
}

export function useSidebar() {
	const context = useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.");
	}

	return context;
}