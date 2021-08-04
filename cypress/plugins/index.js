/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

//require('dotenv').config()

const truncateTables = require('../../test/truncateTables.js');
const createTestBookmark = require('../../test/createTestBookmark.js');
const updateTestBookmark = require('../../test/updateTestBookmark.js');


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task', {

    taskTruncateTables() {
      console.log('Running truncateTables task!')
      truncateTables()
      return null  
  },

    taskCreateTestBookmark() {
      console.log('Running createBookmark task!')
      createTestBookmark()
      return null  
  },

  taskUpdateTestBookmark() {
    console.log('Running updateBookmark task!')
    updateTestBookmark()
    return null  
  }



  })
  
}
