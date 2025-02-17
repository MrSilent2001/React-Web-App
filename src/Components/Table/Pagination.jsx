import React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

// Handle page change
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-end mt-4">
      <div className="flex items-center space-x-2">
        
        {/* Button to navigate to the first page */}
        <Button
          variant="outline"
          className="px-2 py-1 bg-purple-200 hover:bg-purple-300"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          aria-label="First Page"
        >
          <DoubleArrowLeftIcon className="w-4 h-4" />
        </Button>

        {/* Button to navigate to the previous page */}
        <Button
          variant="outline"
          className="px-2 py-1 bg-purple-200 hover:bg-purple-300"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          aria-label="Previous Page"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </Button>

        {/* Dynamically render the page numbers */}
        {pageNumbers.map((pageNumber) => {
          const isCurrentPage = pageNumber === currentPage;
          return (
            <button
              key={pageNumber}
              className={cn(
                "rounded-lg py-1 px-3",
                isCurrentPage
                  ? "bg-purple-600 text-white"
                  : "bg-purple-200  text-black hover:bg-purple-300"
              )}
              onClick={() => handlePageChange(pageNumber)}
              aria-current={isCurrentPage ? "page" : undefined}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* Button to navigate to the next page */}
        <Button
          variant="outline"
          className="px-2 py-1 bg-purple-200 hover:bg-purple-300"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          aria-label="Next Page"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </Button>

        {/* Button to navigate to the last page */}
        <Button
          variant="outline"
          className="px-2 py-1 bg-purple-200 hover:bg-purple-300"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Last Page"
        >
          <DoubleArrowRightIcon className="w-4 h-4 " />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
