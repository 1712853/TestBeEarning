import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
import WalletItem from "./WalletItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const walletInfor = [
  {
    id: 1,
    name: "Meta Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#0084F4",
  },
  {
    id: 2,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#FC9D00",
  },
  {
    id: 3,
    name: "Meta Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#0084F4",
  },
  {
    id: 4,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "USDT",
    color: "#FC9D00",
  },
  {
    id: 5,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#FC9D00",
  },
  {
    id: 6,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#FC9D00",
  },
  {
    id: 7,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#0084F4",
  },
  {
    id: 8,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#0084F4",
  },
  {
    id: 9,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#FC9D00",
  },
  {
    id: 10,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#FC9D00",
  },
  {
    id: 11,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#FC9D00",
  },
  {
    id: 12,
    name: "Metanode Wallet",
    amount: 90500,
    currencyUnit: "MCOIN",
    color: "#FC9D00",
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Wallet = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ padding: { xs: "20px" } }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            sx={{
              padding: {
                xs: "12px 10px",
                sm: "14px 20px",
                md: "14px 26px",
                lg: "16px 36px",
                xl: "16px 42px",
              },
              fontSize: { xs: 15, sm: 18, md: 21, lg: 24, xl: 27 },
            }}
            label="My Wallet"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              padding: {
                xs: "12px 10px",
                sm: "14px 20px",
                md: "14px 26px",
                lg: "16px 36px",
                xl: "16px 42px",
              },
              fontSize: { xs: 15, sm: 18, md: 21, lg: 24, xl: 27 },
            }}
            label="Report"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              padding: {
                xs: "12px 10px",
                sm: "14px 20px",
                md: "14px 26px",
                lg: "16px 36px",
                xl: "16px 42px",
              },
              fontSize: { xs: 15, sm: 18, md: 21, lg: 24, xl: 27 },
            }}
            label="Setting"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <Slider {...settings}>
            {walletInfor.map(({ id, name, amount, currencyUnit, color }) => (
              <WalletItem
                key={id}
                name={name}
                amount={amount}
                currencyUnit={currencyUnit}
                color={color}
              />
            ))}
          </Slider>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Wallet;
