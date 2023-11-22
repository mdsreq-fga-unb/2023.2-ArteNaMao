'use strict';

/**
 * transacao service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transacao.transacao');
