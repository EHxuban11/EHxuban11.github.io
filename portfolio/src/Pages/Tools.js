import React from 'react';
import { Box, Grid, CssBaseline, Typography, Paper } from '@mui/material';
import ProfileColumn from '../Components/ProfileColumnComponent';

function Tools() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
          px: 3,
          bgcolor: '#e6e6e6', // Background color
          color: '#5a5a5a', // Text color for all child components
          minHeight: '100vh',
          fontFamily: 'Roboto',
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {/* Profile Column */}
          <Grid item xs={12} md={3}>
            <ProfileColumn />
          </Grid>

          {/* Tools Column */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{ pt: 7 }}>
              <Grid item xs={12}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h6" component="div">
                    Mockup Tool
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    This is a basic tool mockup for demonstration purposes. Here you can add the functionality or description of the tool.
                  </Typography>
                  {/* You can add more elements here to represent the tool functionality */}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Tools;
