const express = require('express');
const app = express();
const cors = require('cors');
//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use('/user',require('./routes/users'));
app.use('/login',require('../src/routes/login'));
app.use('/jornadas',require('../src/routes/jornadas'));
app.use('/teams', require('./routes/teams'));

//starting the server
app.listen(app.get('port'),()=>{
console.log('server iniciado');
});