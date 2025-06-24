import { Avatar as ArkAvatar } from "@ark-ui/solid/avatar";
import { type AvatarProps as AvatarPropsCore, cx, getInitials } from "@temporal-ui/core";
import { UserIcon } from "lucide-solid";
import { Show, splitProps } from "solid-js";

export interface AvatarProps extends AvatarPropsCore {

}

export const Avatar = (props: AvatarProps & ArkAvatar.RootProps) => {
	const [localProps, rootProps] = splitProps(props, ['name', 'src', 'size', 'class'])
	const size = localProps.size !== "md" ? localProps.size : "";
	const baseClass = ["avatar", size].filter(Boolean).join("-");
	return (
		<ArkAvatar.Root {...rootProps} class={cx(baseClass, localProps.class)}>
			<ArkAvatar.Fallback>
				<Show when={localProps.name} fallback={<UserIcon />}>
					{getInitials(localProps.name)}
				</Show>
			</ArkAvatar.Fallback>
			<ArkAvatar.Image src={localProps.src} alt={localProps.name} />
		</ArkAvatar.Root>
	)
}
