/* eslint-env node, mocha */
/* global app: false, request:false, expect:false */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]*/
const Bonsai = app.app.models.bonsai;
const bonsais = [{
  common_name: 'Jabuticabeira',
  scientific_name: 'Plinia cauliflora',
  origin: 'semente',
  origin_date: '01/01/2000',
  planting_date: '01/01/2000',
}, {
  common_name: 'Ipê-amarelo',
  scientific_name: 'Tabebuia alba',
  origin: 'yamadori',
  origin_date: '01/01/2000',
  planting_date: '01/01/2000',
}];

describe('Routes: bonsais', () => {
  beforeEach(() => {
    Bonsai.remove({}, () => {});
  });

  describe('GET /bonsais', () => {
    describe('status 200', () => {
      beforeEach(() => {
        Bonsai.insertMany(bonsais);
      });

      it('return an array with two elements', (done) => {
        request.get('/bonsais')
          .expect((res) => {
            expect(res.body).to.be.a('array');
            expect(res.body).to.have.lengthOf(2);
            expect(res.body[0].common_name).to.equal('Jabuticabeira');
            expect(res.body[1].common_name).to.equal('Ipê-amarelo');
          })
          .expect(200, done);
      });
    });

    describe('status 404', () => {
      it('return empty', (done) => {
        request.get('/bonsais')
          .expect((res) => {
            expect(Object.keys(res.body)).to.have.lengthOf(0);
          })
          .expect(404, done);
      });
    });
  }); // end GET /bonsais

  describe('POST /bonsais', () => {
    describe('status 201', () => {
      it('should insert one bonsai', (done) => {
        request.post('/bonsais')
          .send(bonsais[0])
          .expect((res) => {
            expect(res.body).to.be.a('object');
            expect(res.body.common_name).to.equal('Jabuticabeira');
          })
          .expect(201, done);
      });
    });

    describe('status 400', () => {
      it('should throw validation erros', (done) => {
        request.post('/bonsais')
          .send({})
          .expect((res) => {
            expect(res.body).to.be.a('array');
            expect(res.body).to.have.lengthOf(5);
            expect(res.body[0].message).to.equal('Data do plantio é obrigatório');
            expect(res.body[1].message).to.equal('Data de origem é obrigatório');
            expect(res.body[2].message).to.equal('Origem é obrigatório');
            expect(res.body[3].message).to.equal('Nome científico é obrigatório');
            expect(res.body[4].message).to.equal('Nome comum é obrigatório');
          })
          .expect(400, done);
      });
    });
  }); // end POST /bonsais

  describe('GET /bonsais/:id', () => {
    beforeEach(() => {
      Bonsai.insertMany(bonsais);
    });

    describe('status 200', () => {
      it('return one element', (done) => {
        request.get('/bonsais')
          .end((err, resp) => {
            request.get(`/bonsais/${resp.body[0]._id}`)
              .expect((res) => {
                expect(res.body.common_name).to.equal('Jabuticabeira');
              })
              .expect(200, done);
          });
      });
    });

    describe('status 404', () => {
      it('return empty', (done) => {
        request.get('/bonsais/000000000000000000000000')
          .expect((res) => {
            expect(Object.keys(res.body)).to.have.lengthOf(0);
          })
          .expect(404, done);
      });
    });
  }); // end GET /bonsais/:id

  describe('PUT /bonsais/:id', () => {
    beforeEach(() => {
      Bonsai.insertMany(bonsais);
    });

    describe('status 204', () => {
      it('should update one bonsai', (done) => {
        request.get('/bonsais')
          .end((err, resp) => {
            request.put(`/bonsais/${resp.body[0]._id}`)
              .send({ common_name: 'Ipê-roxo' })
              .expect((res) => {
                expect(Object.keys(res.body)).to.have.lengthOf(0);
              })
              .expect(204, done);
          });
      });
    });

    describe('status 400', () => {
      it('should throw validation erros', (done) => {
        request.get('/bonsais')
          .end((err, resp) => {
            request.put(`/bonsais/${resp.body[0]._id}`)
              .send({ origin: 'other' })
              .expect((res) => {
                expect(res.body).to.be.a('array');
                expect(res.body).to.have.lengthOf(1);
                expect(res.body[0].message).to.equal('other não é um tipo válido de origem');
              })
              .expect(400, done);
          });
      });
    });
  }); // end PUT /bonsais/:id

  describe('DELETE /bonsais/:id', () => {
    beforeEach(() => {
      Bonsai.insertMany(bonsais);
    });

    describe('status 204', () => {
      it('should delete one bonsai', (done) => {
        request.get('/bonsais')
          .end((err, resp) => {
            request.delete(`/bonsais/${resp.body[0]._id}`)
              .expect((res) => {
                expect(Object.keys(res.body)).to.have.lengthOf(0);
              })
              .expect(204, done);
          });
      });
    });
  }); // end DELETE /bonsais/:id
});
