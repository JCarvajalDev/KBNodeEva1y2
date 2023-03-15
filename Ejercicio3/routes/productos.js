var express = require('express');
var router = express.Router();

/* GET productos listing. */
router.get('/', function(req, res, next) {
    const productos = [
        {
          codigo: "P001",
          nombre: "Camiseta",
          precio: 20.99
        },
        {
          codigo: "P002",
          nombre: "Pantalón",
          precio: 35.99
        },
        {
          codigo: "P003",
          nombre: "Zapatos",
          precio: 50.50
        },
        {
          codigo: "P004",
          nombre: "Reloj",
          precio: 100.00
        },
        {
          codigo: "P005",
          nombre: "Gorra",
          precio: 15.75
        },
        {
          codigo: "P006",
          nombre: "Bolso",
          precio: 40.25
        },
        {
          codigo: "P007",
          nombre: "Calcetines",
          precio: 5.99
        },
        {
          codigo: "P008",
          nombre: "Bufanda",
          precio: 12.99
        },
        {
          codigo: "P009",
          nombre: "Sudadera",
          precio: 28.50
        },
        {
          codigo: "P010",
          nombre: "Shorts",
          precio: 18.25
        }
      ];
  res.render('productos', { title: 'Productos', datos:productos });

});

module.exports = router;