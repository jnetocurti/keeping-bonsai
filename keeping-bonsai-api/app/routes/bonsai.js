import { searched, created, updated, deleted } from '../../lib/response';

module.exports = (app) => {
  const Bonsai = app.app.models.bonsai;

  app.route('/bonsais')
    .get((req, res, next) => {
      Bonsai.find({})
        .then(searched(res))
        .catch(err => next(err));
    })
    .post((req, res, next) => {
      Bonsai.create(req.body)
        .then(created(res))
        .catch(err => next(err));
    });

  app.route('/bonsais/:id')
    .get((req, res, next) => {
      Bonsai.findById(req.params.id)
        .then(searched(res))
        .catch(err => next(err));
    })
    .put((req, res, next) => {
      Bonsai.updateOne({ _id: req.params.id }, req.body, { runValidators: true })
        .then(updated(res))
        .catch(err => next(err));
    })
    .delete((req, res, next) => {
      Bonsai.deleteOne({ _id: req.params.id })
        .then(deleted(res))
        .catch(err => next(err));
    });
};
