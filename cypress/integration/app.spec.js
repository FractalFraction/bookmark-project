describe('bookmark manager index page', () => {

    beforeEach(() => {
        cy.task('taskTruncateTables');
    })

    it('page loads', () => {
        cy.visit('/');
        cy.contains('Best Bookmark Manager');
        cy.get('#url-box')
    })

    it('CREATE: adds a bookmark', () => {
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('procrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        cy.get('#url1').contains('reddit')
    })

    it('READ: select a bookmark that exists', () => {
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('#url1').contains('reddit.com')
    })

    it('UPDATE: updates a bookmark', () => {
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('#update-dropdown').select('www.reddit.com')
        cy.get('#update-tag').type('cat pictures')
        cy.get('#update-button').click()
    })

    it('UPDATE: updates a bookmark via a button', () => {
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('#update-button-1').click()
        cy.get('#update-tag').type('cat pictures')
        cy.get('#update-button').click()
        cy.get('#tag1').should('contain', 'cat pictures')
    })

    it('DELETE: delete a bookmark via dropdown', () => {
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('#bookmark-dropdown').select('www.reddit.com')
        cy.get('#delete-dropdown-button').click()
    })

    it('DELETE: delete a bookmark via a button', () => {
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('#url1').contains('www.reddit.com')
        cy.get('#delete-button-1').click()
        cy.get('#url1').should('not.exist')
    })
});
