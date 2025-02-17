import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "../ui/table";
import { cn } from "@/lib/utils";
import Pagination from "../Table/Pagination";

const TableWithPagination = ({
  columns,
  data,
  caption,
  itemsPerPage = 10,
  className,
  getRowId,
  onRowClick, 
  ...props
}) => {
  const [sortConfig, setSortConfig] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const sortedData = React.useMemo(() => {
    let sortableData = [...data];
    if (sortConfig !== null) {
      sortableData.sort((a, b) => {
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        if (typeof aValue === "number" && typeof bValue === "number") {
          return sortConfig.direction === "ascending"
            ? aValue - bValue
            : bValue - aValue;
        }

        const aStr = String(aValue).toLowerCase();
        const bStr = String(bValue).toLowerCase();

        if (aStr < bStr) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (aStr > bStr) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  // Handle pagination
  const paginatedData = React.useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, currentPage, itemsPerPage]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const getSortIndicator = (key) => {
    if (!sortConfig || sortConfig.key !== key) {
      return null;
    }
    return sortConfig.direction === "ascending" ? "sorted-asc" : "sorted-desc";
  };

  

  return (
    <div className="w-full">
      {/* Table component */}
      <div className="overflow-hidden border border-purple-300 rounded-lg">
        <Table className={cn("your-default-table-styles", className)} {...props}>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader className="text-nowrap bg-purple-40">
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={String(column.accessor)}
                  onClick={() => requestSort(column.accessor)}
                  className={cn("cursor-pointer select-none", getSortIndicator(column.accessor))}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      requestSort(column.accessor);
                    }
                  }}
                  aria-sort={
                    sortConfig?.key === column.accessor
                      ? sortConfig.direction === "ascending"
                        ? "ascending"
                        : "descending"
                      : "none"
                  }
                >
                  <span className="flex items-center">
                    {column.header}
                  </span>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="border-purple-200">
            {paginatedData.map((row) => {
              const rowKey = getRowId ? getRowId(row) : row.id;
              return (
                <TableRow
                  key={rowKey}
                  className="bg-white border cursor-pointer hover:bg-purple-30"
                  onClick={() => onRowClick(row)} 
                >
                  {columns.map((column) => (
                    <TableCell key={`${rowKey}-${String(column.accessor)}`}>
                      {column.render
                        ? column.render(row[column.accessor], row)
                        : String(row[column.accessor])}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default TableWithPagination;
