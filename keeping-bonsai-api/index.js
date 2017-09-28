import express from 'express';
import consign from 'consign';

const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

consign()
  .include('./config/initializers/middleware.js')
  .then('./app/models')
  .then('./app/routes')
  .then('./config/initializers/server.js')
  .into(app);

module.exports = app;
