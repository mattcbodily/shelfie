module.exports = {
    getInventory: (req, res, next) => {
        req.app.get('db').get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    },

    createInventory: (req, res) => {
        const {name, price, img} = req.body;

        req.app.get('db').create_product([name, price, img])
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    }
}