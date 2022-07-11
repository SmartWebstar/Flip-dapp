import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputAdornment,
  OutlinedInput,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useTokenBalance, useTokenDetails } from "state/token/hooks";
import { trim } from "utils/trim";

const Calculator = () => {
  const tokenBalance = useTokenBalance();
  const { tokenPrice, stakingAPY } = useTokenDetails();

  const [memoAmount, setMemoAmount] = useState(0);
  const [rewardYield, setRewardYield] = useState(0);
  const [priceAtPurchase, setPriceAtPurchase] = useState(0);

  const [days, setDays] = useState(1);
  const [rewardsEstimation, setRewardsEstimation] = useState("0");

  useEffect(() => {
    setPriceAtPurchase(tokenPrice);
    setRewardYield(stakingAPY * 100);
    setMemoAmount(tokenBalance);
  }, [tokenPrice, stakingAPY, tokenBalance]);

  const calcNewBalance = () => {
    let value = stakingAPY;
    value = Math.pow(value - 1, 1 / (365 * 240)) - 1 || 0;
    let balance = Number(memoAmount);
    for (let i = 0; i < days * 240; i++) {
      balance += balance * value;
    }
    return balance;
  };

  useEffect(() => {
    const newBalance = calcNewBalance();
    setRewardsEstimation(trim(newBalance, 6));
  }, [days, stakingAPY, memoAmount]);

  return (
    <>
      <Container>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              Calculator
            </Typography>
            <Typography variant="h6" component="div">
              Estimate your returns
            </Typography>
            <Grid container sx={{ py: 5 }} spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                Lanuna Price{" "}
                <Typography color="text.secondary">
                  ${tokenPrice.toFixed(4)}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                Current APY{" "}
                <Typography color="text.secondary">
                  {rewardYield.toFixed(2)} %
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                Your Balance{" "}
                <Typography color="text.secondary">
                  {tokenBalance.toFixed(2)} Lanuna
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack direction="column">
                  Lanuna Amount
                  <FormControl sx={{ my: 1, width: "100%" }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={memoAmount}
                      onChange={(e) => setMemoAmount(Number(e.target.value))}
                      endAdornment={
                        <InputAdornment
                          position="end"
                          onClick={() => {
                            setMemoAmount(tokenBalance);
                          }}
                        >
                          Max
                        </InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack direction="column">
                  APY(%)
                  <FormControl sx={{ my: 1, width: "100%" }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={rewardYield.toFixed(2)}
                      onChange={(e) => setRewardYield(Number(e.target.value))}
                      endAdornment={
                        <InputAdornment position="end">Current</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack direction="column">
                  Lanuna Price at priceAtPurchase ($)
                  <FormControl sx={{ my: 1, width: "100%" }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={priceAtPurchase.toFixed(4)}
                      onChange={(e) =>
                        setPriceAtPurchase(Number(e.target.value))
                      }
                      endAdornment={
                        <InputAdornment position="end">Current</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Stack direction="column">
                  Future Lanuna Balance ($)
                  <FormControl sx={{ my: 1, width: "100%" }} variant="outlined">
                    <OutlinedInput
                      id="outlined-adornment-weight"
                      value={(Number(rewardsEstimation) * tokenPrice).toFixed(
                        2
                      )}
                      endAdornment={
                        <InputAdornment position="end">Current</InputAdornment>
                      }
                      aria-describedby="outlined-weight-helper-text"
                      inputProps={{
                        "aria-label": "weight",
                      }}
                    />
                  </FormControl>
                </Stack>
              </Grid>
              <Grid item xs={12} sx={{ mx: 5 }}>
                {days} days
                <Slider
                  value={days}
                  min={1}
                  max={365}
                  onChange={(e, value) => setDays(Number(value))}
                  aria-labelledby="input-slider"
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Stack sx={{ width: "100%", px: 5 }} spacing={3}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography>Your initial investment</Typography>
                <Typography color="text.secondary">
                  $ {(tokenPrice * memoAmount).toFixed(2)}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography>LANUNA rewards estimation</Typography>
                <Typography color="text.secondary">
                  {rewardsEstimation} LUNA{" "}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                width="100%"
              >
                <Typography>Potential return</Typography>
                <Typography color="text.secondary">
                  {(
                    Number(rewardsEstimation) * tokenPrice -
                    tokenPrice * memoAmount
                  ).toFixed(2)}
                </Typography>
              </Stack>
            </Stack>
          </CardActions>
        </Card>
      </Container>
    </>
  );
};

export default Calculator;
