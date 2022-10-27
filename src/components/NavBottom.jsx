import * as React from "react";
import { AppBar, Box, Fab, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AppBottom from "./AppBottom";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});
const NavBottom = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100vw",
        top: "auto",
        bottom: 0,
        left: 0,
        height: {
          xs: "130px",
          sm: "145px",
          md: "160px",
          lg: "175px",
          xl: "190px",
        },
        pt: { xs: "10px", sm: "12px", md: "14px", lg: "16px", xl: "18px" },
        backgroundColor: "#554CFF",
      }}
    >
      <Toolbar sx={{ padding: 0 }}>
        <StyledFab
          aria-label="add"
          sx={{ backgroundColor: "inherit", color: "black" }}
        >
          <ExpandLessIcon fontSize="large" />
        </StyledFab>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <AppBottom name="DApp Here" />
          <AppBottom name="DApp Here DApp Here" />
          <AppBottom name="DApp Here DApp Here" />
          <AppBottom name="DApp Here" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBottom;
