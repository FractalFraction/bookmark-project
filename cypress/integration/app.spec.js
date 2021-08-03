describe('bookmark manager index page', () => {
    it('page loads', () => {
        cy.visit('/');
        cy.contains('Best Bookmark Manager');
        cy.get('#url-box')
    })

    it('adds a bookmark', () => {
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('proscrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        cy.get('#url1').contains('reddit')
    })

    it('delete a bookmark', () => {
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('proscrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        // Rewrite line below??
        cy.get('#bookmark-dropdown').select('#url1')
        cy.get('#delete-button').click()
    })


});
