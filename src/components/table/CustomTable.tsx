import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export interface Column<T> {
  label: string;
  field: keyof T;
  align?: "left" | "right" | "center";
  render?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  keyField: keyof T;
  emptyMessage?: string;
}

function CustomTable<T>({
  columns,
  rows,
  keyField,
  emptyMessage = "No data available",
}: DataTableProps<T>) {
  const hasData = rows && rows.length > 0;

  return (
    <TableContainer component={Paper} className="rounded-lg shadow-md">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-100">
            {columns.map((col) => (
              <TableCell
                key={col.label}
                align={col.align ?? "left"}
                className="font-semibold text-gray-700"
              >
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {hasData ? (
            rows.map((row) => (
              <TableRow
                key={String(row[keyField])}
                className="hover:bg-gray-50"
              >
                {columns.map((col) => (
                  <TableCell
                    key={String(col.field)}
                    align={col.align ?? "left"}
                    className="text-gray-600"
                  >
                    {col.render ? col.render(row) : String(row[col.field])}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                align="center"
                className="py-6 text-gray-500 italic"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomTable;
