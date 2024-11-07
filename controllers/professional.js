const mongodb = require('../db/connect');

exports.getData = async (req, res, next) => {
    try {
        // removed for stretch
        // const data = require('../user.json');
        // res.setHeader('Content-Type', 'application/json');
        // res.status(200).json(data[0]);

        // STRETCH
        const data = await mongodb.getDb().db().collection('user').find();
        data.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
        // END OF STRETCH
        
    } catch (err) {
        console.error("Error loading JSON data.");
        res.status(500).json({error: "Failed to retrieve data"});
    }   
}