import { Button } from "react-bootstrap";

interface IPages {
  currentPage: number;
  onPageChange: (currentPage: number) => void;
  totalPages: number;
}

export const Pages: React.FC<IPages> = ({
  currentPage,
  onPageChange,
  totalPages,
}) => {
  return (
    <div className="mt-3 mb-3">
      <Button
        onClick={() => {
          onPageChange(Math.max(1, Number(currentPage) - 1));
        }}
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
        variant="outline-secondary"
      >
        Next Page
      </Button>
    </div>
  );
};
