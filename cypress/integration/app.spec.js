describe("First Test", () => {
  it("App should have a class called App-header", () => {
    cy.visit("/");
    cy.get(".App-header").should("exist");
  });
});
