'use strict';

/**
 * last-seen controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::last-seen.last-seen');
