var express = require('express');
var router = express.Router();

/* GET paises listing. */
router.get('/', function(req, res, next) {
    const paises = [
        {
          "nombre": "Estados Unidos",
          "poblacion": 331449281
        },
        {
          "nombre": "China",
          "poblacion": 1444216107
        },
        {
          "nombre": "India",
          "poblacion": 1393409038
        },
        {
          "nombre": "Brasil",
          "poblacion": 213993437
        },
        {
          "nombre": "Indonesia",
          "poblacion": 273523615
        }
      ];
    
  res.render('paises', { title: 'Países', datos:paises });

});

module.exports = router;