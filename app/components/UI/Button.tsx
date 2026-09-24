import { ReactNode, ComponentType } from "react";
import { IconProps } from "@/types/icon";

type ButtonColor = "primary" | "secondary" | "accent";
type ButtonStyle = "filled" | "outline";

type ButtonProps = {
  children: ReactNode;
  color?: ButtonColor;
  buttonStyle?: ButtonStyle;
  icon?: ComponentType<IconProps>;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function Button({
  children,
  color = "primary",
  buttonStyle = "filled",
  icon: Icon,
  href,
  onClick,
  className = "",
  disabled = false,
  target = "_blank",
}: ButtonProps) {
  const baseStyles = `
    inline-flex flex-1 min-[430px]:flex-0 min-w-fit items-center justify-center
    h-14 sm:h-14.5 gap-2.5 sm:gap-3.25 md:gap-4.25
    px-3 sm:px-5 md:px-6.5 min-[430px]:px-4 uppercase
    text-[0.85rem] sm:text-[0.95rem] tracking-wide transition-colors
    cursor-pointer
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    focus-visible:ring-accent focus-visible:ring-offset-background
  `;

  const disabledStyles =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

  const filledStyles: Record<
    ButtonColor,
    { className: string; iconColor: string }
  > = {
    primary: {
      className:
        "bg-primary text-background font-medium border border-primary hover:bg-primaryHover hover:border-primaryHover",
      iconColor: "var(--background)",
    },
    secondary: {
      className:
        "bg-secondary text-foreground font-medium border border-secondary hover:brightness-95",
      iconColor: "var(--foreground)",
    },
    accent: {
      className:
        "bg-accent text-white font-medium border border-accent hover:bg-accentHover hover:border-accentHover",
      iconColor: "var(--background)",
    },
  };

  const outlineStyles: Record<
    ButtonColor,
    { className: string; iconColor: string }
  > = {
    primary: {
      className:
        "bg-transparent text-primary font-medium border-2 border-primary hover:bg-primary hover:text-background",
      iconColor: "currentColor",
    },
    secondary: {
      className:
        "bg-transparent text-secondary font-medium border-2 border-secondary hover:bg-secondary hover:text-foreground",
      iconColor: "currentColor",
    },
    accent: {
      className:
        "bg-transparent text-accent font-medium border-2 border-accent hover:bg-accent hover:text-white",
      iconColor: "currentColor",
    },
  };

  const styleMap = {
    filled: filledStyles,
    outline: outlineStyles,
  } as const;

  const activeStyle = styleMap[buttonStyle][color];

  const combinedStyles = `${baseStyles} ${activeStyle.className} ${disabledStyles} ${className}`;

  const iconElement = Icon && (
    <span className="flex shrink-0 items-center justify-center h-6 sm:h-6.75">
      <Icon color={activeStyle.iconColor} height={24} />
    </span>
  );

  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        target={target}
        rel="noopener noreferrer"
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
            return;
          }
          if (onClick) onClick();
        }}
        className={`${combinedStyles} ${
          disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
      >
        {children}
        {iconElement}
      </a>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={combinedStyles}>
      {children}
      {iconElement}
    </button>
  );
}
