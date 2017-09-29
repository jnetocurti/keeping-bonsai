import _ from 'lodash';

const clientErrorHandler = (err, req, res, next) => {
  if (err.name === 'ValidationError') {
    const validations = [];
    _.forEach(err.errors, (error) => {
      validations.push({
        field: error.path,
        message: error.message,
      });
    });
    res.status(400).json(validations);
  }
  next();
};

const errorHandler = (err, req, res, next) => {
  res.status(500).json({ error: err });
  next();
};

module.exports = (app) => {
  app.use(clientErrorHandler);
  app.use(errorHandler);
};
