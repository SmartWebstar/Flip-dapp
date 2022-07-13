import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "routes";
import { useTokenDetails } from "state/token/hooks";
import Box from "@mui/material/Box";
import Loading from "components/Loading";

function App() {
  const { isLoading } = useTokenDetails();

  return (
    <BrowserRouter>
      <Box>
        <Routes />
      </Box>
      <Loading isLoading={isLoading} />
    </BrowserRouter>
  );
}

export default App;
