const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

//Conexión con la BD
mongoose
    //.connect('mongodb://127.0.0.1:27017/empleados')
    .connect('mongodb+srv://belenhoti22:CC57DUKTKFuiZOhE@cluster0.fs4xq36.mongodb.net/empleados?retryWrites=true&w=majority&appName=Cluster0')
    .then((x) =>{
        console.log(`Conectado exitosamente a la BD: "${x.connections[0].name}"`);
    })
    .catch((error) => {
        console.error('Error de conexión: ',error.reason)
    })

//configuración del servidor web
const empleadoRutas = require('./routes/empleado.routes')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:false
}))

app.use(cors())

app.use('/api',empleadoRutas)

//habilitamos el puerto
const port = process.env.PORT || 4000

const server = app.listen(port, () => {
    console.log('Servidor escuchando en el puerto: '+port)
})

//manejador de error 404
app.use((req,res,next) =>{
    next(createError(404))
})

//manejador de errores
app.use(function(req,res,next){
    console.log(err.message)
    if (!err.statusCode) err.statusCode = 500
    res.status(err.statusCode).send(err.message)
    
})