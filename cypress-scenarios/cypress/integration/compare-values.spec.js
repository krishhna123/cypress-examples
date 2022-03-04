describe("test", () => {
  it("should pass", () => {
    cy.visit("index.html");
    cy.get(".test")
      .invoke("text")
      .then((value) => {
        expect(value).to.equal("3");
      });
    cy.get(".test").invoke("text").should("be.eq", "3");
    cy.get(".test")
      .invoke("text")
      .then((value) => {
        expect(parseInt(value)).to.equal(3);
      });
  });
});
