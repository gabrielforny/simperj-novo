import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  width?: "content" | "wide";
  children: ReactNode;
}

export function Container({ as: Tag = "div", width = "wide", className, children, ...rest }: ContainerProps) {
  return (
    <Tag className={cn(width === "wide" ? "container-wide" : "container-content", className)} {...rest}>
      {children}
    </Tag>
  );
}
