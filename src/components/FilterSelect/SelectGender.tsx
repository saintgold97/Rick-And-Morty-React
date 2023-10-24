import React, { useState } from "react";
import { Form } from "react-bootstrap";

type SearchProps = {
  onChange: (SelectGender: string) => void;
};

export const SelectGender = ({ onChange }: SearchProps) => {
  const [gender] = useState("");
  return (
        <Form.Select
        style={{marginLeft:"1rem"}}
          title="Filter"
          value={gender}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        >
          <optgroup label="Select Gender">
            <option>Select Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </optgroup>
        </Form.Select>
  );
};
