require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0');

const app = express();



/////////////////////////
///TOPLEVEL MIDDELWARE///
/////////////////////////
// app.use(cors());
app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}));
app.use(bodyParser.json());

/////////////////////
///Auth MIDDLEWARE///
/////////////////////

// app.use(passport.initialize());
// app.use(passport.session());

///////////////////////////////////
////TESTING TOPLEVEL MIDDLEWARE////
///COMMENET OUT WHEN AUTH0 READY///
///////////////////////////////////
app.use((req, res, next) =>{
    if(!req.session.user){
        req.session.user = {
            userID: 1,
            username: "douglsey", 
            email: "doug@dogmail.com", 
            name: "Doug Dogman", 
            img : "http://www.placekitten.com/200/250"
        }
    }
    next();
})

////////////////////////////
///END TESTING MIDDLEWARE///
////////////////////////////

////////////////////
///AUTHENTICATION///
////////////////////
// passport.use(new Auth0Strategy({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.AUTH_CALLBACK
// }, function(processToken, refreshToken, extraParams, profile, done){
//     const db = app.get('db');
//     db.findUser(profile.id).then(user =>{
//         if(user.length){
//             return done(null, user[0]);
//         }else{
//             let auth_id = profile.id; 
//             let username = profile.displayName ? profile.displayName : ""; 
//             let email = profile.emails ? profile.emails[0].value : "";
//             let name = "";
//             let img = profile.picture ? profile.picture: "";
//             let userArr = [auth_id, username, email, name, img];
//             db.addUser(userArr).then(user =>{
//                 return done(null, user[0]);
//             })
//         }
//     })
// }))

// passport.serializeUser(function(user, done){
//     done(null,user);
// })

// passport.deserializeUser(function(user, done){
//     const db = app.get('db');
//     db.findUser(user.auth_id).then(user =>{
//         done(null, user[0]);
//     });

    
// })

//////////////
///DATABASE///
// //////////////
// massive(process.env.CONNECTIONSTRING).then(db => {
//     app.set('db', db);
// })

///////////////
///ENDPOINTS///
///////////////

//auth endpoints
// app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: 'http://localhost:3000/#/dashboard',
//     failureRedirect: 'http://localhost:3000/#/'
// }));
// app.get('/auth/logout', (req, res)=>{
//     req.logout();
//     console.log(req.user);
//     res.redirect(302, 'https://dvalentine.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000%2F');
// })



///////////////
///LISTENING///
///////////////
const port = 4000;
app.listen(port, ()=>{
    console.log(`Yo, What up? i'm port ${port} and welcome to my crib`);
})