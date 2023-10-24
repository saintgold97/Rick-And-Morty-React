import React, { useState } from "react";
import { Form } from "react-bootstrap";

type SearchProps = {
  onChange: (SelectStatus: string) => void;
};

export const SelectStatus = ({ onChange }: SearchProps) => {
  const [status] = useState("");
  return (
        <Form.Select
          title="Filter"
          value={status}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        >
          <optgroup label="Status">
            <option>Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </optgroup>
        </Form.Select>
  );
};
