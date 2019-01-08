var express = require('express')
var router = express.Router();
var Products = require('../models/products');

//definindo uma rota
router.get('/', (req, res) => {
    //Buscando produtos
    Products
        .find()
        .exec()
        .then(data => {
            if (!data) {
                return res.json({
                    status: false,
                    data: {}
                });
            }
            return res.json({
                status: true,
                data
            });
        }).catch(err => {
            return res.json({
                status: false,
                data: err
            });
        })
}).get('/:id', (req, res) => {
    Products
        .findById(req.params.id)
        .then(data => {
            if (!data) {
                return res.json({
                    status: false,
                    data: {}
                });
            }
            return res.json({
                status: true,
                data
            });
        }).catch(err => {
            return res.json({
                status: false,
                data: err
            });
        })
}).post('/', (req, res) => {
    let product = new Products(req.body);
    product
        .save()
        .then(data => {
            return res.json({
                status: true,
                data
            });
        }).catch(err => {
            return res.json({
                status: false,
                data: err
            });
        });

}).put('/:id', (req, res) => {
    Products
        .findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })
        .then(data => {
            return res.json({
                status: true,
                data
            });
        }).catch(err => {
            return res.json({
                status: false,
                data: err
            });
        });
}).delete('/:id', (req, res) => {
    Products
        .deleteOne({ _id: req.params.id })
        .exec()
        .then(data => {
            return res.json({
                status: true,
                data
            });
        }).catch(err => {
            return res.json({
                status: false,
                data: err
            });
        })
});

module.exports = router;