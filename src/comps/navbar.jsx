import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const Navbar = () => {

    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

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
              <Tab value="one" label="Kartell" />
              <Tab value="two" label="Staat" />
              <Tab value="three" label="Auswirkungen" />
            </Tabs>
          </Paper>
        </Box>
    );
}
 
export default Navbar;