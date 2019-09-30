// describe and it are comming from Mocha
// expect is comming form Chai

// you can add this line Triple slash directives
// to activate IntelliSense
// /// <reference types="Cypress" />
// or you can add the file jsconfig.json

describe("First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.not.equal(false);
  });

  it("App should have a class called App-header", () => {
    // visit the home page
    // the baseUrl configured in cypress.json file
    cy.visit("/");
    // check for the existance of the elment using his class name
    cy.get(".App").should("exist");
  });

  it("should calculate the two numbers entered by the user", () => {
    cy.visit("/");

    /* 
     get the element contains the word Sum
     in our case it's the buttom
     the button should be disabled
    */
    cy.contains("Sum").should("be.disabled");

    // get the element by class name
    cy.get(".result").contains("result :");

    /*
     get the input by its id 
     then simulate the user typing
     the number 2 then check if 
     the input has the value 2
    */
    cy.get("#num1")
      .type(2)
      .should("have.value", "2");

    cy.get("#num2")
      .type(2)
      .should("have.value", "2");

    /*
     get element bt its type
     and check the type of the button
     using match and regex
    */
    cy.get("button")
      .contains("Sum")
      .should("have.attr", "type")
      .and("match", /button/);

    // another way of checking the type
    cy.contains("Sum")
      .should("have.attr", "type", "button")
      .should("not.be.disabled");

    /*
     click the button which should sum
     the two numbers
    */
    cy.get("button")
      .contains("Sum")
      .click();

    // check the result div after clicking the Sum button
    cy.get(".result").contains("result : 4");
  });

  // this is a simple test for XHR request
  // for more https://docs.cypress.io/api/commands/request.html
  it("axios test", () => {
    cy.request("https://jsonplaceholder.typicode.com/posts/1").should(res => {
      // eslint-disable-next-line no-unused-expressions
      expect(res.body).not.to.be.null;
      cy.contains(res.body.title).should("not.be.empty");
    });
  });
});
