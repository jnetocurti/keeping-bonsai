import mongoose from 'mongoose';
import bluebird from 'bluebird';

import config from './config';
import logger from '../../lib/logger';

module.exports = () => {
  const db = mongoose.connection;

  db.on('error', logger.error.bind(console, 'connection error:'));

  db.once('open', () => {
    // we're connected!
    logger.info('mongodb connected');
  });

  mongoose.Promise = bluebird;
  mongoose.connect(config.mongo.uri, config.mongo.options);

  return mongoose;
};
