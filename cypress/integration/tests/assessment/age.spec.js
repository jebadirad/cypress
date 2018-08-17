describe("Assessment Tests", function(){
    it("Visit Solera4Me", function(){
        cy.visit("staging.solera4me.com");
        cy.contains("Question 1 of 6");
        cy.get(".assessment-page", ).contains("How old are you?");
        cy.get("#age_18-39").click();
        cy.get("#age_50-59").click();
    });
});