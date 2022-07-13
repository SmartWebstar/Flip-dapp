import * as React from "react";
import "./index.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LightModeIcon from "@mui/icons-material/LightMode";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BarChartIcon from "@mui/icons-material/BarChart";
import IosShareIcon from "@mui/icons-material/IosShare";
import { useMediaQuery } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useTheme } from "hooks/useDarkMode";
import solimg from "../../assets/sol.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import coinImage from "../../assets/coin.png";
import {FormControl,TextField} from "@mui/material";


const NavbarNew = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");

  const { mode, toggle } = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: mode==="dark"?"#0f172a":'background.paper',
    border: '0px solid #000',
    textAlign: 'center',
    p: 4,
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: desktop ? "space-between" : "center",
      }}
    >
      {desktop ? (
        <Box sx={{ display: "flex" }}>
          <Button
            variant="outlined"
            sx={{
              width: "50px",
              height: "50px",
              color: mode === "dark" ? "white" : "black",
              borderColor: mode === "dark" ? "white" : "black",
            }}
          >
            <VolumeUpIcon sx={{ fontSize: "30px" }} />
          </Button>
          
          <Button
            variant="outlined"
            sx={{
              width: "100px",
              height: "50px",
              color: mode === "dark" ? "white" : "black",
              fontSize: "1rem",
              ml: "1rem",
              borderColor: mode === "dark" ? "white" : "black",
            }}
            endIcon={mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            onClick={() => toggle()}
          >
            {" "}
            {mode === "dark" ? "DARK" : "LIGHT"}{" "}
          </Button>
        </Box>
      ) : (
        <></>
      )}

      <Box sx={{ display: "flex", ml:desktop?"40rem":""}}>
        <Button
          className={mode === "dark" ? "button-menu dark" : "button-menu"}
          variant="contained"
          endIcon={desktop ? <ArrowDropDownIcon /> : <></>}
        >
          RECENT
        </Button>
        <Button
          className={mode === "dark" ? "button-menu dark" : "button-menu"}
          variant="contained"
          endIcon={desktop ? <EmojiEventsIcon /> : <></>}
        >
          TOP STREAKS
        </Button>
        <Button
          className={mode === "dark" ? "button-menu dark" : "button-menu"}
          variant="contained"
          endIcon={<ArrowDropDownIcon />}
        >
          STATS{desktop ? <BarChartIcon /> : <></>}
        </Button>
        <Button
          className={mode === "dark" ? "button-menu dark" : "button-menu"}
          variant="contained"
          endIcon={desktop ? <IosShareIcon /> : <></>}
        >
          LIVEPLAYERS
        </Button>
        <img src={solimg} style={{width:desktop?"7%":"10%", cursor:"pointer"}} onClick={handleOpen}/>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className={mode === "dark" ? "modal-dark" : "modal-white"}>USER PROFILE</Typography>
          <img src={coinImage} className="modal-coin"/>
          <Box sx={{display:"flex", justifyContent:"space-around"}}>
            <Button sx={{backgroundColor:"black", color:"white"}} size="small">CHANGE AVATAR</Button>
            <Button variant="contained" size="small">LINK DISOCRD<FontAwesomeIcon icon={faDiscord} /></Button>
          </Box>
          <FormControl fullWidth sx={{mt:"1rem"}}>
            <TextField id="outlined-basic" label="NickName" variant="outlined" />
          </FormControl>
          <Typography sx={{color:mode==="dark"?"white":"black", fontSize:"0.875rem"}} mt="1rem">Degen since Jul 2022.</Typography>
          <FormControl fullWidth >
            <Button sx={{backgroundColor:"#ffca2c", color:"black"}} size="small">SAVE</Button>
          </FormControl>
        </Box>
      </Modal>
    </Box>
  );
};
export default NavbarNew;
