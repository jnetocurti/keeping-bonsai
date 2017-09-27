import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

consign()
  .include('./app/models')
  .then('./app/routes')
  .into(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000);

module.exports = app;
