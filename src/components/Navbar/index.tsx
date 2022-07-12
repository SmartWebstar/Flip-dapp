import * as React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import IosShareIcon from '@mui/icons-material/IosShare';
import { useMediaQuery } from "@mui/material";
import { useState } from "react";

const Navbar = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const setThemeMode = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <Box sx={{ display: "flex", justifyContent: desktop?"space-between":"center", mt: "2rem" }}>
      {
        desktop ?
          <Box sx={{ display: "flex" }}>
            <Button variant="outlined" sx={{ width: "50px", height: "50px", color: "black", borderColor: "black" }}>
              <VolumeUpIcon sx={{ fontSize: "30px" }} />
            </Button>
            <Button variant="outlined" sx={{ width: "100px", height: "50px", color: "black", fontSize: "1rem", ml: "1rem", borderColor: "black" }} endIcon={<LightModeIcon />} onClick={setThemeMode}>LIGHT</Button>
          </Box>
          :
          <></>
      }

      <Box sx={{ display: "flex"}}>
        <Button className="button-menu" variant="contained" endIcon={desktop? <ArrowDropDownIcon />:<></>}>RECENT</Button>
        <Button className="button-menu" variant="contained" endIcon={desktop? <EmojiEventsIcon />:<></>}>TOP STREAKS</Button>
        <Button className="button-menu" variant="contained" endIcon={<ArrowDropDownIcon />}>STATS{desktop?<BarChartIcon />:<></>}</Button>
        <Button className="button-menu" variant="contained" endIcon={desktop? <IosShareIcon />:<></>}>LIVEPLAYERS</Button>
      </Box>
    </Box>
  );
}
export default Navbar;