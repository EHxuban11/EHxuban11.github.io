import React from 'react';
import { Box, Grid, CssBaseline } from '@mui/material';
import ProjectComponent from '../Components/ProjectComponent';
import ProfileColumn from '../Components/ProfileColumnComponent';

function HackathonsAndPrograms() {
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

          {/* Hackathons Column */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} sx={{ pt: 7 }}>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="Mistral Hackathon"
                  tags={['Paris', '2024']}
                  link="https://devpost.com/software/web-sanity"
                  revenue=""
                  description="The Mistral hackaton took place in Station F (Paris), the biggest startup incubator in the world. I had the opportunity to meet a lot of interesting people. We also created a full working browser extension in only 24 hours. After the hackaton I visited Paris."
                  logo={`${process.env.PUBLIC_URL}/Hackatons/logo/mistral_logo.png`}
                  media={[
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_team.jpg` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_techstack.jpg` },
                    { type: 'video', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_presentations.mp4` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_paris.jpg` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_mistral_ceo.jpg` },
                    { type: 'video', src: 'https://www.youtube.com/watch?v=dg4Jakp33_g' }
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="24 Ori Hackathon"
                  tags={['Corse', '2023']}
                  link="https://github.com/Brohoya/BioPhonia-24h"
                  revenue=""
                  description="The 24 Ori hackaton took place in Ajaccio, the capital city of Corsica. We found a technical solution for the BioPhonia startup company and implemented it in python and audacity. The github repo is available. We won the the third place price!"
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
                  description="We had the incredible opportunity to spend a week in Senegal, Dakar and Saint Louis, to work on entreprenerial projects. "
                  logo={`${process.env.PUBLIC_URL}/Hackatons/logo/ABC_logo.png`}
                  media={[
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_flag.jpg` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_team.jpg` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_statue.jpg` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_senegal_goree.jpg` }
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="ActinSpace Hackathon"
                  tags={['Bidart', '2022']}
                  link=""
                  revenue=""
                  description="Hackaton with where we worked on projects with the help of ESA people. I learned about the different satellite orbits and the issue of space debrees. We worked on a system to recover satellites."
                  logo={`${process.env.PUBLIC_URL}/Hackatons/logo/actinspace_logo.png`}
                  media={[
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_actinspace_final.jpg` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_actinspace_ad.jpg` },
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/Images/carrousel_actinspace_prototype.jpg` }
                  ]}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <ProjectComponent
                  name="24h Centurion"
                  tags={['Bidart', '2021']}
                  link=""
                  revenue=""
                  description="In the 24h Centurion hackaton we had the incredible opportunity to work with elite soliders from the French 1st RPIMA. In only 24 hours, we worked to propose a cheap electric spy-drone concept using only civil fpv drone technology. Unfortunately, due to restrictions imposed by the army, I cannot give more details about the drone, but I can tell you this; the jury was happy enough with our project to give us the project with most potential prize! 🏆"

                  logo={`${process.env.PUBLIC_URL}/Hackatons/logo/24hcenturion_logo.jpg`}
                  media={[
                    { type: 'image', src: `${process.env.PUBLIC_URL}/Hackatons/logo/24hcenturion_logo.jpg` }
                  ]}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default HackathonsAndPrograms;
