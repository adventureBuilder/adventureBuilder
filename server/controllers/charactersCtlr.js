module.exports={
    getAllCharacters:  (req,res)=>{
        const db = req.app.get('db');
        db.getAllCharacters(req.session.user.user_id)
        .then((result)=>{
            res.status(200).send(result);
        })
        .catch((err)=>console.log(err,`see getAllCharacters endpoint`))
    },
    getSelectedCharacter: (req,res)=>{
        const db = req.app.get('db');
        db.getSelectedCharacter(req.params.characterId)
        .then((result)=>{
            res.status(200).send(result[0]);
        })
        .catch((err)=>console.log(err,`see getSelectedCharacter endpoint`))
    },
    createCharacter: (req, res)=>{
        const db = req.app.get('db');
        const {user_id} = req.session.user // req.user once auth0
        const {characterName, gender, dexterity, strength, charisma, healthPoints, class_id}= req.body;
        db.addCharacter([characterName, gender, dexterity, strength, charisma, healthPoints, class_id, user_id]).then(result =>{
            res.status(200).send(result[0]);
        })
        .catch((err)=>console.log(err,`see addCharacter endpoint`))
    }
}