import React from "react";
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
import Navbar from "../../components/Navbar";
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

const Doge = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { mode, toggle } = useTheme();

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
        <Navbar></Navbar>
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
          <Button className="btn-wallet" variant="contained">
            Select Wallet
          </Button>
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
        <Box sx={{ mt: "2rem", fontSize: "1rem", color: "black" }}>
          <a href="https://about.degencoinflip.com">ABOUT</a> |&nbsp;
          <a href="https://about.degencoinflip.com">FAQ</a> |&nbsp;
          <a href="https://about.degencoinflip.com">HOW TO PLAY</a> |&nbsp;
          <a href="https://about.degencoinflip.com">FLIP REPONSIBLY</a> |&nbsp;
          <a href="https://about.degencoinflip.com">BUG BOUNTY</a>
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

export default Doge;
