import * as React from "react";
import PropTypes from "prop-types";
import { Box, Tab, Tabs } from "@mui/material";
import Transactions from "./Transactions";
import avatar from "../img/Rectangle26.png";

const transactionsHistory = [
  {
    id: 1,
    name: "Eric R Hopper",
    amount: -850,
    currencyUnit: "USDT",
    img: avatar,
  },
  {
    id: 2,
    name: "Melissa S Booker",
    amount: 850,
    currencyUnit: "MCOIN",
    img: avatar,
  },
  { id: 3, name: "Andy Lau", amount: -80, currencyUnit: "MCOIN", img: avatar },
  {
    id: 4,
    name: "Eric R Hopper",
    amount: -850,
    currencyUnit: "USDT",
    img: avatar,
  },
  {
    id: 5,
    name: "Melissa S Booker",
    amount: 850,
    currencyUnit: "MCOIN",
    img: avatar,
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
const History = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ padding: { xs: "10px" } }}>
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
            label="Transactions"
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
            label="Pending"
            {...a11yProps(1)}
          />
        </Tabs>
      </Box>
      <Box>
        <TabPanel value={value} index={0}>
          <Box>
            {transactionsHistory.map(
              ({ id, name, amount, currencyUnit, img }) => (
                <Transactions
                  key={id}
                  name={name}
                  amount={amount}
                  currencyUnit={currencyUnit}
                  img={img}
                />
              )
            )}
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </Box>
  );
};

export default History;
