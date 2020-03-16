var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});



function getCartItems(){

  var cartList = [];
  var product1 = {
    "id": "9ba1ea89-7c8d-4b4f-b985-364d458d32e6",
    "name": "Mouse",
    "description": "Computer mouse",
    "price": "59.99",
    "count" : 1
  };

  var product2 = {
    "id": "53bff6a5-aae9-4913-bcd4-0eca258be5ed",
    "name": "Keyboard",
    "description": "Computer keyboard",
    "price": "129.99",
    "count" : 1
  };

  var product3 = {
    "id": "0d9dde7b-60a4-4418-a300-fea94d3e2631",
    "name": "Display",
    "description": "Computer Display",
    "price": "629.99",
    "count" : 1
  };


  cartList.push(product1);
  cartList.push(product2);
  cartList.push(product3);

  return cartList;
}


module.exports = router;
