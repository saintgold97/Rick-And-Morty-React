import React from "react";
import { Pages } from "./Pages";

describe("<Pages />", () => {
  it("renders and handles page change", () => {
    let currentPage = 0;
    const onPageChange = cy.stub().as("onPageChange");
    const totalPages = 10;

    cy.mount(
      <Pages
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPages={totalPages}
      />
    );

    cy.get("span").should("have.text", String(currentPage));

    cy.contains("Prev Page").click();
    cy.get("@onPageChange").should(
      "be.calledWith",
      Math.max(1, Number(currentPage) - 1)
    );

    cy.contains("Next Page").click();
    cy.get("@onPageChange").should(
      "be.calledWith",
      totalPages > currentPage ? currentPage + 1 : currentPage
    );
  });
});
