import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

const FIELD_CLASS =
  "w-full min-h-11 rounded-[var(--radius-sm)] border border-[var(--border-strong)] bg-[var(--background)] px-3.5 py-2.5 text-[var(--text)] text-[0.9375rem] placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)] outline-none transition-colors";

interface BaseProps {
  label: string;
  id: string;
  error?: string | undefined;
  hint?: string | undefined;
  required?: boolean;
}

type InputFieldProps = BaseProps & InputHTMLAttributes<HTMLInputElement> & { as?: "input" };
type TextareaFieldProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement> & { as: "textarea" };

export function FormField(props: InputFieldProps | TextareaFieldProps) {
  const { label, id, error, hint, required, className, as, ...rest } = props;
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy = [error && errorId, hint && hintId].filter(Boolean).join(" ") || undefined;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--text)] mb-1.5">
        {label}
        {required && (
          <span aria-hidden="true" className="text-[var(--danger)]">
            {" "}
            *
          </span>
        )}
      </label>
      {hint && (
        <p id={hintId} className="text-sm text-[var(--text-muted)] mb-1.5">
          {hint}
        </p>
      )}
      {as === "textarea" ? (
        <textarea
          id={id}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(FIELD_CLASS, "min-h-32 resize-y", className)}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(FIELD_CLASS, className)}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-[var(--danger)]">
          {error}
        </p>
      )}
    </div>
  );
}
