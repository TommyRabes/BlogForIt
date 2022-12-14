import '../support/commands';

describe('Header test', () => {
    it('should display header', () => {
        cy.visit('/');
        cy.get('#header').should('exist');
        cy.get('#header').should('be.visible');
        cy.get('#header').should('have.css', 'height', '53px');
        cy.get('#header app-bfi-navbar').should('have.css', 'border-bottom', '1px solid rgb(220, 220, 220)');
        cy.get('#header').should('have.css', 'background-color', 'rgb(255, 255, 255)');
        cy.get('#header').isWithinViewport();
    });

    it('should hide header after scrolling down then show header again after scrolling up', () => {
        cy.visit('/');
        cy.scrollTo(0, 1000).wait(400).get('#header').isOutsideViewport();
        cy.scrollTo(0, 400).wait(400).get('#header').isWithinViewport();
    });
});

describe('Header logo test', () => {
    it('should display a logo', () => {
        cy.visit('/');
        cy.get('#home-logo h2').contains('BlogIt');
    });
});

describe('Header action buttons', () => {
    it('should display a search button', () => {
        cy.visit('/');
        cy.get('#action-buttons i.search-icon').should('be.visible');
    });

    it('should display a menu button', () => {
        cy.visit('/');
        cy.get('#action-buttons i.menu-icon').should('be.visible');
    });
});

describe('Header navbar test', () => {
    it('should display Home navigation link without band', () => {
        cy.visit('/');
        const navlink = cy.get('#navbar-links app-bfi-navlink').first();
        const anchor = navlink.find('a.nav-link');
        anchor.should('contain.text', 'Home');
        anchor.should('have.css', 'color', 'rgb(0, 0, 0)');
        navlink.find('.band').should('not.exist');
    });

    it('should display Web development navigation link with cornflowerblue band', () => {
        cy.visit('/');
        const navlink = cy.get('#navbar-links app-bfi-navlink:nth-child(2)');
        const anchor = navlink.find('a.nav-link');
        anchor.should('contain.text', 'Web development');
        anchor.should('have.css', 'color', 'rgb(0, 0, 0)');
        const band = cy.get('#navbar-links app-bfi-navlink:nth-child(2) .band');
        band.should('exist');
        band.should('have.css', 'background-color', 'rgb(100, 149, 237)');
    });

    it('should display DevOps navigation link with orangered band', () => {
        cy.visit('/');
        const navlink = cy.get('#navbar-links app-bfi-navlink:nth-child(3)');
        const anchor = navlink.find('a.nav-link');
        anchor.should('contain.text', 'DevOps');
        anchor.should('have.css', 'color', 'rgb(0, 0, 0)');
        const band = cy.get('#navbar-links app-bfi-navlink:nth-child(3) .band');
        band.should('exist');
        band.should('have.css', 'background-color', 'rgb(255, 69, 0)');
    });
});