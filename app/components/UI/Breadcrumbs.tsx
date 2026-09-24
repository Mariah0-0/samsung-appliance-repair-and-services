import Link from "next/link";
import { Fragment } from "react";

export type BreadcrumbItem = {
  name: string;
  href?: string;
};

export default function Breadcrumbs({
  items,
  variant = "light",
}: {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}) {
  const linkClass =
    variant === "dark"
      ? "hover:underline hover:text-background"
      : "hover:underline";
  const listClass =
    variant === "dark"
      ? "flex items-center gap-1.5 text-xs font-light text-white/70"
      : "flex items-center gap-1.5 text-xs font-light text-[#989176]";
  const currentClass =
    variant === "dark" ? "text-background" : "text-foreground";

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className={listClass}>
        {items.map((item, index) => (
          <Fragment key={item.name}>
            <li
              className={!item.href ? currentClass : undefined}
              aria-current={!item.href ? "page" : undefined}
            >
              {item.href ? (
                <Link href={item.href} className={linkClass}>
                  {item.name}
                </Link>
              ) : (
                item.name
              )}
            </li>
            {index < items.length - 1 && <li aria-hidden="true">/</li>}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
