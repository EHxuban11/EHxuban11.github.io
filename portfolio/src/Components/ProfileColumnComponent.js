import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  LinkedIn,
  Twitter,
  GitHub,
  Email,
  Language,
  LocationOn
} from '@mui/icons-material';

const ProfileColumn = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        p: 4,
        maxWidth: 360,
        margin: 'auto',
        bgcolor: 'transparent',
      }}
    >
      <Avatar
        alt="Profile Picture"
        src={`${process.env.PUBLIC_URL}/profile.png`}
        sx={{ width: 200, height: 200, mb: 2 }}
      />
      <Typography
        variant="h5"
        component="h1"
        sx={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#000', fontFamily: 'Roboto, sans-serif' }}
      >
        Xuban
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <LocationOn sx={{ color: 'action', mr: 1 }} />
        <Typography variant="body2" sx={{ fontSize: '1rem', fontFamily: 'Roboto, sans-serif' }}>
          Basque Country
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{ mt: 2, textAlign: 'left', fontSize: '1rem', lineHeight: 1.6, fontFamily: 'Roboto, sans-serif' }}
      >
        Hi! I'm an engineer from the Basque Country. I work in the cooperative company Ikerlan doing consulting
        on Cybersecurity (secure boot of microcontrollers) and research in the area of AI (computer vision)
        safety. Previously I worked in the startup FLEETI in the IoT domain. My areas of interest are Startups
        and Machine Learning. I'm building YawningFace to develop productivity tools.
      </Typography>

      <Box sx={{ mt: 2, width: '100%' }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', fontSize: '1.2rem', mb: 1, fontFamily: 'Roboto, sans-serif' }}
        >
          Contact
        </Typography>
        <List dense>
          <ListItem disablePadding>
            <ListItemIcon>
              <Email sx={{ color: 'action' }} />
            </ListItemIcon>
            <ListItemText
              primary="xceccon@ikerlan.es"
              primaryTypographyProps={{ fontSize: '0.95rem', fontFamily: 'Roboto, sans-serif' }}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <Email sx={{ color: 'action' }} />
            </ListItemIcon>
            <ListItemText
              primary="xuban.ceccon@gmail.com"
              primaryTypographyProps={{ fontSize: '0.95rem', fontFamily: 'Roboto, sans-serif' }}
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <LinkedIn sx={{ color: 'action' }} />
            </ListItemIcon>
            <ListItemText>
              <a
                href="https://www.linkedin.com/in/xuban-ceccon"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1976d2', fontSize: '0.95rem', fontFamily: 'Roboto, sans-serif' }}
              >
                linkedin.com/in/xuban-ceccon
              </a>
            </ListItemText>
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <Language sx={{ color: 'action' }} />
            </ListItemIcon>
            <ListItemText>
              <a
                href="https://huggingface.co/Xuban"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1976d2', fontSize: '0.95rem', fontFamily: 'Roboto, sans-serif' }}
              >
                huggingface.co/Xuban
              </a>
            </ListItemText>
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <Twitter sx={{ color: 'action' }} />
            </ListItemIcon>
            <ListItemText>
              <a
                href="https://twitter.com/EHxuban11"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1976d2', fontSize: '0.95rem', fontFamily: 'Roboto, sans-serif' }}
              >
                twitter.com/EHxuban11
              </a>
            </ListItemText>
          </ListItem>

          <ListItem disablePadding>
            <ListItemIcon>
              <GitHub sx={{ color: 'action' }} />
            </ListItemIcon>
            <ListItemText>
              <a
                href="https://github.com/EHxuban11"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: '#1976d2', fontSize: '0.95rem', fontFamily: 'Roboto, sans-serif' }}
              >
                github.com/EHxuban11
              </a>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default ProfileColumn;
