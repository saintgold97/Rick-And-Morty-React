import React from "react";
import { SelectStatus } from "./SelectStatus";
import { SelectGender } from "./SelectGender";

type FilterSelectProps = {
  onChangeStatus: (status: string) => void;
  onChangeGender: (gender: string) => void;
};

export const FilterSelect = ({
  onChangeStatus,
  onChangeGender,
}: FilterSelectProps) => {
  return (
      <div style={{display:"flex"}}>
        <SelectStatus onChange={onChangeStatus} />
        <SelectGender onChange={onChangeGender} />
      </div>
  );
};
