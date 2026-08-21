export interface TableColumn<T> {
  key: string;
  header: string;
  render: (row: T) => React.ReactNode;
}

interface ResponsiveTableProps<T> {
  columns: TableColumn<T>[];
  rows: T[];
  getRowKey: (row: T) => string;
  caption?: string;
}

/** Desktop: tabela HTML semântica real. Mobile: cards empilhados label/valor (sem scroll horizontal forçado). */
export function ResponsiveTable<T>({ columns, rows, getRowKey, caption }: ResponsiveTableProps<T>) {
  return (
    <>
      <div className="hidden md:block overflow-x-auto border border-[var(--border)] rounded-[var(--radius-md)]">
        <table className="w-full text-left text-sm">
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className="bg-[var(--surface)] border-b border-[var(--border)]">
              {columns.map((col) => (
                <th key={col.key} scope="col" className="px-4 py-3 font-semibold text-[var(--text)] whitespace-nowrap">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={getRowKey(row)} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--surface)] transition-colors">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-3 align-top text-[var(--text-muted)]">
                    {col.render(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="md:hidden space-y-4">
        {rows.map((row) => (
          <li key={getRowKey(row)} className="border border-[var(--border)] rounded-[var(--radius-md)] p-4">
            <dl className="space-y-2">
              {columns.map((col) => (
                <div key={col.key} className="flex flex-col gap-0.5">
                  <dt className="eyebrow text-[var(--text-muted)]">{col.header}</dt>
                  <dd className="text-[var(--text)] text-sm">{col.render(row)}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
