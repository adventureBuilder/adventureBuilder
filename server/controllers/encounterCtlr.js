module.exports = {
    getEncounter: (req, res) => {
        const db = req.app.get('db');

        let encounter = {};
        db.getEncounter(req.params.encounterId).then(resp => {
            encounter = resp[0];
            db.getOptions(req.params.encounterId).then((resp) => {
                    encounter.options = resp
                    res.status(200).send(encounter);
                })
                .catch((err) => console.log(err, ` check getEncounter endpoint`))
        }).catch(err=>console.log(err, `see encounterCtlr`));
    }
}