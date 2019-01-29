module.exports = {
    getInventory: (req, res, next) => {
        req.app.get('db').get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    },

    createInventory: (req, res, next) => {
        const {name, price, img} = req.body;

        req.app.get('db').create_product([name, price, img])
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    },

    updateInventory: (req, res, next) => {
        const {params, query} = req;

        req.app.get('db').update_product([params.id, query.desc])
        .then(product => {res.status(200).send(product)})
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    },

    deleteInventory: (req, res, next) => {
        const{params} = req;
        req.app.get('db').delete_product(params.id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send({errorMessage: 'Error'}, console.log(err)))
    }
}