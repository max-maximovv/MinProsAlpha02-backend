'use strict';

/**
 * uno service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::uno.uno');
