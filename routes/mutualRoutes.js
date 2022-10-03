const { Router } = require("express");
const express = require("express");

const router = express.Router();
const mutualFundController = require("../controllers/mutualFundController")

router.get("/mutual/id",mutualFundController.getDataBYID);
router.get("/mutual",mutualFundController.allProducts);
router.post("/user-details",mutualFundController.loginDetails);
router.get("/productDetails",mutualFundController.getProductData);

module.exports = router