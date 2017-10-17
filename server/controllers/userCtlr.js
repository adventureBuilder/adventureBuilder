module.exports = {
    getUser: (req, res) => {
         
    res.send(req.session.user); // change to req.user after set up Auth0;
},
    updateUser: (req,res)=>{
        const db = req.app.get('db');
        console.log(req.session.user)
         console.log(req.body.username, req.session.user.userId)

        db.updateUser( [req.body.username, req.session.user.user_id])// change to req.user after set up Auth0;
        
        
        .then( (response) =>{
            console.log(response)
            res.status(200).send(response)
        })
        .catch((err)=> console.log(err, `see updatUser endpoint`));
}

}