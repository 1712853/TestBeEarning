import * as React from "react";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slide,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PropTypes from "prop-types";
import ConfirmWords from "./ConfirmWords";
import { useState } from "react";
import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ConfirmForm = ({ handleStepNext, words }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [wordsSelected, setWordsSelected] = useState([]);
  useEffect(() => {
    const arrTemp = [];
    for (let i = 0; i < 18; i = i + 3) {
      arrTemp.push({
        list: [words[i].name, words[i + 1].name, words[i + 2].name],
        primaryIndex: words[i].index,
      });
    }
    setWordsSelected(arrTemp);
  }, []);

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
          Confirm Your Seed Phrase
        </Typography>
        <Typography>2/6</Typography>
      </Box>
      <Box
        my={{ xs: 2 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ width: "100%" }}>
          {wordsSelected.map(({ list, primaryIndex }) => (
            <ConfirmWords
              key={primaryIndex}
              primaryIndex={primaryIndex}
              list={list}
            />
          ))}
        </Box>
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
          onClick={handleClickOpen}
        >
          Submit
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            sx={{
              fontSize: { xs: "18px", md: "20px", lg: "20px" },
              textAlign: "center",
            }}
          >
            {"Your wallet has been created!"}
          </DialogTitle>
          <DialogContent>
            <RadioGroup
              sx={{ my: 2 }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Metanode cannot recover your seed phrase. You should back up your seed phrase and keep it safe, it’s your responsibility."
              />
            </RadioGroup>
            <RadioGroup
              sx={{ my: 2 }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="Your transaction data is one of the most important security keys which is needed for every incurred transaction. You should back up your data automatically and secure back up file with a strong pasword."
              />
            </RadioGroup>
            <RadioGroup
              sx={{ my: 2 }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            >
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="To keep your backup file safe, you should also keep secret your back up location and secure it."
              />
            </RadioGroup>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                width: { xs: "70%", sm: "60%", md: "50%" },
                background: "#004DFF",
                color: "white",
                padding: { xs: "12px" },
                borderRadius: "10px",
                margin: "0 auto",
                fontSize: { xs: 18, sm: 20, md: 23, lg: 25, xl: 28 },
                "&:hover": {
                  background: "#00CC96",
                },
              }}
              onClick={handleClose}
            >
              I UNDERSTAND
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};
ConfirmForm.propTypes = {
  handleStepNext: PropTypes.func.isRequired,
  words: PropTypes.array,
};

export default ConfirmForm;
