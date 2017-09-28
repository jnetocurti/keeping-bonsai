import cors from 'cors';
import bodyParser from 'body-parser';

module.exports = (app) => {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};
