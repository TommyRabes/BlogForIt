describe('BaseImage tests', () => {
    it('should display a rectangle image', () => {
        cy.visit('/');
        cy.get('main .content app-base-image .img').first().should('have.css', 'width', '300px');
        cy.get('main .content app-base-image .img').first().should('have.css', 'height', '250px');
        cy.get('main .content app-base-image .img').first().should('have.css', 'background-image', 'url("https://blogzine.webestica.com/assets/images/blog/4by3/01.jpg")');
        cy.get('main .content app-base-image .img').first().should('have.css', 'border-radius', '10px');
    });
});