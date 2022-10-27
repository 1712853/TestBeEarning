import * as React from "react";
import PropTypes from "prop-types";
import { Box, CardMedia, Typography } from "@mui/material";
import Bottom1 from "../img/Bottom1.png";

const AppBottom = ({ name }) => {
  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "70px",
            sm: "80px",
            md: "90px",
            lg: "100px",
          },
          py: {
            xs: "17px",
            sm: "18px",
            md: "21px",
            lg: "24px",
          },
          boxShadow: "0px 20px 20px rgba(41, 39, 77, 0.15)",
          backdropFilter: "blur(11px)",
          background: "rgba(255, 255, 255, 0.4)",
          borderRadius: "15px",
        }}
      >
        <CardMedia
          component="img"
          image={Bottom1}
          sx={{
            width: "20%",
            margin: "0 auto",
          }}
        />
      </Box>

      <Typography
        my={{ xs: 0, sm: 0.5, md: 1, lg: 1.5 }}
        fontSize={{ xs: "15px", sm: "16px", md: "17px", lg: "18px" }}
        align="center"
      >
        {name}
      </Typography>
    </Box>
  );
};
AppBottom.propTypes = {
  name: PropTypes.string,
};
export default AppBottom;
