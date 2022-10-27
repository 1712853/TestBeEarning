import * as React from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ConfirmWords = ({ primaryIndex, list }) => {
  const [alignment, setAlignment] = React.useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Box
      p={{ xs: 1 }}
      px={{ xs: 1, sm: 1.5, md: 2, lg: 2.5, xl: 3 }}
      my={{ xs: 1 }}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 7px 32px rgba(0, 0, 0, 0.15)",
        borderRadius: "8px",
        justifyContent: "space-around",
        border: "1px solid #D3D7DB",
        gap: { xs: 2 },
      }}
    >
      <Typography
        p={{ xs: 1 }}
        align="center"
        sx={{
          color: "#004DFF",
          border: "1px solid #004DFF",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      >
        {primaryIndex+1}
      </Typography>
      <ToggleButtonGroup
        sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton
          sx={{
            padding: { xs: 1 },
            fontWeight: "700",
            fontSize: { xs: 14, sm: 18, md: 21, lg: 24, xl: 27 },
            flexBasis: { xs: "30%" },
            border: "none",
          }}
          value="word1"
        >
          {list[0]}
        </ToggleButton>
        <ToggleButton
          sx={{
            padding: { xs: 1 },
            fontWeight: "700",
            fontSize: { xs: 14, sm: 18, md: 21, lg: 24, xl: 27 },
            flexBasis: { xs: "30%" },
            border: "none",
          }}
          value="word2"
        >
          {list[1]}
        </ToggleButton>
        <ToggleButton
          sx={{
            padding: { xs: 1 },
            fontWeight: "700",
            fontSize: { xs: 14, sm: 18, md: 21, lg: 24, xl: 27 },
            flexBasis: { xs: "30%" },
            border: "none",
          }}
          value="word3"
        >
          {list[2]}
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};
ConfirmWords.propTypes = {
  primaryIndex: PropTypes.number,
  list: PropTypes.array,
};
export default ConfirmWords;
