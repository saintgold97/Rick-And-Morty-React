import React from "react";
import { SelectGender } from "./SelectGender";

describe("<SelectGender />", () => {
  it("calls onChange with selected value", () => {
    const onChange = cy.stub().as("onChange");

    cy.mount(<SelectGender onChange={onChange} />);

    cy.get("select")
      .select("female")
      .select("male")
      .select("genderless")
      .select("unknown");

    cy.get("@onChange")
      .should("be.calledWith", "female")
      .and("be.calledWith", "male")
      .and("be.calledWith", "genderless")
      .and("be.calledWith", "unknown");
  });
});
