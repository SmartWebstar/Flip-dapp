import React, { useEffect, useState } from "react";
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
import head_img from "../../assets/head.png";
import tail_img from "../../assets/tail.png";
import img05 from "../../assets/05.png";
import img01 from "../../assets/01.png";
import img25 from "../../assets/25.png";
import img5sol from "../../assets/5sol.png";
import img1sol from "../../assets/1sol.png";
import img2sol from "../../assets/2sol.png";
import uaflag from "../../assets/ua.svg";
import coinGif from "../../assets/coin.gif";
import { useFlipContract } from "hooks/useContract";
import { useWeb3 } from "state/web3";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
const Flip = () => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const { mode, toggle } = useTheme();
  const [loading, setloading] = useState(false);
  const { account } = useWeb3();
  const navigate = useNavigate();
  const flipContract = useFlipContract();

  const [result, setResult] = useState(false);

  const flipCoin = async () => {
    setloading(true);
    if (flipContract && account) {
      try {
        const tx = await flipContract.flipCoin({
          value: ethers.utils.parseUnits("0.1"),
          from: account,
        });
        console.log("tx", tx);
        await tx.wait();
        setloading(false);
      } catch (err) {
        setloading(false);
        console.log("err", err);
      }
    }
  };

  useEffect(() => {
    if (account && flipContract && !loading) {
      const getResult = async () => {
        const result = await flipContract.getFlipResult();
        alert("result : " + result);
        setResult(result);
      };
      getResult();
    }
  }, [account, loading, flipContract]);

  if (!account) navigate("/");
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
        sx={{
          textAlign: "center",
          py: "2rem",
          maxWidth: "1536px",
          mx: "auto",
        }}
      >
        <NavbarNew></NavbarNew>

        <Box>
          {loading ? (
            <Box>
              <img src={coinGif} alt="" width={desktop ? "35%" : "100%"} />
              <Typography
                color={mode === "dark" ? "white" : "black"}
                fontSize={desktop ? "1.75rem" : "1.5rem"}
                fontStyle="italic"
              >
                loadingING FOR DEPOSIT
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
                  <img
                    src={head_img}
                    style={{ width: desktop ? "15%" : "45%" }}
                    className="Button-dou"
                    alt=""
                  />
                  <img
                    src={tail_img}
                    style={{
                      width: desktop ? "15%" : "45%",
                      marginLeft: "40px",
                    }}
                    className="Button-dou"
                    alt=""
                  />
                </Box>
                <Typography
                  color={mode === "dark" ? "white" : "black"}
                  fontSize={desktop ? "1.75rem" : "1.5rem"}
                  mt="1rem"
                >
                  FOR
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={img05}
                    style={{ width: desktop ? "10%" : "30%" }}
                    className="Button-dou"
                    alt=""
                  />
                  <img
                    src={img01}
                    style={{
                      width: desktop ? "10%" : "30%",
                      marginLeft: "20px",
                    }}
                    className="Button-dou"
                    alt=""
                  />
                  <img
                    src={img25}
                    style={{
                      width: desktop ? "10%" : "30%",
                      marginLeft: "20px",
                    }}
                    className="Button-dou"
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: "1rem",
                  }}
                >
                  <img
                    src={img5sol}
                    style={{ width: desktop ? "10%" : "30%" }}
                    className="Button-dou"
                    alt=""
                  />
                  <img
                    src={img1sol}
                    style={{
                      width: desktop ? "10%" : "30%",
                      marginLeft: "20px",
                    }}
                    className="Button-dou"
                    alt=""
                  />
                  <img
                    src={img2sol}
                    style={{
                      width: desktop ? "10%" : "30%",
                      marginLeft: "20px",
                    }}
                    className="Button-dou"
                    alt=""
                  />
                </Box>
                <Divider
                  sx={{ borderColor: mode === "dark" ? "white" : "black" }}
                  className="divider"
                />
                <img
                  src={btn_img}
                  style={{
                    width: desktop ? "33%" : "95%",
                    cursor: "pointer",
                  }}
                  className="Button-dou"
                  onClick={() => flipCoin()}
                  alt=""
                />
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
