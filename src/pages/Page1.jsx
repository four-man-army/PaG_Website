import React from 'react';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import "./Page1.css";


const Page1 = () => {
    return (
        <Container fixed sx={{ height: "100%", pt: 50 }}>
            <Box sx={{ margin: "auto 20% auto 20%" }}>
                <Typography variant="h3">
                    Einführung
                </Typography>
                <Typography variant="h5">
                    Der Drogenkrieg in Mexiko ist schon längst im Gange und hat bereits tausende von Opfern gebracht...
                </Typography>
            </Box>
        </Container>
    )
}

export default Page1;