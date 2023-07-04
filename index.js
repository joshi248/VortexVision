import express from "express";
import path from 'path';
import hbs from 'hbs';
import { fileURLToPath } from 'url';
var app = express();
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
var pathdir = path.join(__dirname,'./public');
var viewpath = path.join(__dirname,'./views');
var partialpath = path.join(__dirname,'./views/partials');

app.use(express.static(pathdir));

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
app.set('views', viewpath);
hbs.registerPartials(partialpath);


// var geocode = require('./src/utilis/geocode');
// var forecast = require('./src/utilis/forecast');

import geocode from './src/utilis/geocode.js';
import forecast from './src/utilis/forecast.js';

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'User',
        age : 20
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        name: 'Shreyash',
        place: 'Kota, Rajasthan'
    })
})


app.get('/about', (req,res)=>{
    res.render("about",{
        title: 'About',
        place : 'Kota, Rajasthan',
        name: 'Shreyash'
    });
})
app.get('/weather', (req,res)=>{
    if(!req.query.address)
     return res.send({error : 'plz give a location'})
    geocode(req.query.address, (error, data ) =>{
        if(error)
         return res.send({error });
       forecast(data.lattitude, data.longitude, (error, forecastData)=>{
           if(error)
           return res.send({error : 'plz check location' });
   
           else 
           res.send({
               place :data.location,
               forecast :forecastData});
       })
   })
   
})

app.listen(port, ()=>{
    console.log("server started at -> ", port);
})