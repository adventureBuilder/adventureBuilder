require('dotenv').config();


const express = require('express'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    cors = require('cors'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    characterCtlr = require(`./controllers/charactersCtlr`),
    optionsCtrl = require(`./controllers/optionsCtrl`),
    encounterCtlr = require(`./controllers/encounterCtlr`),
    storiesCtlr = require(`./controllers/storiesCtlr`),
    classesCtlr = require(`./controllers/classesCtlr`),
    imageCtrl = require(`./controllers/imageCtrl`),
    userCtlr = require(`./controllers/userCtlr`);

const app = express();



/////////////////////////
///TOPLEVEL MIDDELWARE///
/////////////////////////
app.use(cors());
app.use(session({
    secret:process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false
}));
app.use(bodyParser.json());

/////////////////////
///Auth MIDDLEWARE///
/////////////////////

app.use(passport.initialize());
app.use(passport.session());

///////////////////////////////////
////TESTING TOPLEVEL MIDDLEWARE////
///COMMENET OUT WHEN AUTH0 READY///
///////////////////////////////////
app.use((req, res, next) =>{
    if(!req.session.user){
        req.session.user = {
            user_id: 1,
            user_name: "harrison ford", 
            email: "adventureBuilder2049@gmail.com", 
            name: "adventure", 
            profile_picture : "http://www.placekitten.com/200/250"
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
//             let username = ""; 
//             let email = profile.emails ? profile.emails[0].value : "";
//             let name = "";
//             let img = profile.picture ? profile.picture: "";
//             let userArr = [ username, email, name, img, auth_id];
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
////////////////////////
///END AUTHENTICATION///
////////////////////////

//////////////
///DATABASE///
///////////////
 massive(process.env.CONNECTIONSTRING).then(db => {
     app.set('db', db)
         console.log('connected to the database')
     
 })
     .catch(err=>console.log(err,'see massive connection function'));

///////////////
///ENDPOINTS///
///////////////
//User Endpoints
app.get(`/api/getUser`, userCtlr.getUser);// we don't have a test for this
app.put(`/api/updateUser`, userCtlr.updateUser);

//Character Endpoints
app.post(`/api/character`, characterCtlr.createCharacter);
app.get(`/api/getAllCharacters`, characterCtlr.getAllCharacters);
app.get(`/api/getSelectedCharacter/:characterId`, characterCtlr.getSelectedCharacter);
app.put('/api/character/changeHP', characterCtlr.changeHP);

//Story Endpoints
app.post(`/api/story`, storiesCtlr.addStory);
app.put(`/api/story/:storyId`, storiesCtlr.completeStory);

app.get(`/api/storyDetails/:storyId`, storiesCtlr.getStoryDetails);
app.get(`/api/story/:storyId`, storiesCtlr.getSelectedStory);
app.get(`/api/user/stories`, storiesCtlr.getUserStories);

app.get(`/api/stories`, storiesCtlr.getMostRecentStories);
app.get(`/api/user/stories/:username`, storiesCtlr.getUsersMostRecentStories);
app.get(`/api/levels/stories/:level`, storiesCtlr.searchStoryByLevel);
app.get(`/api/storyName/:storyName`, storiesCtlr.getStoryByName);

//Encounter Endpoints
app.post(`/api/encounter`, encounterCtlr.addEncounter);
app.post(`/api/firstEncounter`, encounterCtlr.addFirstEncounter);
app.get(`/api/getEncounters/:encounterId`, encounterCtlr.getEncounter);



//options Endpoints
app.post(`/api/option`, optionsCtrl.addOption);

//Class Endpoints
app.get(`/api/classes`, classesCtlr.getClasses);

//imageEndpoints
app.get(`/api/images/encounter`, imageCtrl.getEncounterImages);
app.get(`/api/images/option`, imageCtrl.getOptionImages);


//auth endpoints
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: `http://localhost:3000/tavern`,
    failureRedirect: `http://localhost:3000/`
}));
app.get('/auth/logout', (req, res)=>{
    req.logout();
    console.log(req.user);
    res.redirect(302, 'https://adventure-builder.auth0.com/v2/logout?returnTo=http%3A%2F%2Flocalhost%3A3000%2F');
})



///////////////
///LISTENING///
///////////////
const port = 4000;
app.listen(port, ()=>{
    console.log(`Yo, What up? i'm port ${port} and welcome to my crib`);
})