module.exports = {
    addStory: (req, res) => {
        const db = req.app.get('db');
        const {user_id} = req.session.user; // for testing should be req.user
        const {storyName, storyDescription, storyLevel} = req.body;
        db.addStory([storyName, user_id, storyDescription, storyLevel]).then(resp =>{
            res.status(200).send(result[0]);
        })
    },
    completeStory: (req,res) =>{
        const db = req.app.get('db');
        const {storyId} = req.params;
        db.completeStory(storyId).then(_=>{
            res.status(200).send();
        })
    },
    getMostRecentStories: (req, res) => {
        const db = req.app.get('db');
        db.getMostRecentStories()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see getMostRecentStories endpoint`));
    },
    getUsersMostRecentStories: (req, res) => {
        const db = req.app.get('db');
        const username = req.params.username.toLowerCase();
        db.getUsersMostRecentStories(`%${username}%`)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see getUsersMostRecentStories endpoint`))
    },
    getSelectedStory: (req, res) => {
        const db = req.app.get('db');
        db.getSelectedStory(req.params.storyId)
            .then((result) => {
                res.status(200).send(result[0]);
            })
            .catch((err) => console.log(err, `see getSelectedStory endpoint`))
    },
    searchStoryByLevel: (req, res) => {
        const db = req.app.get('db');
        db.searchStoryByLevel(req.params.level)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see searchStoryByLevel endpoint`))
    },
    getStoryByName: (req, res) => {
        const db = req.app.get('db');

        const storyName = req.params.storyName.toLowerCase();
            db.getStoryByName(`%${storyName}%`)
                .then((result) => {
                    res.status(200).send(result);


        db.getStoryByName(`%${storyName}%`)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see getStoryByName endpoint`))

    },
    getStoryDetails: (req, res) => {
        const db = req.app.get('db');

        db.getSelectedStory(req.params.storyId)
            .then((result) => {
                let story = result[0];
                let counter = 0;
                db.getStoryEncounters(req.params.storyId)
                .then(result =>{
                    story.encounters = result;
                    story.encounters.map((encounter, index) => {
                        db.getOptions(encounter.encounter_id).then((resp) => {
                            story.encounters[index].options = resp;
                            counter++;
                            if(counter === story.encounters.length){
                                res.status(200).send(story)
                            }
                        })
                        .catch((err) => console.log(err, ` check getStoryDetails endpoint`))
                    })
                    

                })
                .catch((err) => console.log(err, `see getStoryDetails endpoint`))
            })
            .catch((err) => console.log(err, `see getStoryDetails endpoint`))
    }

