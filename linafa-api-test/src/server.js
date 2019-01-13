const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//routes
app.use('/user',require('./routes/users'));
app.use('/login',require('../src/routes/login'));
app.use('/jornadas',require('../src/routes/jornadas'));

//starting the server
app.listen(app.get('port'),()=>{
console.log('server iniciado');
});