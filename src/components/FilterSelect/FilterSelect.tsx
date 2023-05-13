import React from "react";
import { SelectStatus } from "./SelectStatus";
import { SelectGender } from "./SelectGender";
import { Container } from "react-bootstrap";

type FilterSelectProps = {
  onChangeStatus: (status: string) => void;
  onChangeGender: (gender: string) => void;
};

export const FilterSelect = ({
  onChangeStatus,
  onChangeGender,
}: FilterSelectProps) => {
  return (
    <Container>
      <div style={{display:"flex"}}>
        <SelectStatus onChange={onChangeStatus} />
        <SelectGender onChange={onChangeGender} />
      </div>
    </Container>
  );
};
