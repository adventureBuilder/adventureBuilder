module.exports = {
    getEncounterImages: (req, res) => {
        const db = req.app.get('db');

        db.getEncounterImages().then(result => {
            res.status(200).send(result)
        })
            .catch(err => {
                console.log(err, 'check get encounter Images endpoint')
            })
    },
    getOptionImages: (req, res) => {
        const db = req.app.get('db');

        db.getOptionImages().then(result => {
            res.status(200).send(result)
        })
            .catch(err => {
                console.log(err, 'check get option Images endpoint')
            })
    }
}