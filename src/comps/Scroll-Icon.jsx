import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import "./Scroll-Icon.css";

export default function Scrollicon() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });
  });

  return (
    !hidden && (
      <Box
        className="floating"
        sx={{ position: "fixed", bottom: "35px", left: 0, right: 0 }}
      >
        <Typography variant="h5" align="center">
          {" "}
          scroll{" "}
        </Typography>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <KeyboardDoubleArrowDownIcon />
        </Box>
      </Box>
    )
  );
}
