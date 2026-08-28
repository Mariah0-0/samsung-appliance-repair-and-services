import { ReactNode, ComponentType } from "react";
import { IconProps } from "../../types/icon";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
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
    "inline-flex flex-1 min-[430px]:flex-0 min-w-fit items-center justify-center h-13.25 sm:h-15 md:h-17.25 gap-2.5 sm:gap-3.25 md:gap-4.25 px-2 sm:px-5 md:px-6.5 min-[430px]:px-4 font-medium uppercase text-[0.875rem] sm:text-[1rem] tracking-wide transition-colors cursor-pointer";

  const variantStyles: Record<
    "primary" | "secondary",
    { className: string; iconProps: IconProps }
  > = {
    primary: {
      className: "bg-accent text-white border border-accent hover:bg-[#990F00]",
      iconProps: { color: "#ffffff", height: 24 },
    },
    secondary: {
      className:
        "bg-transparent text-primary border border-primary hover:text-background hover:bg-primary",
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
      <a href={href} className={combinedStyles}>
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
