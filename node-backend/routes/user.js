const express = require("express");
const path = require("path");
const userController = require("../controllers/admin");
const allController = require("../controllers/usersList");
const paymentController = require("../controllers/payment");
// const cartController = require("../controllers/carts");
const router = express.Router();

router.get('/');

router.get('/getAllUsers', allController.getUsers);

router.get('/getUserById/:id', allController.getUserById);

router.post('/add-user', userController.addNewUser);

router.post('/loginUser', allController.loginUser);

// router.post('/addToCart', cartController.itemAdded);

// router.get('/getCartItem/:id', cartController.getAllCartByUserId);

router.delete('/removeCartItem', userController.removeCartItem);

router.put('/addCartToUser', userController.addCartToUser);

router.put('/updateQuantity', userController.updateQuantity);

router.get('/api/payment/success', paymentController.Success);

router.post('/api/payment', paymentController.payment);
module.exports = router;