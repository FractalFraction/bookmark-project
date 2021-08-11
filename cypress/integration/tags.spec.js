describe('tagging bookmarks', () => {
  beforeEach(() => {
      cy.task('taskTruncateTables');
      cy.task('taskCreateTestBookmark');
  })

  it('tagging a bookmark', () => {
      cy.visit('/');
      cy.get('#tag-box-1').type('cats');
      cy.get('#tag-button-1').click()
      cy.get('#bookmark-1-tag-1').should('contain', 'cats')
  });
  
  it('can filter tags', () => {
        cy.visit('/');
      cy.get('#tag-box-1').type('cats');
      cy.get('#tag-button-1').click()
      cy.get('#bookmark-1-tag-1').should('contain', 'cats')

      cy.get('#tag-box-2').type('cats');
      cy.get('#tag-button-2').click()
      cy.get('#bookmark-2-tag-1').should('contain', 'cats')

      cy.get('#tag-box-3').type('bestgame');
      cy.get('#tag-button-3').click()
      cy.get('#bookmark-3-tag-1').should('contain', 'bestgame')

      cy.get('#filter-tags-dropdown').select('cats');
      cy.get('#bookmark-3').should('not.be.visible');
  })


});