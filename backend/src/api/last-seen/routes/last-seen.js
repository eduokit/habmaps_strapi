'use strict';

/**
 * last-seen router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::last-seen.last-seen');
