import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import NavbarNew from "../../components/NavbarNew";
import Footer from "../../components/Footer";
import coinImage from "../../assets/coin.png";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import { useMediaQuery } from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "hooks/useDarkMode";
import "./index.css";
import btn_img from "../../assets/button.png";
import head_img from "../../assets/head.png";
import tail_img from "../../assets/tail.png";
import img05 from "../../assets/05.png";
import img01 from "../../assets/01.png";
import img25 from "../../assets/25.png";
import img5sol from "../../assets/5sol.png";
import img1sol from "../../assets/1sol.png";
import img2sol from "../../assets/2sol.png";
import uaflag from "../../assets/ua.svg";
import coinGif from "../../assets/coin.gif"
const Flip = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { mode, toggle } = useTheme();
  const [page, setPage] = useState(false);
  const [wait, setWait] = useState(false);
  const setChangePage = () => {
    setPage(true);
  }
  const setWaitDeposit = () => {
    setWait(true);
  }
  return (
    // <Container className={mode === "dark" ? "dark" : "light"} sx={{zIndex: "12", background: "black"}} maxWidth="xl">
    <Box
      className={mode === "dark" ? "dark" : "light"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{ textAlign: "center", py: "2rem", maxWidth: "1536px", mx: "auto" }}
      >
        <NavbarNew></NavbarNew>
        {
          page ?
            <Box>
              {wait ?
                <Box>
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
                      <span style={{textDecoration:"underline"}}>HEADS</span> FOR <span style={{textDecoration:"underline"}}>0.05</span> SOL   
                    </Typography>
                </Box>
                :
                <Box>
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
                      <img src={head_img} style={{ width: desktop ? "15%" : "45%" }} className="Button-dou" />
                      <img src={tail_img} style={{ width: desktop ? "15%" : "45%", marginLeft: "40px" }} className="Button-dou" />
                    </Box>
                    <Typography
                      color={mode === "dark" ? "white" : "black"}
                      fontSize={desktop ? "1.75rem" : "1.5rem"}
                      mt="1rem"
                    >
                      FOR
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <img src={img05} style={{ width: desktop ? "10%" : "30%" }} className="Button-dou" />
                      <img src={img01} style={{ width: desktop ? "10%" : "30%", marginLeft: "20px" }} className="Button-dou" />
                      <img src={img25} style={{ width: desktop ? "10%" : "30%", marginLeft: "20px" }} className="Button-dou" />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center", mt: "1rem" }}>
                      <img src={img5sol} style={{ width: desktop ? "10%" : "30%" }} className="Button-dou" />
                      <img src={img1sol} style={{ width: desktop ? "10%" : "30%", marginLeft: "20px" }} className="Button-dou" />
                      <img src={img2sol} style={{ width: desktop ? "10%" : "30%", marginLeft: "20px" }} className="Button-dou" />
                    </Box>
                    <Divider sx={{ borderColor: mode === "dark" ? "white" : "black" }} className="divider" />
                    <img src={btn_img} style={{ width: desktop ? "33%" : "95%",cursor:"pointer" }} className="Button-dou" onClick={setWaitDeposit} />
                    <Typography
                      color={mode === "dark" ? "white" : "black"}
                      fontSize={desktop ? "1.75rem" : "1.25rem"}
                      mt="1rem"
                    >
                      FEELING GENEROUS&nbsp;&nbsp;
                      <img src={uaflag} style={{ width: "5%", marginTop: "3px" }} />
                    </Typography>
                  </Box>
                </Box>
              }
            </Box>
            :
            <Box>
              <Box sx={{ mt: "4rem" }}>
                <Typography
                  color={mode === "dark" ? "white" : "black"}
                  fontSize={desktop ? "1.75rem" : "1.25rem"}
                  fontFamily="Pixel"
                >
                  #1 MOST TRUSTED PLACE TO FLIP
                </Typography>
                <img src={coinImage} alt="" width={desktop ? "15%" : "30%"} />
              </Box>
              <Box sx={{ mt: "2rem" }}>
                <img src={btn_img} style={{ width: desktop ? "30%" : "75%",cursor:"pointer" }} className="Button-dou" onClick={setChangePage} />
                <Typography mt="1rem"><a href="javascript:;" style={{ color: mode === "dark" ? "white" : "black" }} >USE LEDGER</a></Typography>
                <Typography
                  color={mode === "dark" ? "white" : "black"}
                  fontSize={desktop ? "1.75rem" : "1.25rem"}
                  mt="4rem"
                >
                  RECENT PLAYS
                </Typography>
              </Box>
              <Box className="box-border list-item">
                <List sx={{ padding: "0px" }}>
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img1} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="Wallet (A9vQ) flipped 1 and got rugged."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        in a second
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img2} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="NuclearDust flipped 0.1 and doubled."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        in a second
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img3} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="Wallet (ENYY) flipped 0.05 and doubled."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        4 seconds ago
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img4} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="roHit|Woop Woop🤙 doubled."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        10 seconds ago
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img3} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="KevinGC flipped 0.05 and got rugged."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        13 seconds ago
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img4} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="Wallet (GRuh) flipped 0.5 and doubled."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        14 seconds ago
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img5} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="f0x.sol flipped 0.25 and doubled 3 times."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        17 seconds ago
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img2} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="f0x.sol flipped 0.25 and doubled 3 times."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        24 seconds ago
                      </small>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <img src={img1} alt="" width={desktop ? "4%" : "10%"} />
                      <ListItemText
                        primary="Wallet (A9vQ) flipped 1 and doubled."
                        className={mode === "dark" ? "list-style dark" : "list-style"}
                      />
                      <small
                        className={mode === "dark" ? "small-pad dark" : "small-pad"}
                      >
                        25 seconds ago
                      </small>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Box>
        }

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
