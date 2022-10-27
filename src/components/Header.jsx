import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Box, Grid, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import avatar from "../img/Image5.png"
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={5} sm={4} sx={{ display: "flex", gap: { xs: 2, lg: 3 } }}>
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{
            width: { xs: 40, sm: 50, md: 60, lg: 70, xl: 80 },
            height: { xs: 40, sm: 50, md: 60, lg: 70, xl: 80 },
          }}
        />
        <Box>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: { xs: 16, sm: 19, md: 22, lg: 25, xl: 28 },
            }}
          >
            Minh Nguyen
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: { xs: 13, sm: 16, md: 19, lg: 22, xl: 25 },
              lineHeight: "18px",
            }}
          >
            @Meta
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={5}
        sm={3.5}
        md={2.7}
        lg={2.5}
        xl={2.4}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: "10px",sm: "13px", md: "20px", lg: "30px", xl: "55px" },
        }}
      >
        <AddIcon
          sx={{
            fontSize: { xs: "45px", md: "50px", lg: "55px", xl: "60px" },
            padding: { xs: "10px",sm: "10px 9px", md: "12px 4px"},
            flex: 1,
            boxShadow: "0px 10px 20px rgba(41, 39, 77, 0.1)",
            backgroundImage:
              "linear-gradient(to left, rgba(218, 218, 255,1),rgba(218, 218, 255,0.4),rgba(218, 218, 255,0))",
            backdropFilter: "blur(11px)",
            borderRadius: "40%",
          }}
          onClick={()=>navigate("/create")}
        />
        <OpenInNewIcon
          sx={{
            fontSize: { xs: "45px", md: "50px", lg: "55px", xl: "60px" },
            padding: { xs: "10px",sm: "10px 9px", md: "12px 4px"},
            flex: 1,
            backgroundImage:
              "linear-gradient(to left, rgba(218, 218, 255,1),rgba(218, 218, 255,0.4),rgba(218, 218, 255,0))",
            boxShadow: "0px 10px 20px rgba(41, 39, 77, 0.1)",
            backdropFilter: "blur(11px)",
            borderRadius: "40%",
          }}
        />
        <NotificationsRoundedIcon
          sx={{
            fontSize: { xs: "45px", md: "50px", lg: "55px", xl: "60px" },
            padding: { xs: "10px",sm: "10px 9px", md: "12px 4px"},
            flex: 1,
            backgroundImage:
              "linear-gradient(to left, rgba(218, 218, 255,1),rgba(218, 218, 255,0.4),rgba(218, 218, 255,0))",
            boxShadow: "0px 10px 20px rgba(41, 39, 77, 0.1)",
            backdropFilter: "blur(11px)",
            borderRadius: "40%",
          }}
        />
      </Grid>
    </Grid>
  );
};
export default Header;
