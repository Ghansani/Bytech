const express = require("express");
const router = express.Router();
const { Discount } = require("../models");

const { Sequelize,Op } = require('sequelize');

router.get('/api/getall', async (req, res) => {
  try {
    const discount = await Discount.findAll();
    res.send(discount);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
  });
  


router.post("/api", async (req, res) => {
  try {
    const { product_id, startDate, endDate } = req.body;

    // Check if there is an existing discount for the same product ID and date range
    const existingDiscount = await Discount.findOne({
      where:{
      product_id: product_id,
      [Op.or]: [
        { startDate: { [Op.lte]: startDate }, endDate: { [Op.gte]: startDate } },
        { startDate: { [Op.lte]: endDate }, endDate: { [Op.gte]: endDate } },
        { startDate: { [Op.gte]: startDate }, endDate: { [Op.lte]: endDate } }
      ]
     
 } });

   
    if (existingDiscount) {
      return res.status(400).json({
        message: "Another discount already exists for the same product and date range."
      });
    }


    // Create the discount record
    const discount = await Discount.create(req.body);
    res.json({
      status: "success"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Internal Server Error: ${error}`
    });
  }
});

 

  router.put("/api", async (req, res) => {
    try {
      const { product_id, startDate, endDate, discount_id } = req.body;
      // const { discountId } = req.params;
  
      // Check if there are existing discounts for the same product ID and overlapping date range
      console.log(req.body)
      const existingDiscounts = await Discount.findAll({
        where: {
          product_id: product_id,
          discount_id: { [Op.ne]:  discount_id }, // Exclude the current discount being edited
          [Op.or]: [
            { startDate: { [Op.between]: [startDate, endDate] } },
            { endDate: { [Op.between]: [startDate, endDate] } },
            { [Op.and]: [{ startDate: { [Op.lte]: startDate } }, { endDate: { [Op.gte]: endDate } }]}
          ]
        }
      });

    
  
      if (existingDiscounts.length > 0) {
        return res.status(400).json({
          message: "The edited discount clashes with existing discounts for the same product and date range."
        });
      }
  
      // Update the discount record
      const updatedDiscount = await Discount.update(req.body, {
        where: { discount_id:  discount_id }
      });
  
      if (updatedDiscount) {
        return res.json({
          status: "success"
        });
      } else {
        return res.status(404).json({
          message: "Discount not found."
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: `Internal Server Error: ${error}`
      });
    }
  });
  
    router.delete("/api", async (req, res) => {
      console.log(req.body)
      try {
        const discount = await Discount.destroy({ where: { product_id: req.body.product_id } });
        res.json({
          status : "success"
        });
      } catch (error) {
        console.log(error)
        res.status(500).json({
          message : `Internal Server Error ${error} `
        });
      }
      });
module.exports = router;
