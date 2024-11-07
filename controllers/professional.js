
exports.getData = async (req, res, next) => {
    try {
        const data = require('../user.json');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data[0]);
    } catch (err) {
        console.error("Error loading JSON data.");
        res.status(500).json({error: "Failed to retrieve data"});
    }   
}