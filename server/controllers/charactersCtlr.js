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
    db.getSelectedCharacter(req.param.characterId)
    .then((result)=>{
        res.status(200).send(result[0]);
    })
    .catch((err)=>console.log(err,`see getSelectedCharacter endpoint`))
    }
}