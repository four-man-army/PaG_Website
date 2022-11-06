import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Typography, Box } from '@mui/material';
import "./Scroll-Icon.css";


export default function Scrollicon() {

    return (
            <Box className='floating' sx={{ position: "fixed", bottom: "35px", left: 0, right: 0 }}>
                <Typography variant="h5" align="center"> scroll </Typography>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                    <KeyboardDoubleArrowDownIcon />
                </Box>
            </Box>
    )
}