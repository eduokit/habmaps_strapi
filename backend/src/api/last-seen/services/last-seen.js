'use strict';

/**
 * last-seen service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::last-seen.last-seen');
