import { Box } from "@mui/material";
import History from "../components/History";
import NavBottom from "../components/NavBottom";
import Header from "../components/Header";
import Wallet from "../components/Wallet";

const HomePage = () => {
    return (
        <Box p={{xs:1,sm:3, md: 5, lg:7, xl:9}} my={{xs: 1}}>
            <Header />
            <Wallet />
            <History />
            <NavBottom />
        </Box>
    )
}
export default HomePage;
