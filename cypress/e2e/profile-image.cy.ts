describe('Profile image tests', () => {
    it('should display a profile image with the default avatar', () => {
        cy.visit('/');
        cy.get('main .content app-profile-image:nth-child(1) .img[style*="assets/images/users/male-avatar.jpg"]');
        cy.get('main .content app-profile-image .img').first().should('have.css', 'width', '50px');
        cy.get('main .content app-profile-image .img').first().should('have.css', 'height', '50px');
        cy.get('main .content app-profile-image .img').first().should('have.css', 'border-radius', '25px');
    });

    it('should display a profile image with a custom photo set', () => {
        cy.visit('/');
        cy.get('main .content app-profile-image .img').eq(1).should('have.css', 'background-image', 'url("https://blogzine.webestica.com/assets/images/avatar/01.jpg")');
        cy.get('main .content app-profile-image .img').eq(1).should('have.css', 'width', '40px');
        cy.get('main .content app-profile-image .img').eq(1).should('have.css', 'height', '40px');
        cy.get('main .content app-profile-image .img').eq(1).should('have.css', 'border-radius', '20px');
    });
});