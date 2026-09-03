import { ReactNode, ComponentType } from "react";
import { IconProps } from "@/types/icon";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent-outline";
  icon?: ComponentType<IconProps>;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  href,
  onClick,
  className = "",
  disabled = false,
  target = "_blank",
}: ButtonProps) {
  const baseStyles =
    "inline-flex flex-1 min-[430px]:flex-0 min-w-fit items-center justify-center h-14 sm:h-14.5 gap-2.5 sm:gap-3.25 md:gap-4.25 px-3 sm:px-5 md:px-6.5 min-[430px]:px-4 uppercase text-[0.85rem] sm:text-[0.95rem] tracking-wide transition-colors cursor-pointer";

  const disabledStyles =
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none disabled:hover:bg-none";

  const variantStyles: Record<
    "primary" | "secondary" | "accent-outline",
    { className: string; iconProps: IconProps }
  > = {
    primary: {
      className:
        "bg-accent text-white font-medium border border-accent hover:bg-[#990F00]",
      iconProps: { color: "var(--background)", height: 24 },
    },
    secondary: {
      className:
        "bg-transparent text-primary font-medium border border-primary hover:text-background hover:bg-primary",
      iconProps: { color: "currentColor", height: 24 },
    },
    "accent-outline": {
      className:
        "bg-transparent text-background font-light border-2 border-accent hover:text-white hover:bg-accent",
      iconProps: { color: "currentColor", height: 24 },
    },
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant].className} ${disabledStyles} ${className}`;

  const iconElement = Icon && (
    <span className="flex shrink-0 items-center justify-center h-6 sm:h-6.75">
      <Icon {...variantStyles[variant].iconProps} />
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
