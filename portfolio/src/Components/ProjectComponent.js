import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography, Box, Chip, Snackbar } from '@mui/material';

const ProjectComponent = ({ name, tag, link, revenue, description, logo }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCardClick = (event) => {
    if (!link) {
      event.preventDefault(); // Prevent the navigation
      setOpenSnackbar(true); // Show the Snackbar notification
    }
    // If there's a link, the CardActionArea will handle navigation as usual
  };

  return (
    <>
      <Card
        sx={{
          maxWidth: 400,
          mb: 2,
          bgcolor: 'white',
          borderRadius: '16px',
          transition: '0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          },
        }}
      >
        <CardActionArea onClick={handleCardClick} href={link || '#'} target="_blank" sx={{ p: 2 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center">
              <Box
                component="img"
                src={logo}
                sx={{ width: 24, height: 24, mr: 2 }}
                alt={`${name} logo`}
              />
              <Typography variant="body1" component="div" fontWeight="bold">
                {name}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Chip label={`${revenue}€/mes`} size="small" sx={{ mr: 1, bgcolor: '#f5f5f5' }} />
              <Chip label={tag} size="small" sx={{ bgcolor: 'purple', color: 'white' }} />
            </Box>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'left' }}>
            {description}
          </Typography>
        </CardActionArea>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="This project has no URL provided."
      />
    </>
  );
};

export default ProjectComponent;
