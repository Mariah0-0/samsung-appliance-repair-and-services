import { ComponentType } from "react";
import { IconProps } from "@/types/icon";
import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "whatsapp";
  position?: "left" | "right";
  icon: ComponentType<IconProps>;
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
};

export default function FloatingCTA({
  variant = "primary",
  position = "right",
  icon: Icon,
  href,
  onClick,
  className = "",
  label,
}: ButtonProps) {
  const baseStyles =
    "fixed bottom-4 z-5 inline-flex items-center justify-center h-14.5 w-14.5 rounded-full shadow-[0px_2px_4px_0px_rgba(0,0,0,0.20)] transition-colors cursor-pointer";

  const variantStyles: Record<
    "primary" | "whatsapp",
    { className: string; iconProps: IconProps }
  > = {
    primary: {
      className: "bg-primary hover:bg-primaryHover",
      iconProps: { color: "var(--background)", height: 32 },
    },
    whatsapp: {
      className: "bg-[#25D366] hover:bg-[#188741]",
      iconProps: { color: "var(--background)", height: 32 },
    },
  };

  const positionStyles: Record<"left" | "right", string> = {
    right: "right-4",
    left: "left-4",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant].className} ${positionStyles[position]} ${className}`;

  const iconElement = (
    <span className="flex shrink-0 items-center justify-center h-6 sm:h-6.75">
      <Icon {...variantStyles[variant].iconProps} />
    </span>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        aria-label={label}
        className={combinedStyles}
      >
        {iconElement}
      </Link>
    );
  }

  return (
    <button onClick={onClick} aria-label={label} className={combinedStyles}>
      {iconElement}
    </button>
  );
}
