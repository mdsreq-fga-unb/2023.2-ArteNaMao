'use strict';

/**
 * cliente service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cliente.cliente');
