const express = require('express')
const empleadoRutas = express.Router()

//declaramos un objeto de nuestro modelo
let Empleado = require('../models/Empleado')

//agregar un nuevo empleado
empleadoRutas.route('/agregar').post((req,res) => {
    Empleado.create(req.body)
    .then((data) =>{
        console.log('Se insertó correctamente el documento');
        res.send(data)
    })
    .catch((error) => {
        console.error(error);
    })
})

//obtenemos todos los empleados
empleadoRutas.route('/empleados').get((req,res) => {
    Empleado.find()
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//obtenemos un solo empleado por su ID
empleadoRutas.route('/empleado/:id').get((req,res) => {
    Empleado.findById(req.params.id)
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        console.error(error)
    })
})

//actualizar un empleado
empleadoRutas.route('/actualizar/:id').put((req,res) => {
    Empleado.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data) => {
        console.log('Se actualizó correctamente el documento');
        res.send(data)
    })
    .catch((error) =>{
        console.error(error)
    })
})

//eliminar un empleado
empleadoRutas.route('/eliminar/:id').delete((req,res) => {
    Empleado.findByIdAndDelete(req.params.id)
    .then((data) =>{
        console.log('Se eliminó el documento correctamente');
        res.send(data)
    })
    .catch((error) =>{
        console.error(error)
    })
})

module.exports = empleadoRutas;