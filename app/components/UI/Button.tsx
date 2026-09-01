import { ReactNode, ComponentType } from "react";
import { IconProps } from "@/types/icon";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent-outline";
  icon?: ComponentType<IconProps>;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex flex-1 min-[430px]:flex-0 min-w-fit items-center justify-center h-12.25 sm:h-12.5 md:h-13 gap-2.5 sm:gap-3.25 md:gap-4.25 px-3 sm:px-5 md:px-6.5 min-[430px]:px-4 uppercase text-[0.85rem] sm:text-[0.95rem] tracking-wide transition-colors cursor-pointer";

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

  const combinedStyles = `${baseStyles} ${variantStyles[variant].className} ${className}`;

  const iconElement = Icon && (
    <span className="flex shrink-0 items-center justify-center h-6 sm:h-6.75">
      <Icon {...variantStyles[variant].iconProps} />
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" className={combinedStyles}>
        {children}
        {iconElement}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
      {iconElement}
    </button>
  );
}
