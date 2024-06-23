import React from 'react';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { Twitter, GitHub, LocationOn, LinkedIn } from '@mui/icons-material';

const ProfileColumn = () => {
  return (
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
        <IconButton href="https://www.linkedin.com/in/xuban-ceccon" color="inherit"><LinkedIn /></IconButton>
        <IconButton href="https://twitter.com/EHxuban11" color="inherit"><Twitter /></IconButton>
        <IconButton href="https://github.com/EHxuban11" color="inherit"><GitHub /></IconButton>
        {/* <IconButton href="https://www.youtube.com/@EHxuban11" color="inherit"><YouTube /></IconButton>*/}
        {/* <IconButton href="https://instagram.com" color="inherit"><Instagram /></IconButton> */}
      </Box>
    </Box>
  );
};

export default ProfileColumn;
