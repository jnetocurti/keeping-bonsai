module.exports = {
  consign: {
    options: {
    },
  },
  winston: {
    options: {
      exitOnError: true,
    },
    console: {
      options: {
        colorize: true,
        timestamp: true,
        stringify: true,
        handleExceptions: true,
        humanReadableUnhandledException: true,
      },
    },
    file: {
      options: {
        filename: 'logs/keeping-bonsai-api.log',
        maxsize: 1048576,
        maxFiles: 10,
        handleExceptions: true,
      },
    },
  },
};
