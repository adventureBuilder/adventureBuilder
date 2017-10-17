module.exports = {
    getMostRecentStories: (req, res) => {
        const db = req.get('db');
        db.getMostRecentStories()
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see getMostRecentStories endpoint`))
    },
    getUsersMostRecentStories: (req, res) => {
        const db = req.get('db');
        db.getUsersMostRecentStories(req.params.username)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see getUsersMostRecentStories endpoint`))
    },
    getSelectedStory: (req, res) => {
        const db = req.get('db');
        db.getSelectedStory(req.params.storyId)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see getSelectedStory endpoint`))
    },
    searchStoryByCreator: (req, res) => {
        const db = req.get('db');
        db.searchStoryByCreator(`%${req.params.username}%`)
            .then((result) => {
                res.status(200).send(result);
            })
            .catch((err) => console.log(err, `see searchStoryByCreator endpoint`))
    },
    searchStoryByLevel: (req, res) => {
        const db = req.get('db');
        searchStoryByCreator: (req, res) => {
            db.searchStoryByLevel(req.params.level)
                .then((result) => {
                    res.status(200).send(result);
                })
                .catch((err) => console.log(err, `see searchStoryByLevel endpoint`))
        }
    },
   getStoryByName: (req, res) => {
        const db = req.get('db');
        searchStoryByCreator: (req, res) => {
            db.getStoryByName(`%${req.params.storyName}%`)
                .then((result) => {
                    res.status(200).send(result);
                })
                .catch((err) => console.log(err, `see getStoryByName endpoint`))
        }
    }

}