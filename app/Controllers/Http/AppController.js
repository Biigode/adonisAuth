"use strict";

class AppController {
  async index({ request }) {
    return "Hello route with JWT";
  }
}

module.exports = AppController;
