const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formationRoutes = require('./routes/formation');
const livreRoutes = require('./routes/livre');
const adminRoutes = require('./routes/admin');
const anneeRoutes = require('./routes/annee');
const semestreRoutes = require('./routes/semestre');
const moduleRoutes= require('./routes/module');

// ---------------------Pour la connexion avec MongoDB Atlas la base de données cloud   ------------------------

mongoose.connect('mongodb+srv://ZairiJalal:okokok2017@cluster0.ydcsv.mongodb.net/db_MathSup?retryWrites=true&w=majority',
                 { useNewUrlParser: true,useUnifiedTopology: true })
                 .then(() => console.log('Connexion à MongoDB réussie !'))
                 .catch(() => console.log('Connexion à MongoDB échouée !'));

// ---------------------Eviter Erreurs de CORS ------------------------
app.use((req, res, next) => {
                  res.setHeader('Access-Control-Allow-Origin', '*');
                  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
                  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
                  next();
  });

app.use(bodyParser.json());

app.use('/api/formations', formationRoutes);
app.use('/api/livres', livreRoutes);
app.use('/api/auth', adminRoutes);
app.use('/api/annees', anneeRoutes);
app.use('/api/semestres', semestreRoutes);
app.use('/api/modules', moduleRoutes);


module.exports = app;
