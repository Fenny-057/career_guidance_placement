const express = require("express");
const router = express.Router();
const axios = require("axios");

const Student = require("../models/Student");

// Prediction route
router.post("/predict", async (req, res) => {
  try {

    const { ssc_p, hsc_p, degree_p } = req.body;

    // Call Python ML API
    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      {
        ssc_p,
        hsc_p,
        degree_p
      }
    );

    const prediction = response.data.prediction;

    // Save to database
    const student = new Student({
      ssc_p,
      hsc_p,
      degree_p,
      prediction
    });

    await student.save();

    res.json({
      prediction
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Prediction failed"
    });
  }
});

module.exports = router;