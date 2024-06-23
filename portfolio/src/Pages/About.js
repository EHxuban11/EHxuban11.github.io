import React from 'react';
import { Box, Grid, CssBaseline, Typography, Paper, Container, Button, Divider } from '@mui/material';
import ProfileColumn from '../Components/ProfileColumnComponent';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function About() {
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

          {/* Timeline Column */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pt: 7 }}>
              <Container>
                <Paper elevation={3} sx={{ padding: 2 }}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    My Journey
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<LinkedInIcon />}
                      href="https://www.linkedin.com/in/xuban-ceccon"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: '1.2rem', padding: '10px 20px' }}
                    >
                      Up-to-date Information on LinkedIn
                    </Button>
                  </Box>
                  <Divider sx={{ mb: 4 }} />
                  <Timeline position="alternate">
                    {/* Most recent first */}
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          September 2023 - September 2024
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            Cranfield University
                          </Typography>
                          <Typography>MSc in Computational and Software Techniques in Engineering - Computer and Machine Vision option</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          September 2023
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            Finished Engineering Degree
                          </Typography>
                          <Typography>Completed my Engineering degree in Electronics and Computer Science at Ecole Supérieure des Technologies Industrielles Avancées</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          September 2022 - Present
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            Fleeti
                          </Typography>
                          <Typography>Engineer - Developed strategic solutions to enhance fleet management offerings</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          July 2022 - August 2022
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot>
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            Fleeti
                          </Typography>
                          <Typography>Internship Trainee - Learned about no-code programming using Bubble</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          February 2022 - March 2022
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="secondary">
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            IKERLAN
                          </Typography>
                          <Typography>Cybersecurity in embedded systems - Worked on secure boot mechanisms using the Yocto Project</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          June 2021 - July 2021
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="primary">
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            ALIVESPORTS / ALIVEROOM
                          </Typography>
                          <Typography>Electronic Technician - Developed solutions using Arduino platform for an escape room company</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          June 2020 - July 2020
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot color="secondary">
                          <WorkIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            PAPRESA
                          </Typography>
                          <Typography>Mechanic - Worked on troubleshooting and repairing machinery in a paper recycling factory</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                      <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                          September 2019
                        </Typography>
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot>
                          <SchoolIcon />
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>
                        <Paper elevation={3} sx={{ padding: '6px 16px' }}>
                          <Typography variant="h6" component="h1">
                            Started Engineering Degree
                          </Typography>
                          <Typography>Started my Engineering degree in Electronics and Computer Science at Ecole Supérieure des Technologies Industrielles Avancées</Typography>
                        </Paper>
                      </TimelineContent>
                    </TimelineItem>
                  </Timeline>
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
