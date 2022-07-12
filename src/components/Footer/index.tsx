import * as React from "react";
import Box from "@mui/material/Box";
import foot1 from "../../assets/foot1.png";
import foot2 from "../../assets/foot2.png";
import chat from "../../assets/chat.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter, faDiscord} from "@fortawesome/free-brands-svg-icons";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import "./index.css";
const Footer = () => {
 const desktop = useMediaQuery("(min-width: 1024px)");
  return (
    <Box sx={{ display: "flex",mb:"2rem"}}>
    <Box sx={{mt:desktop?"":"1rem",ml:desktop?"":"15%"}}>
      <Box sx={{ display: "flex", justifyContent:desktop?"":"center" }}>
        <img src={foot1} width={desktop?"2%":"6%"}/>
        <FontAwesomeIcon className="icon-1" icon={faTwitter} />
        <FontAwesomeIcon className="icon-2" icon={faDiscord} />
        <img src={foot2} width={desktop?"2%":"6%"} />
      </Box>
      <Typography className="text-foot">Solana Network: 2106 TPS</Typography>
    </Box>
    <img src={chat} width={desktop?"5%":"15%"} className="chat"/>
    </Box>
  );
}
export default Footer;