import React from "react";
import { SelectStatus } from "./SelectStatus";

describe("<SelectStatus />", () => {
  it("calls onChange with selected value", () => {
    const onChange = cy.stub().as("onChange");

    cy.mount(<SelectStatus onChange={onChange} />);

    cy.get("select").select("alive").select("dead").select("unknown");

    cy.get("@onChange")
      .should("be.calledWith", "alive")
      .and("be.calledWith", "dead")
      .and("be.calledWith", "unknown");
  });
});
