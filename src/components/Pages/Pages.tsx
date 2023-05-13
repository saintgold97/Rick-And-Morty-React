import React from "react";
import { Button } from "react-bootstrap";

export const Pages = ({ currentPage, onPageChange, totalPages }: any) => {
  return (
    <div>
      <Button
        onClick={() => {
          onPageChange(Math.max(1, currentPage - 1));
        }}
        className="search-button"
        variant="outline-secondary"
      >
        Prev Page
      </Button>
      <span style={{ padding: "1rem" }}>{currentPage}</span>
      <Button
        onClick={() => {
          onPageChange(
            totalPages > currentPage ? currentPage + 1 : currentPage
          );
        }}
        className="search-button"
        variant="outline-secondary"
      >
        Next Page
      </Button>
    </div>
  );
};
