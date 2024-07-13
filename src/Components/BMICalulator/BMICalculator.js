import React, { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import bg from "../../assets/BMI-Calculator.jpg";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [feet, setFeet] = useState("");
  const [inches, setInches] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight > 0 && feet >= 0 && inches >= 0) {
      const heightInInches = parseInt(feet) * 12 + parseInt(inches);
      const heightInMeters = heightInInches * 0.0254;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      let bmiMessage = "";

      if (bmiValue < 18.5) {
        bmiMessage = "Underweight";
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        bmiMessage = "Normal weight";
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        bmiMessage = "Overweight";
      } else if (bmiValue >= 30 && bmiValue < 35) {
        bmiMessage = "Obesity Class 1";
      } else if (bmiValue >= 35 && bmiValue < 40) {
        bmiMessage = "Obesity Class 2";
      } else {
        bmiMessage = "Obesity Class 3";
      }

      setMessage(bmiMessage);
    } else {
      setMessage("Please enter valid values for weight and height.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
    >
      <Paper
        sx={{
          padding: "20px",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          BMI Calculator
        </Typography>
        <Box sx={{ margin: "10px" }}>
          <TextField
            label="Weight (kg)"
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ margin: "10px" }}>
          <TextField
            label="Height (feet)"
            type="number"
            value={feet}
            onChange={(e) => setFeet(e.target.value)}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box sx={{ margin: "10px" }}>
          <TextField
            label="Height (inches)"
            type="number"
            value={inches}
            onChange={(e) => setInches(e.target.value)}
            margin="normal"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Button
          onClick={calculateBMI}
          variant="contained"
          sx={{ margin: "10px", padding: "10px 20px" }}
        >
          Calculate BMI
        </Button>
        {bmi && (
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="h5" component="h3">
              Your BMI: {bmi}
            </Typography>
            <Typography variant="body1">{message}</Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default BMICalculator;
