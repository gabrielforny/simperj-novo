export function formatDate(iso: string, options?: Intl.DateTimeFormatOptions): string {
  const date = new Date(`${iso}T00:00:00`);
  return date.toLocaleDateString("pt-BR", options ?? { day: "2-digit", month: "long", year: "numeric" });
}

export function formatDateShort(iso: string): string {
  return formatDate(iso, { day: "2-digit", month: "short", year: "numeric" });
}
