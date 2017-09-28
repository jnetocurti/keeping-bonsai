import fs from 'fs';
import winston from 'winston';

import config from '../config/initializers/config';

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

module.exports = new winston.Logger({
  transports: [
    new (winston.transports.Console)(
      config.winston.console.options,
    ),
    new (winston.transports.File)(
      config.winston.file.options,
    ),
  ],
  exitOnError: config.winston.options.exitOnError,
});
