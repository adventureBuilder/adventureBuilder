module.exports = {
    getUser: (req, res) => {
         
    res.send(req.user); // change to req.user after set up Auth0;
},
    updateUser: (req,res)=>{
        const db = req.app.get('db');
         console.log(req.body.username, req.user.userId)

        db.updateUser( [req.body.username, req.user.user_id])// change to req.user after set up Auth0;
        
        
        .then( (response) =>{
            res.status(200).send(response[0])
        })
        .catch((err)=> console.log(err, `see updatUser endpoint`));
}

}