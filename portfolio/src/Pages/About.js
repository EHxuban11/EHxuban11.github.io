
import React from 'react';
import {
  Box,
  Grid,
  CssBaseline,
  Typography,
  Paper,
  Container,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';         // ← added
import StartIcon from '@mui/icons-material/Start';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import ProfileColumn from '../Components/ProfileColumnComponent';
import ProjectComponent from '../Components/ProjectComponent';

function About() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
          px: 3,
          bgcolor: '#e6e6e6',
          color: '#5a5a5a',
          minHeight: '100vh',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {/* Profile Column */}
          <Grid item xs={12} md={3}>
            <ProfileColumn />
          </Grid>

          {/* Main Content Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pt: 7 }}>
              <Container>
                <Paper elevation={3} sx={{ padding: 3 }}>

                  <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
                  >
                    About Me
                  </Typography>
                  

                  

                  <Divider sx={{ mb: 3 }} />

                  {/* Projects */}
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
                  >
                    Projects
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6}>
                      <ProjectComponent
                        name="YawningFace"
                        tags={['Productivity', 'Open Source']}
                        link="https://github.com/EHxuban11/yawningface"
                        revenue=""
                        description="Open-source productivity tools to develop apps that reduce online time and improve focus. Built with React and other technologies."
                        logo={`${process.env.PUBLIC_URL}/projects/yawningface_logo.png`}
                        media={[]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ProjectComponent
                        name="COCO Body Part Dataset"
                        tags={['Computer Vision', 'Hugging Face']}
                        link="https://huggingface.co/Xuban/coco_body_part"
                        revenue=""
                        description="Updated dataset on Hugging Face for body part detection in computer vision tasks."
                        logo={`${process.env.PUBLIC_URL}/projects/coco_body_part_logo.png`}
                        media={[]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ProjectComponent
                        name="YOLO Weights Database"
                        tags={['Computer Vision', 'Hugging Face']}
                        link="https://huggingface.co/Xuban/yolo_weights_database"
                        revenue=""
                        description="Pre-trained YOLO model weights for object detection, hosted on Hugging Face."
                        logo={`${process.env.PUBLIC_URL}/projects/yolo_weights_logo.png`}
                        media={[]}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    variant="body2"
                    sx={{ mt: 1, mb: 3, fontFamily: 'Roboto, sans-serif' }}
                  >
                    More projects coming soon—check my GitHub or Hugging Face for updates.
                  </Typography>

                  <Divider sx={{ mb: 3 }} />

                  {/* Interests */}
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
                  >
                    Interests
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemText
                        primary="Startups"
                        secondary="Exploring innovative business models in tech and IoT."
                        primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                      <StartIcon sx={{ ml: 1, color: '#5a5a5a' }} />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Machine Learning"
                        secondary="Focus on computer vision, safety, and practical applications."
                        primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                      <PsychologyIcon sx={{ ml: 1, color: '#5a5a5a' }} />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Productivity & Well-Being"
                        secondary="Building tools to combat online content addiction, like YawningFace."
                        primaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                        secondaryTypographyProps={{ fontFamily: 'Roboto, sans-serif' }}
                      />
                      <HealthAndSafetyIcon sx={{ ml: 1, color: '#5a5a5a' }} />
                    </ListItem>
                  </List>

                  <Divider sx={{ mb: 3 }} />

                  {/* Hackathons */}
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
                  >
                    Hackathons
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ mb: 3, fontFamily: 'Roboto, sans-serif' }}
                  >
                    I eased in hackathons participating as a trasnlator in the 24h de l'innovation. I really liked the atmosphere started to participate in more hackathons. Aside from the ones in my uni in Bidart, I've been to hackathons in Corsica, Dakar, Barcelona and Paris. 
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 3 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <ProjectComponent
                        name="HackUPC"
                        tags={['Barcelona', '2025']}
                        link="https://devpost.com/software/getlosttogether"
                        revenue=""
                        description="The HackUPC hackathon took place in Barcelona and was a great experience. I met a lot of interesting people which gave me energy to work on my project. The project was an app for a group of friends to select their next travel destination."
                        logo={`${process.env.PUBLIC_URL}/Hackatons/logo/hack_upc_logo.jpeg`}
                        media={[
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_hackupc_1.jpeg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_hackupc_2.jpeg` },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <ProjectComponent
                        name="Mistral Hackathon"
                        tags={['Paris', '2024']}
                        link="https://devpost.com/software/web-sanity"
                        revenue=""
                        description="The Mistral hackathon took place in Station F (Paris), the biggest startup incubator in the world. I had the opportunity to meet a lot of interesting people. We also created a full working browser extension in only 24 hours. After the hackathon I visited Paris."
                        logo={`${process.env.PUBLIC_URL}/Hackatons/logo/mistral_logo.png`}
                        media={[
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_team.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_techstack.jpg` },
                          { type: 'video', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_presentations.mp4` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_paris.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_ceo.jpg` },
                          { type: 'video', src: 'https://www.youtube.com/watch?v=dg4Jakp33_g' },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <ProjectComponent
                        name="24 Ori Hackathon"
                        tags={['Corse', '2023']}
                        link="https://github.com/Brohoya/BioPhonia-24h"
                        revenue=""
                        description="The 24 Ori hackathon took place in Ajaccio, the capital city of Corsica. We found a technical solution for the BioPhonia startup company and implemented it in python and audacity. The github repo is available. We won the third place prize!"
                        logo={`${process.env.PUBLIC_URL}/Hackatons/logo/24ori_logo.png`}
                        media={[
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_corse_final.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_corse_nomadexam.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_corse_powerpoint.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_corse_prix.png` },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <ProjectComponent
                        name="Africa Basque Challenge"
                        tags={['Senegal', '2023']}
                        link=""
                        revenue=""
                        description="We had the incredible opportunity to spend a week in Senegal, Dakar and Saint Louis, to work on entrepreneurial projects."
                        logo={`${process.env.PUBLIC_URL}/Hackatons/logo/ABC_logo.png`}
                        media={[
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_flag.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_team.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_statue.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_goree.jpg` },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <ProjectComponent
                        name="ActinSpace Hackathon"
                        tags={['Bidart', '2022']}
                        link=""
                        revenue=""
                        description="Hackathon where we worked on projects with the help of ESA people. I learned about the different satellite orbits and the issue of space debris. We worked on a system to recover satellites."
                        logo={`${process.env.PUBLIC_URL}/Hackatons/logo/actinspace_logo.png`}
                        media={[
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_actinspace_final.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_actinspace_ad.jpg` },
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_actinspace_prototype.jpg` },
                        ]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <ProjectComponent
                        name="24h Centurion"
                        tags={['Bidart', '2021']}
                        link="https://www.defense.gouv.fr/aid/actualites/defi-24h-innover-au-profit-larmee-terre"
                        revenue=""
                        description="In the 24h Centurion hackathon we had the incredible opportunity to work with elite soldiers from the French 1st RPIMA. In only 24 hours, we worked to propose a cheap electric spy-drone concept using only civil FPV drone technology. Unfortunately, due to restrictions imposed by the army, I cannot give more details about the drone, but I can tell you this: the jury was happy enough with our project to give us the project with most potential prize! 🏆"
                        logo={`${process.env.PUBLIC_URL}/Hackatons/logo/24hcenturion_logo.jpg`}
                        media={[
                          { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/logo/24hcenturion_logo.jpg` },
                        ]}
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{ fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}
                  >
                    Academic and Work Background
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ mb: 3, fontFamily: 'Roboto, sans-serif' }}
                  >
                    Engineering degree from ESTIA and a computer and machine vision MSc from Cranfield University. I work as a consultant and researcher in Ikerlan. For the up to date Academic and Work profile, head to my LinkedIn: 
                    {/* LinkedIn Button */}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/xuban-ceccon"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: '1rem', padding: '8px 16px' }}
                    >
                      View Full Profile on LinkedIn
                    </Button>
                  </Box>
                </Paper>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default About;

