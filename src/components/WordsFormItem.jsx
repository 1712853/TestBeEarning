import * as React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

const WordsFormItem = ({index, name}) => {
  return (
    <Box
      p={{ xs: 1 }}
      my={{ xs: 1 }}
      sx={{
        flexBasis: {xs: "46%", sm: "29%", lg: "15.5%" },
        display: "flex",
        gap: { xs: 1.5, sm: 3, md: 4, lg: 2, xl: 5 },
        alignItems: "center",
        backgroundColor: "#FFF",
        boxShadow: "0px 7px 32px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
      }}
    >
      <Typography
        p={{ xs: 1 }}
        align="center"
        sx={{
          color: "#004DFF",
          backgroundColor: "#BBCFFB",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      >
        {index+1}
      </Typography>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: { xs: 17, sm: 19, md: 22, lg: 23, xl: 28 },
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

WordsFormItem.propTypes = {
  name: PropTypes.string,
  index: PropTypes.number
};
export default WordsFormItem;
