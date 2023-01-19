import { Brightness7, Brightness4 } from "@mui/icons-material";
import { IconButton, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { createContext } from "react";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Theme = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <Box sx={{ position: "fixed", top: 10, left: 10, backgroundColor: theme.palette.background.default, borderRadius: "100%" }}>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? <Brightness7  /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};

export default Theme;
export { ColorModeContext };
