import { Box, Paper, Tab, Tabs, Slide, useScrollTrigger } from "@mui/material";
import { useState } from "react";

const Navbar = () => {

    const [value, setValue] = useState("one");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function HideOnScroll(props) {
      const { children, window } = props;
      // Note that you normally won't need to set the window ref as useScrollTrigger
      // will default to window.
      // This is only being set here because the demo is in an iframe.
      const trigger = useScrollTrigger({
        target: window ? window() : undefined,
      });

      return (
        <Slide appear={false} direction="down" in={!trigger}>
          {children}
        </Slide>
      );
    }


    return (
        <HideOnScroll>
        <Box sx={{ borderColor: "divider", width: "fit-content", right: 0, p:3, position:"fixed" }}>
            <Paper elevation={6}>
            <Tabs
                onChange={handleChange}
                value={value}
            >
                <Tab value="one" label="Kartell" />
                <Tab value="two" label="Staat" />
                <Tab value="three" label="Auswirkungen" />
            </Tabs>
            </Paper>
            </Box>
        </HideOnScroll>
     );
}
 
export default Navbar;