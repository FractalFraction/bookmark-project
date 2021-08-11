describe('commenting on bookmarks', () => {
    
  beforeEach(() => {
      cy.task('taskTruncateTables');
      cy.task('taskCreateTestBookmark');
  })

  it('commenting on a bookmark', () => {
      cy.visit('/');
      cy.get('#comment-box-1').type('for the cats')
      cy.get('#comment-button-1').click()
      cy.get('#bookmark-1-comment-1').should('contain', 'for the cats')
  })

  it('commenting on the correct bookmark', () => {
      cy.visit('/');
      cy.get('#url-box').type('www.reddit.com')
      cy.get('#tag-box').type('procrastination')
      cy.get('#add-button').click()
      cy.get('#comment-box-2').type('I love reddit memes!')
      cy.get('#comment-button-2').click()
      cy.get('#bookmark-2-comment-1').should('contain', 'I love reddit memes!')
  })

});