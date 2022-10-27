import React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";

const Transactions = ({ img, name, amount, currencyUnit }) => {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid
        item
        xs={7}
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3, lg: 4 },
          my: { xs: 1, md: 2, lg: 2.5 },
        }}
      >
        <Avatar
          alt={name}
          src={img}
          sx={{
            width: { xs: 40, sm: 45, md: 50, lg: 55, xl: 60 },
            height: { xs: 40, sm: 45, md: 50, lg: 55, xl: 60 },
          }}
        />
        <Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: 16, sm: 18, md: 21, lg: 24, xl: 27 },
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: { xs: 13, sm: 15, md: 17, lg: 19, xl: 21 },
              lineHeight: "18px",
            }}
          >
            3 hours ago
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={5}>
        {amount > 0 ? (
          <Typography
            sx={{
              textAlign: "right",
              fontWeight: "600",
              color: "#04B800",
              fontSize: { xs: 16, sm: 18, md: 21, lg: 24, xl: 27 },
            }}
          >
            +{amount} {currencyUnit}
          </Typography>
        ) : (
          <Typography
            sx={{
              textAlign: "right",
              fontWeight: "600",
              color: "#FF0366",
              fontSize: { xs: 16, sm: 18, md: 21, lg: 24, xl: 27 },
            }}
          >
            {amount} {currencyUnit}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
Transactions.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currencyUnit: PropTypes.string.isRequired,
  img: PropTypes.string,
};
export default Transactions;
