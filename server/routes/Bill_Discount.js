const express = require("express");
const router = express.Router();
const { Bill_Discount } = require("../models");

router.get("/api/getall", async (req, res) => {
  try {
    const discount = await Bill_Discount.findAll();
    res.send(discount);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/api", async (req, res) => {
  try {
    const discount = await Bill_Discount.create(req.body);
    res.json({
      status: "success",
    });
  } catch (error) {
    console.log(error.errors);
    res.status(500).json({
      message: `Internal Server Error ${error} `,
    });
  }
});



router.put("/api", async (req, res) => {
  try {
    const discount = await Bill_Discount.update(req.body, {
      where: { billDiscount_id: req.body.billDiscount_id },
    });
    res.json({
      status: "success",
    });
  } catch (error) {
    console.log(error.errors);
    res.status(500).json({
      message: `Internal Server Error ${error} `,
    });
  }
});

router.delete("/api", async (req, res) => {
  try {
    const discount = await Bill_Discount.destroy({
      where: { billDiscount_id: req.body.billDiscount_id },
    });
    res.json({
      status: "success",
    });
  } catch (error) {
    console.log(error.errors);
    res.status(500).json({
      message: `Internal Server Error ${error} `,
    });
  }
});

module.exports = router;
