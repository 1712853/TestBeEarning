import { Box, Stepper, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useEffect, useState } from "react";
import RenderFormCreate from "../components/RenderFormCreate";
import { useNavigate } from "react-router-dom";
const arrWords = [
  "abandon",
  "ability",
  "absent",
  "absorb",
  "abstract",
  "cute",
  "cycle",
  "dad",
  "damage",
  "danger",
  "dawn",
  "day",
  "imitate",
  "immense",
  "immune",
  "impact",
  "switch",
  "sword",
  "symbol",
  "symptom",
  "tail",
  "talent",
  "talk",
  "tank",
];
const CreateNewWallet = () => {
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [words, setWords] = useState([]);
  const handleStepNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  useEffect(() => {
    const arrTemp = [];
    for (let i = 0; i < arrWords.length; i++) {
      arrTemp.push({
        index: i,
        name: arrWords[i],
      });
    }
    setWords(arrTemp);
  }, []);
  // useEffect(() => {
  //   async function fetchData()
  //   {
  //     const url = 'http://metanode.co/json/eng.json';
  //     const res = await fetch(url);
  //     const resJSON = await res.json();
  //     console.log(resJSON)
  //   }
  //   fetchData();
  // },[])
  return (
    <Box
      p={{ xs: 2, sm: 3, md: 5, lg: 7, xl: 9 }}
      sx={{ backgroundColor: "#fbfbfb", height: "100vh" }}
    >
      <Box
        py={1}
        sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5 } }}
      >
        <ChevronLeftIcon fontSize="large" />
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: 18, sm: 20, md: 23, lg: 26, xl: 29 },
          }}
          onClick={() => navigate("/")}
        >
          Create New Wallet
        </Typography>
      </Box>

      <Stepper activeStep={activeStep} alternativeLabel />
      <RenderFormCreate
        words={words}
        handleStepNext={handleStepNext}
        activeStep={activeStep}
      />
    </Box>
  );
};
export default CreateNewWallet;
