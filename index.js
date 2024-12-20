const express = require('express')
const mongoose = require('mongoose')
const app= express()

mongoose.connect('mongodb+srv://test:Test%40111@cluster0.dui2k.mongodb.net/TestOne?retryWrites=true&w=majority&appName=Cluster0').then(()=>console.log('DB connect')).catch(err=>console.log(err))





app.listen(5000,console.log('Server running on port 5000'))