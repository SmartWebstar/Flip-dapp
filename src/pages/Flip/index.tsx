import React, { useState } from "react";
import { Box, Button, Typography, Divider } from "@mui/material";
import NavbarNew from "../../components/NavbarNew";
import Footer from "../../components/Footer";
import coinImage from "../../assets/coin.png";
import { useMediaQuery } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "hooks/useDarkMode";
import "./index.css";
import btn_img from "../../assets/button.png";
import face from "../../assets/face.png"
import faceCoin from "../../assets/faceCoin.png"
import uaflag from "../../assets/ua.svg";
import coinGif from "../../assets/coin.gif";
const Flip = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { mode, toggle } = useTheme();
  const [wait, setWait] = useState(false);
  const [head, setHead] = useState(false);
  const [tail, setTail] = useState(false);
  const [coin1, setCoin1] = useState(false);
  const [coin2, setCoin2] = useState(false);
  const [coin3, setCoin3] = useState(false);
  const [coin4, setCoin4] = useState(false);
  const [coin5, setCoin5] = useState(false);
  const [coin6, setCoin6] = useState(false);
  const setWaitDeposit = () => {
    setWait(true);
  };
  const selectHead = () =>{
    setHead(true);
    setTail(false);
  }
  const selectTail = () =>{
    setTail(true);
    setHead(false);
  }
  const selectCoin1 = () =>{
    setCoin1(true);
    setCoin2(false);
    setCoin3(false);
    setCoin4(false);
    setCoin5(false);
    setCoin6(false);
  }
  const selectCoin2 = () =>{
    setCoin2(true);
    setCoin1(false);
    setCoin3(false);
    setCoin4(false);
    setCoin5(false);
    setCoin6(false);
  }
  const selectCoin3 = () =>{
    setCoin3(true);
    setCoin2(false);
    setCoin1(false);
    setCoin4(false);
    setCoin5(false);
    setCoin6(false);
  }
  const selectCoin4 = () =>{
    setCoin4(true);
    setCoin2(false);
    setCoin3(false);
    setCoin1(false);
    setCoin5(false);
    setCoin6(false);
  }
  const selectCoin5 = () =>{
    setCoin5(true);
    setCoin2(false);
    setCoin3(false);
    setCoin4(false);
    setCoin1(false);
    setCoin6(false);
  }
  const selectCoin6 = () =>{
    setCoin6(true);
    setCoin2(false);
    setCoin3(false);
    setCoin4(false);
    setCoin5(false);
    setCoin1(false);
  }
  return (
    // <Container className={mode === "dark" ? "dark" : "light"} sx={{zIndex: "12", background: "black"}} maxWidth="xl">
    <Box
      className={mode === "dark" ? "dark" : "light"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"100vh"
      }}
    >
      <Box
        sx={{ textAlign: "center", py: "2rem", maxWidth: "1536px", mx: "auto" }}
      >
        

        <Box>
          {wait ? (
            
            <Box>
              <Box>
              <NavbarNew></NavbarNew>
              </Box>
              <img src={coinGif} alt="" width={desktop ? "35%" : "100%"} />
              <Typography
                color={mode === "dark" ? "white" : "black"}
                fontSize={desktop ? "1.75rem" : "1.5rem"}
                fontStyle="italic"
              >
                WAITING FOR DEPOSIT
                <span className="dot1">.</span>
                <span className="dot2">.</span>
                <span className="dot3">.</span>
              </Typography>
              <Typography
                color={mode === "dark" ? "white" : "black"}
                fontSize={desktop ? "1.75rem" : "1.5rem"}
              >
                <span style={{ textDecoration: "underline" }}>HEADS</span> FOR{" "}
                <span style={{ textDecoration: "underline" }}>0.05</span> SOL
              </Typography>
            </Box>
          ) : (
            
            <Box>
              <NavbarNew></NavbarNew>
              <Typography
                color={mode === "dark" ? "white" : "black"}
                fontSize={desktop ? "1rem" : "1.25rem"}
                textAlign={desktop ? "right" : "center"}
                mt="1rem"
              >
                SOL 0.01999
              </Typography>
              <Box sx={{ mt: "1rem" }}>
                <img src={coinImage} alt="" width={desktop ? "15%" : "30%"} />
              </Box>
              <Box sx={{ mt: "2rem" }}>
                <Typography
                  color={mode === "dark" ? "white" : "black"}
                  fontSize={desktop ? "1.75rem" : "1.5rem"}
                  mt="4rem"
                >
                  I LIKE
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="contained"  sx={{width: desktop ? "15%" : "45%",backgroundColor:"#fedf57", fontSize:"30px", color:"black",border:head?"solid":""}} className="Button-dou"  onClick={selectHead}>
                   HEAD
                  </Button>
                  <Button variant="contained"  sx={{width: desktop ? "15%" : "45%",backgroundColor:"#fedf57",marginLeft: "40px", fontSize:"30px", color:"black",border:tail?"solid":""}} className="Button-dou"  onClick={selectTail}>
                   TAIL
                  </Button>
                </Box>
                <Typography
                  color={mode === "dark" ? "white" : "black"}
                  fontSize={desktop ? "1.75rem" : "1.5rem"}
                  mt="1rem"
                >
                  FOR
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="contained"  sx={{width: desktop ? "10%" : "30%",backgroundColor:"#fedf57", fontSize:"20px", color:"black",border:coin1?"solid":""}} className="Button-dou"  onClick={selectCoin1}>
                    <img src={faceCoin} style={{width:"30%", marginRight:"10px"}}/>
                    .05SOL 
                  </Button>
                  <Button variant="contained"  sx={{width: desktop ? "10%" : "30%",backgroundColor:"#fedf57",marginLeft: "20px", fontSize:"20px", color:"black",border:coin2?"solid":""}} className="Button-dou"  onClick={selectCoin2}>
                    .1SOL
                  </Button>
                  <Button variant="contained"  sx={{width: desktop ? "10%" : "30%",backgroundColor:"#fedf57",marginLeft: "20px", fontSize:"20px", color:"black",border:coin3?"solid":""}} className="Button-dou"  onClick={selectCoin3}>
                    .25SOL
                  </Button>
                </Box>
                <Box
                  sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}
                >
                  <Button variant="contained"  sx={{width: desktop ? "10%" : "30%",backgroundColor:"#fedf57", fontSize:"20px", color:"black",border:coin4?"solid":""}} className="Button-dou"  onClick={selectCoin4}>
                    0.5SOL
                  </Button>
                  <Button variant="contained"  sx={{width: desktop ? "10%" : "30%",backgroundColor:"#fedf57",marginLeft: "20px", fontSize:"20px", color:"black",border:coin5?"solid":""}} className="Button-dou"  onClick={selectCoin5}>
                    1SOL
                  </Button>
                  <Button variant="contained"  sx={{width: desktop ? "10%" : "30%",backgroundColor:"#fedf57",marginLeft: "20px", fontSize:"20px", color:"black",border:coin6?"solid":""}} className="Button-dou"  onClick={selectCoin6}>
                    2SOL
                    <img src={face} style={{width:"30%", marginLeft:"10px"}}/>
                  </Button>
                </Box>
                <Divider
                  sx={{ borderColor: mode === "dark" ? "white" : "black" }}
                  className="divider"
                />
                <Button variant="contained"  sx={{width: desktop ? "33%" : "95%",backgroundColor:"#fedf57", fontSize:desktop?"40px":"25px", color:"black",cursor: "pointer"}} className="Button-dou"  onClick={setWaitDeposit}>
                  DOUBLE OR NOTHING               
                </Button>
                {/* <Typography
                  color={mode === "dark" ? "white" : "black"}
                  fontSize={desktop ? "1.75rem" : "1.25rem"}
                  mt="1rem"
                >
                  FEELING GENEROUS&nbsp;&nbsp;
                  <img
                    src={uaflag}
                    style={{ width: "5%", marginTop: "3px" }}
                    alt=""
                  />
                </Typography> */}
              </Box>
            </Box>
          )}
        </Box>

        {desktop ? (
          <></>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", mt: "2rem" }}>
            <Button
              variant="outlined"
              sx={{
                width: "20px",
                height: "50px",
                color: mode === "dark" ? "white" : "black",
                borderColor: mode === "dark" ? "white" : "black",
              }}
            >
              <VolumeUpIcon sx={{ fontSize: "20px" }} />
            </Button>
            <Button
              onClick={() => toggle()}
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
            >
              {mode === "light" ? "LIGHT" : "DARK"}
            </Button>
          </Box>
        )}
        <Footer />
      </Box>
    </Box>
    // </Container>
  );
};

export default Flip;
