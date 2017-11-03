module.exports = {
    addStory: (req, res) => {
        const db = req.app.get('db');
        const { user_id } = req.user; // for testing should be req user
        const { storyName, storyDescription, storyLevel } = req.body;
        db.addStory([storyName, user_id, storyDescription, storyLevel]).then(resp => {
            console.log(resp);
            res.status(200).send(resp[0]);
        })
    },
    completeStory: (req, res) => {
        const db = req.app.get('db');
        const { storyId } = req.params;
        db.completeStory(storyId).then(resp => {
            res.status(200).send(resp[0]);
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
    getUserStories: (req, res) => {
        const db = req.app.get('db');
        db.getUserStories(req.user.user_id) //set to req user when aut is up
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see get user stories end point`))
    },
    getUsersMostRecentStories: (req, res) => {
        const db = req.app.get('db');
        db.getUsersMostRecentStories(`%${req.params.username.toLowerCase()}%`)
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

        db.getStoryByName(`%${req.params.storyName.toLowerCase()}%`)
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
                    .then(result => {
                        story.encounters = result;
                        if (story.encounters.length === 0) {
                            res.status(200).send(story);
                        }
                        
                        story.encounters = story.encounters.map(encounter => {
                            encounter.options = [];
                            return encounter;
                        
                        });
                        
                        db.getStoryOptions(req.params.storyId).then((resp) => {
                            resp.forEach((option)=> {
                                story.encounters.find(encounter => encounter.encounter_id === option.encounter_id)
                                .options.push(option);
                            });
                            res.send(story)
                        })
                            .catch((err) => console.log(err, ` check getStoryDetails endpoint`))

                    })
                    .catch((err) => console.log(err, `see getStoryDetails endpoint`))
            })
            .catch((err) => console.log(err, `see getStoryDetails endpoint`))
    }

}