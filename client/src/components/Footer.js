import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
    <Box component = "footer" sx = {{
     bgcolor: 'background.paper',
     color: 'text.secondary',
      py: 4,
      height: '50px',
      textAlign: 'center',
      borderTop: `2px solid ${theme => theme.palette.primary.main}`, 
    }
    } 
    >
        <Typography variant="h3" gutterBottom>
      Built with ❤️ by VP
    </Typography>
    <Typography variant="body2" sx={{ mt: 2 }}>
      © {new Date().getFullYear()} Bsc student | All Rights Reserved
    </Typography>
    </Box>


)

export default Footer;