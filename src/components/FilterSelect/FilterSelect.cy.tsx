import React from "react";
import { FilterSelect } from "./FilterSelect";

describe("<FilterSelect />", () => {
  it("renders correctly", () => {
    const onChangeStatus = cy.stub().as("onChangeStatus");
    const onChangeGender = cy.stub().as("onChangeGender");

    cy.mount(
      <FilterSelect
        onChangeGender={onChangeGender}
        onChangeStatus={onChangeStatus}
      />
    );

    cy.get("select").should("have.length", 2);

    cy.get("select").eq(0).select("alive").select("dead").select("unknown");

    cy.get("select")
      .eq(1)
      .select("female")
      .select("male")
      .select("genderless")
      .select("unknown");

    cy.get("@onChangeStatus")
      .should("be.calledWith", "alive")
      .and("be.calledWith", "dead")
      .and("be.calledWith", "unknown");

    cy.get("@onChangeGender")
      .should("be.calledWith", "female")
      .and("be.calledWith", "male")
      .and("be.calledWith", "genderless")
      .and("be.calledWith", "unknown");
  });
});
