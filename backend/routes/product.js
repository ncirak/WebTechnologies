var express = require('express');
var router = express.Router();

let allProduct = require("../data.json");

/* GET all products . */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    res.json(allProduct);

});

//Get requested product according to ID
router.get('/:id', function (req, res, next) {
    console.log("ID: " + req.params.id);

    const foundProduct = allProduct.filter(foundProduct => {
        if (foundProduct.id == req.params.id) {
            return true;
        }
    });
    //res.json(foundProduct);
    if (foundProduct.length == 1) {
        res.json(foundProduct[0])
    } else {
        res.status(404);  //Set status to 404 as product was not found
        res.json({ message: "Not Found" });
    }
});

//post new added product to server and it will store in allProduct array which came from data.json  file
router.post('/', function (req, res) {
    console.log(req.body);
    if (!req.body.name || !req.body.description) {

        res.status(400);
        res.json({ message: "Bad Request" });
    }
    else {
        const newId = allProduct[allProduct.length - 1].id + 1;
        let newProduct = {
            id: newId,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            img: req.body.img,
            qty: req.body.qty
        }
        allProduct.push({

            id: newId,
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            type: req.body.type,
            img: req.body.img,
            qty: req.body.qty
        });
        res.json({ message: "New product created.", location: "/product/" + newId });



    }
});

module.exports = router;
