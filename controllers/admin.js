const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// exports.signup = (req, res, next) => {
//   bcrypt.hash(req.body.password, 10)
//     .then(hash => {
//       const user = new Admin({
//         email: req.body.email,
//         password: hash
//       });
//       user.save()
//         .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//         .catch(error => res.status(400).json({ error }));
//     })
//     .catch(error => res.status(500).json({ error }));
// };
//----------La Vérification des informations d'identification d'un utilisateur de l'API.

exports.login = (req, res, next) => {
   
    Admin.findOne({ email: req.body.email })
      .then(admin => {
        if (!admin) {
          console.log("Utilisateur non trouvé ! ");
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        
        bcrypt.compare(req.body.password, admin.password)
          .then(valid => {
            if (!valid) {
                   console.log("Mot de passe incorrect !");
                   return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
          console.log("Utilisateur trouvé ! ");
              res.status(200).json({
              adminId: admin._id,
              token: jwt.sign(
                { adminId: admin._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };