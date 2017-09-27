module.exports = (app) => {

  app.route('/bonsais')
    .get((req, res) => {
      res.json([{
        common_name: "Jaboticabeira",
        scientific_name: "Plinia cauliflora",
        origin: "Yamadori"
      }, {
        common_name: "Ipê-amarelo",
        scientific_name: "Handroanthus albus",
        origin: "Semente"
      }, {
        common_name: "Ipê-roxo",
        scientific_name: "Handroanthus impetiginosus",
        origin: "Semente"
      }]);
    });
}
