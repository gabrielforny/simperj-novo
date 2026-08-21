import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/cn";

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  delay?: number;
  children: ReactNode;
}

export function Reveal({ as: Tag = "div", delay = 0, className, children, style, ...rest }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(16px)",
        transition: `opacity var(--duration-slow) var(--ease-emphasized) ${delay}ms, transform var(--duration-slow) var(--ease-emphasized) ${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
