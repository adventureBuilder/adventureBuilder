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
        }).catch(err => console.log(err, `see encounterCtlr`));
    },
    addEncounter: (req, res) => {
        const db = req.app.get('db');
        const  {encounterName, encounterDescription, finalEncounter, storyId, encounterBackGroundImage} = req.body
        
        db.addEncounter([encounterName, encounterDescription, finalEncounter, storyId, encounterBackGroundImage]).then(result => {
            res.status(200).send(result[0]);
        })
        .catch(err => {
            console.log(err, 'check add encounter endpoint');
        });
    },
    addFirstEncounter: (req, res) => {
        const db = req.app.get('db');
        const  {encounterName, encounterDescription, finalEncounter, storyId, encounterBackGroundImage} = req.body
        db.addEncounter([encounterName, encounterDescription, finalEncounter, storyId, encounterBackGroundImage]).then(result => {
            db.updateFirstEncounter([result[0].encounter_id, storyId]).then(_=>{
                res.status(200).send(result[0]);
            })
            .catch(err =>{
                console.log(err, 'check add first encounter endpoint part 2');
            })
        })
        .catch(err => {
            console.log(err, 'check add first encounter endpoint');
        });
        
    }
}