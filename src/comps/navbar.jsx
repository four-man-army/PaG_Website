import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const Navbar = () => {

    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

    return (
      <Box
        sx={{
          borderColor: "divider",
          width: "fit-content",
          right: 0,
          p: 3,
          position: "fixed",
        }}
      >
        <Paper elevation={6}>
          <Tabs onChange={handleChange} value={value}>
            <LinkTab value="one" label="Kartell" href="#" />
            <LinkTab value="two" label="Staat" href="#" />
            <LinkTab value="three" label="Auswirkungen" href="#auswirkungen" />
          </Tabs>
        </Paper>
      </Box>
    );
}
 
export default Navbar;