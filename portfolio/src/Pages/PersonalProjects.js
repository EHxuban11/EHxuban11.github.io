import React from 'react';
import { Box, Grid, CssBaseline } from '@mui/material';
import ProjectComponent from '../Components/ProjectComponent';
import ProfileColumn from '../Components/ProfileColumnComponent';

function PersonalProjects() {
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

          {/* Projects Column */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{ pt: 7 }}>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="BoringTube"
                  tags={['Active']}
                  link="https://boringtube.com"
                  revenue="0"
                  description="BoringTube is a platform where you can find healthy and non-addictive content. Videos, podcasts, and music without an addictive algorithm."
                  logo={`${process.env.PUBLIC_URL}/logo.png`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Artifex"
                  tags={['Active']}
                  link="https://chromewebstore.google.com/detail/artifex/cmbnelefoiiihdobcmhalkopidbbpklo"
                  revenue="0"
                  description="A tool for growing on Twitter. Define your daily replies and likes and let Artifex do the rest."
                  logo={`${process.env.PUBLIC_URL}/icon128_artifex.png`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Xuban (personal brand)"
                  tags={['Active']}
                  link="https://twitter.com/EHxuban11"
                  revenue="0"
                  description="I'm creating my personal brand to share my thoughts and projects."
                  logo={`${process.env.PUBLIC_URL}/profile.png`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="My notion templates"
                  tags={['Active']}
                  link="https://ehxuban11.gumroad.com/"
                  revenue="0"
                  description="I provide high quality notion templates in my Gumroad store."
                  logo={`${process.env.PUBLIC_URL}/gumroad_logo.png`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Portorium"
                  tags={['In development']}
                  link="https://portorium.xyz"
                  revenue="0"
                  description="Portorium protects you from distractions. It's a web page blocker in the form of a browser extension."
                  logo={`${process.env.PUBLIC_URL}/portorium_logo.png`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Dominus"
                  tags={['Idea']}
                  link=""
                  revenue="0"
                  description="Dominus is an Android launcher which destroys your phone addiction"
                  logo={`${process.env.PUBLIC_URL}/a.png`}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Lanmap"
                  tags={['Abandoned']}
                  link=""
                  revenue="0"
                  description="Lanmap allows students to find companies where they can do internships."
                  logo={`${process.env.PUBLIC_URL}/a.png`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PersonalProjects;
