import fs from 'fs';
import winston from 'winston';

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

const logger = new winston.Logger();

// TODO move settings to configs file
logger.add(winston.transports.Console, {
  colorize: true,
  timestamp: true,
  stringify: true,
  handleExceptions: true,
  humanReadableUnhandledException: true,
});

// TODO move settings to configs file
logger.add(winston.transports.File, {
  filename: 'logs/keeping-bonsai-api.log',
  maxsize: 1048576,
  maxFiles: 10,
  handleExceptions: true,
});

logger.exitOnError = false;

module.exports = logger;
