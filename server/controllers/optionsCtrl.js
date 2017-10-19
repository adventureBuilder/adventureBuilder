module.exports = {
    addOption: (req, res) => {
        const db = req.app.get('db');
        const {encounterId,
            optionName,
            optionDescription,
            optionOdds,
            optionPassCase,
            successText,
            failText,
            successEncounter,
            failedEncounter,
            optionImagesId,
            healthConsquences}= req.body;
    
        db.addOption([encounterId,
            optionName,
            optionDescription,
            optionOdds,
            optionPassCase,
            successText,
            failText,
            successEncounter,
            failedEncounter,
            optionImagesId,
            healthConsquences]).then(_=>{
                res.status(200).send('option added');
            })
            .catch(err => {
                console.log(err, 'check add option endpoint');
                res.status(500).send('failed to add new option')
            });
    } 
}