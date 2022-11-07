import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Typography, Box } from "@mui/material";
import { HideOn } from "react-hide-on-scroll";
import "./Scroll-Icon.css";

export default function Scrollicon() {
  return (
    <HideOn atHeight height={100}>
      <Box
        className="floating"
        sx={{ position: "fixed", bottom: "35px", left: 0, right: 0 }}
      >
        <Typography variant="h5" align="center" color="rgb(21, 21, 21)">
          {" "}
          scroll{" "}
        </Typography>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <KeyboardDoubleArrowDownIcon />
        </Box>
      </Box>
    </HideOn>
  );
}
