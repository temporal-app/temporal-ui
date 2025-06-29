import { Avatar as ArkAvatar } from "@ark-ui/react/avatar";
import { type AvatarProps as AvatarPropsCore, cx, getInitials } from "@temporal-ui/core";
import { UserIcon } from "lucide-react";
import { forwardRef } from "react";

export interface AvatarProps extends AvatarPropsCore {}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps & ArkAvatar.RootProps>((props, ref) => {
	const { name, src, className, ...rootProps } = props;
	const size = props.size !== "md" ? props.size : "";
	const baseClass = [ "avatar", size ].filter(Boolean).join("-");
	return (
		<ArkAvatar.Root
			ref={ref}
			className={cx(baseClass, className)}
			{...rootProps}
		>
			<ArkAvatar.Fallback>{getInitials(name) || <UserIcon />}</ArkAvatar.Fallback>
			<ArkAvatar.Image src={src} alt={name} />
		</ArkAvatar.Root>
	);
});
