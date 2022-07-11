import React from "react";
import { Box, Card, Container, Grid, Typography, Stack } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTokenDetails } from "state/token/hooks";

interface Iprops {
  remainingTime?: any;
}

const Dashboard = () => {
  const {
    tokenPrice,
    marketCap,
    circulateSupply,
    treasuryBalance,
    totalPairLiquidity,
    lastRewardTime,
  } = useTokenDetails();

  const renderTime = ({ remainingTime }: Iprops) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="value">
          {Math.floor(remainingTime / 60)} : {remainingTime % 60}
        </div>
      </div>
    );
  };
  return (
    <Container maxWidth="lg">
      <Box>
        <Card variant="outlined" style={{ padding: "10px" }}>
          <Grid container spacing={5}>
            <Grid
              item
              xs={12}
              md={4}
              style={{ textAlign: "center" }}
              spacing={2}
            >
              <Box>
                Market Cap
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  ${marketCap.toFixed(2)}
                </Typography>
              </Box>
              <Box>
                Circulating Supply
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  {circulateSupply}
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{ textAlign: "center" }}
              spacing={2}
            >
              <Box>
                LANUNA Price
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  ${tokenPrice.toFixed(2)}
                </Typography>
              </Box>
              <Box>
                Backed Liquidity
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  0%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack spacing={1} alignItems="center">
                <Typography>Next Rebase</Typography>
                <CountdownCircleTimer
                  isPlaying
                  duration={360}
                  initialRemainingTime={
                    360 -
                    ((Math.floor(Date.now() / 1000) - lastRewardTime) % 360)
                  }
                  size={100}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[1800, 1200, 600, 0]}
                  strokeWidth={5}
                  onComplete={() => ({ shouldRepeat: true })}
                >
                  {renderTime}
                </CountdownCircleTimer>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Grid container spacing={2} style={{ marginTop: 3 }}>
        <Grid item xs={12} md={6} style={{ textAlign: "center" }}>
          <Card variant="outlined" style={{ padding: "10px" }}>
            Market Value of Treasury Assets
            <Typography
              variant="h5"
              color="text.secondary"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              ${treasuryBalance.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            variant="outlined"
            style={{ padding: "10px", textAlign: "center" }}
          >
            Total Pair Liquidity
            <Typography
              variant="h5"
              color="text.secondary"
              style={{ paddingTop: "10px", paddingBottom: "10px" }}
            >
              ${totalPairLiquidity.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Box mt={5}>
        <Grid container spacing={3} style={{ marginTop: "20px" }}></Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
