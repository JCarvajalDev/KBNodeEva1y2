var express = require('express');
var router = express.Router();

/* GET clientes listing. */
router.get('/', function(req, res, next) {
    const clientes = [
        {
          rut: "12.345.678-9",
          nombre: "Juan",
          apellidoPaterno: "Pérez",
          apellidoMaterno: "García",
          edad: 28
        },
        {
          rut: "23.456.789-0",
          nombre: "María",
          apellidoPaterno: "González",
          apellidoMaterno: "Valdés",
          edad: 35
        },
        {
          rut: "34.567.890-1",
          nombre: "Pedro",
          apellidoPaterno: "Muñoz",
          apellidoMaterno: "Silva",
          edad: 42
        },
        {
          rut: "45.678.901-2",
          nombre: "Carmen",
          apellidoPaterno: "Araya",
          apellidoMaterno: "Hernández",
          edad: 31
        },
        {
          rut: "56.789.012-3",
          nombre: "Fabiola",
          apellidoPaterno: "Rojas",
          apellidoMaterno: "Díaz",
          edad: 27
        }
      ];
  res.render('clientes', { title: 'Clientes', datos:clientes });

});

module.exports = router;