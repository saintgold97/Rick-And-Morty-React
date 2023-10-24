import React from "react";
import { SearchBar } from "./SearchBar";

describe("<SearchBar />", () => {
  it("renders and calls onSearch with search text", () => {
    const onSearch = cy.stub().as("onSearch");

    cy.mount(<SearchBar onSearch={onSearch} />);

    cy.get('input[type="search"]').as("searchInput");
    cy.get("@searchInput").type("Rick");
    cy.get(".search-button").click();
    cy.get("@onSearch").should("be.calledWith", "Rick");
  });
});
