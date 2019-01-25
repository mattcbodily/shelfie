module.exports = {
    getInventory: (req, res, next) => {
        req.app.get('db').get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    }
}