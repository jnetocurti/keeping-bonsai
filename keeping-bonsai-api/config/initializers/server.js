import logger from '../../lib/logger';

module.exports = (app) => {
  const PORT = process.env.PORT || 3000;
  if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
      logger.info(`keeping-bonsai-api listening on port ${PORT}`);
    });
  }
};
