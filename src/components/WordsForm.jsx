import * as React from "react";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import { Box, Button, Typography } from "@mui/material";
import WordsFormItem from "./WordsFormItem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";

const WordsForm = ({ handleStepNext, words }) => {
  return (
    <Box sx={{}}>
      <Box
        p={{ xs: 1 }}
        my={{ xs: 1 }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: 18, sm: 20, md: 23, lg: 26, xl: 29 },
            color: "#004DFF",
          }}
        >
          Auto Gen Seed Phrase?
        </Typography>
        <Typography>1/6</Typography>
      </Box>
      <Box
        my={{ xs: 2 }}
        sx={{
          width: '100%',
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {
          words.map(({index, name})=>(
            <WordsFormItem
              key={index}
              index={index}
              name={name}
            />
          ))
        }
      </Box>
      <Box
        my={{ xs: 3 }}
        sx={{ display: "flex", gap: { xs: 2 }, alignItems: "center" }}
      >
        <Typography
          sx={{
            flexBasis: "75%",
            fontSize: { xs: 17, sm: 21, md: 24, lg: 27, xl: 30 },
          }}
        >
          Tap to Copy or Carefully write down your seed phrase and store it in a
          safe place
        </Typography>
        <Box>
          <AppShortcutIcon
            sx={{
              flexBasis: "25%",
              color: "#004DFF",
              fontSize: {
                xs: "54px",
                sm: "60px",
                md: "66px",
                lg: "72px",
                xl: "78px",
              },
              padding: { xs: 1 },
              border: "1px solid #004DFF",
              borderRadius: "12px",
            }}
          />
        </Box>
      </Box>
      <Box py={{ xs: 1 }} sx={{ textAlign: "center" }}>
        <Box
          mb={3}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: 18, sm: 20, md: 23, lg: 26, xl: 29 },
            }}
          >
            How does this work?
          </Typography>
          <ChevronRightIcon fontSize="large" />
        </Box>
        <Button
          sx={{
            width: { xs: "70%", sm: "60%", md: "50%", lg: "40%", xl: "30%" },
            background: "#004DFF",
            color: "white",
            padding: { xs: "12px" },
            borderRadius: "10px",
            margin: "0 auto",
            fontSize: { xs: 18, sm: 20, md: 23, lg: 26, xl: 29 },
            "&:hover": {
              background: "#00CC96",
            },
          }}
          onClick={handleStepNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
WordsForm.propTypes = {
  handleStepNext: PropTypes.func,
  words: PropTypes.array
};

export default WordsForm;
