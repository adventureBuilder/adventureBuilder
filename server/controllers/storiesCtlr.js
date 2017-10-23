module.exports = {
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
        const username = req.params.username.toUpperCase();
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
        const storyName = req.params.storyName.toUpperCase();
            db.getStoryByName(`%${storyName}%`)
                .then((result) => {
                    res.status(200).send(result);
                })
                .catch((err) => console.log(err, `see getStoryByName endpoint`))
        
    }

}