import { Card, Container, Grid, Stack, Typography } from "@mui/material";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useTokenBalance, useTokenDetails } from "state/token/hooks";
import React, { useEffect, useState } from "react";

interface Iprops {
  remainingTime?: any;
}

const Account = () => {
  const tokenBalance = useTokenBalance();
  const { tokenPrice, stakingAPY, lastRewardTime } = useTokenDetails();
  const [dailyEarning, setDailyEarning] = useState(0);
  const [nextRewardPercent, setNextRewardPercent] = useState(0);
  const [dailyEarningRate, setDailyEarningRate] = useState(0);

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
          <Typography color="text.secondary">
            {Math.floor(remainingTime / 60)} : {remainingTime % 60}
          </Typography>
        </div>
      </div>
    );
  };

  const calcNewBalance = () => {
    let value = stakingAPY;
    value = Math.pow(value - 1, 1 / (365 * 240)) - 1 || 0;
    setNextRewardPercent(value * 100);

    let balance = Number(tokenBalance);
    let dailyEarn = 100;
    for (let i = 0; i < 240; i++) {
      balance += balance * value;
      dailyEarn += dailyEarn * value;
    }
    setDailyEarningRate(dailyEarn);

    return balance;
  };

  useEffect(() => {
    const newBalance = calcNewBalance();
    setDailyEarning(newBalance - tokenBalance);
  }, [stakingAPY, tokenBalance]);

  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Card variant="outlined" style={{ padding: "10px" }}>
            APY
            <Typography color="text.secondary">
              {(stakingAPY * 100).toFixed(2)}%
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card variant="outlined" style={{ padding: "10px" }}>
            Your Balance
            <Typography color="text.secondary">
              {tokenBalance.toFixed(2)} LANUNA
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            sx={{ textAlign: "-webkit-center", padding: "10px" }}
          >
            Next Rebase:
            <CountdownCircleTimer
              isPlaying
              duration={360}
              initialRemainingTime={
                360 - ((Math.floor(Date.now() / 1000) - lastRewardTime) % 360)
              }
              size={100}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[1800, 1200, 600, 0]}
              strokeWidth={5}
              onComplete={() => ({ shouldRepeat: true })}
            >
              {renderTime}
            </CountdownCircleTimer>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card
            variant="outlined"
            sx={{ textAlign: "-webkit-center", padding: "10px" }}
          >
            Your Earnings/Daily
            <Typography color="text.secondary">
              {dailyEarning.toFixed(2)}
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ padding: "10px" }}>
            <Stack spacing={2}>
              <Stack direction="row" justifyContent="space-between">
                Current LANUNA Price
                <Typography color="text.secondary">
                  ${tokenPrice.toFixed(2)}
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                Next Reward Amount
                <Typography color="text.secondary">
                  {(nextRewardPercent * tokenBalance).toFixed(2)} LANUNA
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                Next Reward Amount USD
                <Typography color="text.secondary">
                  {(nextRewardPercent * tokenBalance * tokenPrice).toFixed(2)}
                  USD
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                Next Reward Yield
                <Typography color="text.secondary">
                  {nextRewardPercent.toFixed(5)} %
                </Typography>
              </Stack>
              <Stack direction="row" justifyContent="space-between">
                ROI (N/A-Day Rate)
                <Typography color="text.secondary">
                  {dailyEarningRate.toFixed(2)} %
                </Typography>
              </Stack>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Account;
