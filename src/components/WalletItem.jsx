import * as React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";

const WalletItem = ({ name, amount, currencyUnit, color }) => {
  return (
    <Box
      p={{ xs: "10px", sm: "13px", md: "16px", lg: "19px", xl: "22px" }}
      mb={{ xs: "20px" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: {
          xs: "140px",
          sm: "155px",
          md: "170px",
          lg: "185px",
          xl: "200px",
        },
        width: {
          xs: "140px",
          sm: "155px",
          md: "170px",
          lg: "185px",
          xl: "200px",
        },
        backgroundImage:
          "linear-gradient(137deg, #cdcce0 -71.81%, rgba(255, 255, 255, 0) 83.62%)",
        boxShadow: " 0px 10px 20px rgba(85, 76, 255, 0.2)",
        backdropFilter: "blur(30px)",
        borderRadius: "22px",
      }}
    >
      <Box
        sx={{
          width: { xs: "50px", lg: "55px", xl: "60px" },
          height: { xs: "50px", lg: "55px", xl: "60px" },
          backgroundColor: `${color}`,
          borderRadius: "15px",
        }}
      ></Box>
      <Box>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: { xs: 13, sm: 15, md: 17, lg: 19, xl: 20 },
            lineHeight: "18px",
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: { xs: 16, sm: 17, md: 19, lg: 21, xl: 24 },
          }}
        >
          {amount} {currencyUnit}
        </Typography>
      </Box>
    </Box>
  );
};
WalletItem.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currencyUnit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
export default WalletItem;
