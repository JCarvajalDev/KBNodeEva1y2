const express = require('express')

const app=express();
const port=9000;

app.get('/', (req,res)=>{
    res.send('index')
});

app.get('/usuarios', (req,res)=>{
    res.send('Listado de usuario')
});


app.get('/clientes', (req,res)=>{
    res.send('Listado de Cliente')
});


app.post('/usuario', (req,res)=>{
    res.send('datos de usuario')
});

app.post('/cliente', (req,res)=>{
    res.send('datos de cliente')
});


app.listen(port,()=>{
    console.log(`Aplicacion escuchando por el puerto ${port}`);
})