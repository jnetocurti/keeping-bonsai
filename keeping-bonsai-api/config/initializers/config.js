import _ from 'lodash';
import defaults from '../environments/defaults';

module.exports = _.merge(
  defaults,
  /* eslint import/no-dynamic-require:off */
  require(`../environments/${process.env.NODE_ENV}.js`),
);
