describe('bookmark manager index page', () => {
    it('page loads', () => {
        cy.visit('/');
        cy.contains('Best Bookmark Manager');
        cy.get('#url-box')
    })

    it('adds a bookmark', () => {
        cy.task('taskTruncateTables');
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('proscrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        cy.get('#url1').contains('reddit')
    })

    it('select a bookmark that exists', () => {
        cy.task('taskTruncateTables');
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('#url1').contains('hello.com')
    })


    it.only('update a bookmark during setup', () => {
        cy.task('taskTruncateTables');
        cy.task('taskResetIds');
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('span').contains('gossip')
        cy.task('taskUpdateTestBookmark');
        cy.get('span').contains('conversation')
    })


    it('delete a bookmark', () => {
        cy.task('taskTruncateTables');
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('proscrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        // Rewrite line below??
        cy.get('#bookmark-dropdown').select('www.reddit.com')
        cy.get('#delete-button').click()
    })

    it('updates a bookmark', () => {
        cy.task('taskTruncateTables');
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('proscrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        // Rewrite line below??
        cy.get('#update-dropdown').select('www.reddit.com')
        cy.get('#update-tag').type('cat pictures')
        cy.get('#update-button').click()
    })


});
