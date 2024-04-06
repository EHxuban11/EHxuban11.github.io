import React from 'react';
import { Box, Grid, Typography, Avatar, IconButton, CssBaseline } from '@mui/material';
import { Twitter, GitHub, YouTube, Instagram, LocationOn } from '@mui/icons-material';

import ProjectComponent from '../Components/ProjectComponent';

const MainPage = () => {
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                p: 4,
                maxWidth: 360,
                margin: 'auto'
              }}
            >
              <Avatar
                alt="Profile Picture"
                src={`${process.env.PUBLIC_URL}/profile.png`}
                sx={{ width: 200, height: 200, mb: 2 }}
              />
              <Typography variant="h5" component="h1" sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#000' }}>
                Xuban
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <LocationOn color="action" />
                <Typography variant="body2" sx={{ fontSize: '1rem' }}>Basque Country</Typography>
              </Box>
              <Typography variant="body1" sx={{ mt: 2, textAlign: 'left', fontSize: '1rem' }}>
                Hello, my name is Xuban, and I develop websites in my free time. I'm particularly interested in online content addiction and how to combat it. For this, I'm developing applications that help me, and hopefully others, to reduce their online time and improve its quality.
              </Typography>
              <Box sx={{ display: 'flex', mt: 2 }}>
                <IconButton href="https://twitter.com/EHxuban11" color="inherit"><Twitter /></IconButton>
                <IconButton href="https://github.com/EHxuban11" color="inherit"><GitHub /></IconButton>
                <IconButton href="https://www.youtube.com/@EHxuban11" color="inherit"><YouTube /></IconButton>
                {/* <IconButton href="https://instagram.com" color="inherit"><Instagram /></IconButton> */}
              </Box>
            </Box>
          </Grid>

          {/* Projects Column */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{ pt: 7 }}>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="BoringTube"
                  tag="Active"
                  link="https://boringtube.com"
                  revenue="0"
                  description="BoringTube is a platform where you can find healthy and non-addictive content. Videos, podcasts, and music without an addictive algorithm."  
                  logo={`${process.env.PUBLIC_URL}/logo.png`} // Adjust the file name as necessary
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Portorium"
                  tag="In development"
                  link="https://portorium.xyz"
                  revenue="0"
                  description="Portorium protects you from distractions. It's a web page blocker in the form of a browser extension."
                  logo={`${process.env.PUBLIC_URL}/portorium_logo.png`} 
                />
              </Grid> {/* This closing tag was missing */}
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Artifex"
                  tag="In development"
                  link=""
                  revenue="0"
                  description="A tool for growing on Twitter."
                  logo={`${process.env.PUBLIC_URL}/icon128_artifex.png`} // Adjust the file name as necessary
                />
              </Grid>

              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Lanmap"
                  tag="Abandoned"
                  link=""
                  revenue="0"
                  description="Lanmap allows students to find companies where they can do internships."
                  logo={`${process.env.PUBLIC_URL}/a.png`} // Adjust the file name as necessary
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default MainPage;
