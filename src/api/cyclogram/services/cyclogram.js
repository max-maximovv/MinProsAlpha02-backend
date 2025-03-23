'use strict';

/**
 * cyclogram service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cyclogram.cyclogram');
