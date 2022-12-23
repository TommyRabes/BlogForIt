describe('Tag tests', () => {
    it('should display a white tag with black text', () => {
        cy.visit('/');
        cy.get('app-tag').first().should('have.text', 'PHOTOGRAPHY');
        cy.get('app-tag > div').first().should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('app-tag > div').first().should('have.css', 'color', 'rgb(0, 0, 0)');
    });

    it('should display a yellow tag with black text with a bullet', () => {
        cy.visit('/');
        cy.get('app-tag').eq(1).should('have.text', 'TECHNOLOGY');
        cy.get('app-tag > div').eq(1).should('have.css', 'background-color', 'rgb(247, 195, 46)');
        cy.get('app-tag > div').eq(1).should('have.css', 'color', 'rgb(0, 0, 0)');
        cy.get('app-tag app-bullet').should('exist');
        cy.get('app-tag app-bullet svg').should('have.attr', 'fill', 'rgba(0, 0, 0, 1)');
    });

    it('should display a red tag with white text without ', () => {
        cy.visit('/');
        cy.get('app-tag').eq(2).should('have.text', 'TRAVEL');
        cy.get('app-tag > div').eq(2).should('have.css', 'background-color', 'rgb(214, 41, 62)');
        cy.get('app-tag > div').eq(2).should('have.css', 'color', 'rgb(255, 255, 255)');
        cy.get('app-tag > div').eq(2).find('app-bullet').should('not.exist');
    });
});