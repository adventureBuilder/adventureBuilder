module.exports = {
    getClasses: (req, res) => {
        const db = req.app.get('db');
        db.getClasses()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see getClasses endpoint`));
    }
}