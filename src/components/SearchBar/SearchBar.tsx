import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

type SearchProps = {
  onSearch: (searchText: string) => void;
};

export const SearchBar = ({ onSearch }: SearchProps) => {
  const [textInInput, setTextInInput] = useState("");

  const handleSearch = () => {
    onSearch(textInInput);
  };

  return (
    <Container>
      <Form className="d-flex">
        <Form.Control
          placeholder="Search Characters"
          onChange={(event) => {
            setTextInInput(event.target.value);
          }}
          type="search"
          className="me-2"
          aria-label="Search"
        />
        <Button
          onClick={handleSearch}
          className="search-button"
          variant="outline-secondary"
        >
          Search
        </Button>
      </Form>
    </Container>
  );
};
