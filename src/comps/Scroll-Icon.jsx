import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
<<<<<<< HEAD
import { Typography, Box } from "@mui/material";
=======
import { Typography, Box } from '@mui/material';
>>>>>>> feature_page_1
import "./Scroll-Icon.css";

export default function Scrollicon() {
<<<<<<< HEAD
  return (
    <Box
      className="floating"
      sx={{ position: "fixed", bottom: "35px", left: 0, right: 0 }}
    >
      <Typography variant="h5" align="center" color="rgb(21, 21, 21)">
        {" "}
        scroll{" "}
      </Typography>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <KeyboardDoubleArrowDownIcon/>
      </Box>
    </Box>
  );
=======

    return (
            <Box className='floating' sx={{ position: "fixed", bottom: "35px", left: 0, right: 0 }}>
                <Typography variant="h5" align="center"> scroll </Typography>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <KeyboardDoubleArrowDownIcon />
                </Box>
            </Box>
    )
>>>>>>> feature_page_1
}