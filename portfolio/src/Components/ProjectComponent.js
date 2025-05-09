import React, { useState } from 'react';
import { Card, CardActionArea, Typography, Box, Chip, Snackbar, IconButton, Dialog, DialogContent } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const ProjectComponent = ({ name, tags, link, revenue, description, logo, media }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const getTagStyle = (tag) => {
    switch (tag) {
      case 'Abandoned':
        return { bgcolor: '#757575', color: 'white' };   // Grey 600
      case 'Idea':
        return { bgcolor: '#FFEB3B', color: 'black' };   // Yellow 300
      case 'In development':
        return { bgcolor: '#FFC107', color: 'black' };   // Amber 500
      case 'Active':
        return { bgcolor: '#4CAF50', color: 'white' };   // Green 500
      case '2021':
        return { bgcolor: '#2196F3', color: 'white' };   // Blue 500
      case '2022':
        return { bgcolor: '#E91E63', color: 'white' };   // Pink 500
      case '2023':
        return { bgcolor: '#9C27B0', color: 'white' };   // Purple 500
      case '2024':
        return { bgcolor: '#00BCD4', color: 'black' };   // Cyan 500
      case '2025':
        return { bgcolor: '#FF9800', color: 'black' };   // Orange 500
      default:
        return { bgcolor: '#757575', color: 'white' };   // Fallback: Grey 600
    }
  };
  

  const handleCardClick = (event) => {
    if (!link) {
      event.preventDefault();
      setOpenSnackbar(true);
    } else {
      window.open(link, '_blank');
    }
  };

  const handlePrevMedia = (event) => {
    event.stopPropagation();
    setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };

  const handleNextMedia = (event) => {
    event.stopPropagation();
    setCurrentMediaIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };

  const handleNavigationButtonClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const handleMediaClick = (event) => {
    event.stopPropagation();
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const getMediaElement = (item, index) => {
    if (item.type === 'image') {
      return (
        <img
          src={item.src}
          alt={`${name} media ${index + 1}`}
          style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: '16px 16px 0 0' }}
        />
      );
    } else if (item.type === 'video' && item.src.endsWith('.mp4')) {
      return (
        <video
          width="100%"
          height="200"
          controls
          style={{ borderRadius: '16px 16px 0 0' }}
        >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else if (item.type === 'video' && item.src.includes('youtube.com/watch')) {
      const videoId = new URLSearchParams(new URL(item.src).search).get('v');
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return (
        <iframe
          width="100%"
          height="200"
          src={embedUrl}
          title={`${name} video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '16px 16px 0 0' }}
        ></iframe>
      );
    } else {
      return (
        <iframe
          width="100%"
          height="200"
          src={item.src}
          title={`${name} video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '16px 16px 0 0' }}
        ></iframe>
      );
    }
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
            boxShadow: '0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          },
        }}
      >
        <CardActionArea
          onClick={handleCardClick}
          sx={{ p: 2, '&:hover': { backgroundColor: 'transparent' }, '&:active': { backgroundColor: 'transparent' } }}
        >
          {media && media.length > 0 && (
            <Box sx={{ position: 'relative' }} onClick={handleMediaClick}>
              {media.map((item, index) => (
                index === currentMediaIndex && (
                  <div key={index}>
                    {getMediaElement(item, index)}
                  </div>
                )
              ))}
              <IconButton
                onClick={(event) => { handlePrevMedia(event); handleNavigationButtonClick(event); }}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <ArrowBackIos />
              </IconButton>
              <IconButton
                onClick={(event) => { handleNextMedia(event); handleNavigationButtonClick(event); }}
                sx={{
                  position: 'absolute',
                  top: '50%',
                  right: 0,
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.5)',
                }}
              >
                <ArrowForwardIos />
              </IconButton>
            </Box>
          )}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={media ? 2 : 0}>
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
              {revenue && (
                <Chip label={`${revenue}$/month`} size="small" sx={{ mr: 1, bgcolor: '#f5f5f5' }} />
              )}
              {tags && tags.map((tag, index) => (
                <Chip key={index} label={tag} size="small" sx={{ ...getTagStyle(tag), mr: 1 }} />
              ))}
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
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="md"
      >
        <DialogContent sx={{ position: 'relative', p: 0 }}>
          {media && media.length > 0 && (
            <Box>
              {media[currentMediaIndex].type === 'image' ? (
                <img
                  src={media[currentMediaIndex].src}
                  alt={`${name} media ${currentMediaIndex + 1}`}
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                />
              ) : media[currentMediaIndex].type === 'video' && media[currentMediaIndex].src.endsWith('.mp4') ? (
                <video
                  width="100%"
                  height="auto"
                  controls
                >
                  <source src={media[currentMediaIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : media[currentMediaIndex].type === 'video' && media[currentMediaIndex].src.includes('youtube.com/watch') ? (
                <iframe
                  width="100%"
                  height="500"
                  src={`https://www.youtube.com/embed/${new URLSearchParams(new URL(media[currentMediaIndex].src).search).get('v')}`}
                  title={`${name} video ${currentMediaIndex + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <iframe
                  width="100%"
                  height="500"
                  src={media[currentMediaIndex].src}
                  title={`${name} video ${currentMediaIndex + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </Box>
          )}
          <IconButton
            onClick={(event) => { handlePrevMedia(event); handleNavigationButtonClick(event); }}
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={(event) => { handleNextMedia(event); handleNavigationButtonClick(event); }}
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(255, 255, 255, 0.5)',
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectComponent;
