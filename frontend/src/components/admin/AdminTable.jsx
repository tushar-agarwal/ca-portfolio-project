import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

function AdminTable({
  rows,
  columns,
  emptyText,
  searchPlaceholder = "Search records...",
}) {
  const [search, setSearch] = useState("");
  const filteredRows = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return rows;
    return rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value ?? "").toLowerCase().includes(query),
      ),
    );
  }, [rows, search]);

  return (
    <div>
      <label className="mb-4 flex max-w-sm items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-slate-400 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
        <FiSearch aria-hidden="true" size={17} />
        <span className="sr-only">Search records</span>
        <input
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />
      </label>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className="px-5 py-3.5 font-semibold">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredRows.map((row) => (
              <tr key={row.id} className="align-top hover:bg-slate-50/70">
                {columns.map((column) => (
                  <td key={column.key} className="max-w-xs px-5 py-4 text-slate-600">
                    {column.render
                      ? column.render(row)
                      : row[column.key] || "—"}
                  </td>
                ))}
              </tr>
            ))}
            {filteredRows.length === 0 && (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-5 py-12 text-center text-slate-500"
                >
                  {rows.length === 0 ? emptyText : "No records match your search."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Showing {filteredRows.length} of {rows.length} records
      </p>
    </div>
  );
}

export default AdminTable;
