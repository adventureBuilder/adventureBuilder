module.exports = {
    getUser: (req, res) => {
         
    res.send(req.session.user); // change to req.user after set up Auth0;
}

}