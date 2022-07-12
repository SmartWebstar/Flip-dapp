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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useState } from "react";
import { useTheme } from "hooks/useDarkMode";

const Navbar = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  
  const {mode, toggle} = useTheme()

  return (
    <Box sx={{ display: "flex", justifyContent: desktop?"space-between":"center"}}>
      {
        desktop ?
          <Box sx={{ display: "flex" }}>
            <Button variant="outlined" sx={{ width: "50px", height: "50px", color: mode === "dark" ? "white" : "black", borderColor: mode === "dark" ? "white" : "black" }}>
              <VolumeUpIcon sx={{ fontSize: "30px" }} />
            </Button>
            <Button variant="outlined" sx={{ width: "100px", height: "50px", color: mode === "dark" ? "white" : "black", fontSize: "1rem", ml: "1rem", borderColor: mode === "dark" ? "white" :  "black" }} endIcon={mode === "light" ? <LightModeIcon /> : <DarkModeIcon/>} onClick={() => toggle()}> {mode === "dark" ? "DARK" : "LIGHT"} </Button>
          </Box>
          :
          <></>
      }

      <Box sx={{ display: "flex"}}>
        <Button className={mode === "dark" ? "button-menu dark" : "button-menu"} variant="contained" endIcon={desktop? <ArrowDropDownIcon />:<></>}>RECENT</Button>
        <Button className={mode === "dark" ? "button-menu dark" : "button-menu"}  variant="contained" endIcon={desktop? <EmojiEventsIcon />:<></>}>TOP STREAKS</Button>
        <Button className={mode === "dark" ? "button-menu dark" : "button-menu"}  variant="contained" endIcon={<ArrowDropDownIcon />}>STATS{desktop?<BarChartIcon />:<></>}</Button>
        <Button className={mode === "dark" ? "button-menu dark" : "button-menu"}  variant="contained" endIcon={desktop? <IosShareIcon />:<></>}>LIVEPLAYERS</Button>
      </Box>
    </Box>
  );
}
export default Navbar;