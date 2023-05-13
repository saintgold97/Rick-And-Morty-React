import { useState } from "react";
import { Button, Form } from "react-bootstrap";

type SearchProps = {
  onSearch: (searchText: string) => void;
};

export const SearchPage = ({ onSearch }: SearchProps) => {
  const [TextPage, setTextInPage] = useState("");

  const handleSearch = () => {
    onSearch(TextPage);
  };

  return (
    <div className="container">
      <Form className="d-flex">
        <Form.Control
          placeholder="Insert number page"
          onChange={(event) => {
            setTextInPage(event.target.value);
          }}
          type="search"
          className="me-2"
          aria-label="Search"
        />
        <Button onClick={handleSearch} className="search-button" variant="outline-primary">
          Search
        </Button>
      </Form>
    </div>
  );
};