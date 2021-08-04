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
        //cy.task('taskTruncateTables');
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('proscrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        cy.get('#url1').contains('reddit')
    })

    it('READ: select a bookmark that exists', () => {
        //cy.task('taskTruncateTables');
        cy.task('taskCreateTestBookmark');
        cy.visit('/');
        cy.get('#url1').contains('reddit.com')
    })


    // it('update a bookmark during setup', () => {
    //     //cy.task('taskTruncateTables');
    //     cy.task('taskResetIds');
    //     cy.task('taskCreateTestBookmark');
    //     cy.visit('/');
    //     cy.get('#tag1').contains('gossip')
    //     cy.task('taskUpdateTestBookmark');
    //     cy.get('#tag1').contains('conversation')
    // })

    it('UPDATE: updates a bookmark', () => {
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

    it('DELETE: delete a bookmark via dropdown', () => {
        //cy.task('taskTruncateTables');
        cy.visit('/');
        cy.get('#url-box').type('www.reddit.com')
        cy.get('#tag-box').type('proscrastination')
        cy.get('#comment-box').type('for the memes')
        cy.get('#add-button').click()
        // Rewrite line below??
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
