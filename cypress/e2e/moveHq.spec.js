/// <reference types="cypress" />

describe("Contact form fill out", () => {
  beforeEach("Launch the url", () => {
    cy.visit("url");
  });
  it("Complete the form", () => {
    cy.get(".number").clear().type("45698");
    cy.get("[class='transferee']").should("be.visible");
    cy.get("[name='firstName']").clear().type("Mohit");
    cy.get("[name='lastName']").clear().type("Hassan");
    cy.get("[phone='numberOffice']").clear().type("41234569878");
    cy.get("[phone='numberMobile']").clear().type("1236457894");
    cy.get("[phone='numberHome']").clear().type("1235567894");
    cy.get(".department").clear().type("Army");
    cy.get(".email").clear().type("test@gmail.com");
    cy.get(".secondEmail").clear().type("test1@gmail.com");
    cy.get("input[text='name']").should("have.text", "RC Ackerman");
    cy.get("input[text='army']").should("have.text", "(G1) Army Account");
    cy.get(".saveButton").click();
    cy.get(".saveText").then(msg => {
      expect(msg.text()).to.equal("Contact information save correctly");
    });
  });
});
