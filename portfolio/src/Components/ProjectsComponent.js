// src/Components/ProjectsComponent.jsx

import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Link,
  Typography,
  Stack
} from '@mui/material';

const projects = [
  {
    name: 'Block',
    link: 'https://github.com/Yawningface/block',
    productionLink: 'https://chromewebstore.google.com/detail/block/kfnhibndbkdjcplihjhbhdhclpbiocen',
    description:
      'Block is a distractions blocker so you can focus on what matters. Chrome extension released. Stay tuned for Iphone, Android, PC and MAC versions.',
  },
  {
    name: 'Browser Start Page',
    link: 'https://github.com/Yawningface/browser-start-page',
    productionLink:
      'https://chromewebstore.google.com/detail/browser-start-page/cbmbipkecoonmcocfmoaddgmffbnfpho',
    description:
      'Customize your new tab page. Remove the bloat and put your most used links and tiny tools front and center so you start every session with what you need.',
  },
  {
    name: 'Labs',
    link: 'https://github.com/Yawningface/labs',
    productionLink: 'https://labs.yawningface.org/',
    description:
      'More than 12 in-browser image and PDF utilities: compression, format conversion, background removal and more. Everything runs locally so nobody steals your data.',
  },
  {
    name: 'Notion Widgets',
    link: 'https://github.com/Yawningface/notion-widgets',
    productionLink: 'https://notion.yawningface.org/',
    description:
      'For people who use Notion as a knowledge repo. Add Pomodoro timers, day counters, chronometers, deadline countdowns or a Lofi music player to any page for free.',
  },
  {
    name: 'Pomodoro Timer',
    link: 'https://github.com/Yawningface/pomodoro',
    productionLink: 'https://pomodoro.yawningface.org/',
    description:
      'For those who like to structure work sessions with the Pomodoro technique. The most straightforward adless Pomodoro timer on the internet.',
  },
  {
    name: 'Lofi Hip Hop Beats',
    link: 'https://github.com/Yawningface/lofi',
    productionLink: 'https://lofi.yawningface.org/',
    description:
      'When you need background beats, stream chill lofi and ambient soundscapes right in your browser. No ads, no accounts, just mood-setting music.',
  },
];

export default function ProjectsComponent() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        Projects
      </Typography>
      <List>
        {projects.map((proj, idx) => (
          <ListItem key={idx} alignItems="flex-start" sx={{ py: 2 }}>
            <ListItemText
              primary={
                <Typography variant="h6">
                  {proj.name}
                </Typography>
              }
              secondary={
                <>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    {proj.description}
                  </Typography>
                  <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
                    <Link
                      href={proj.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="hover"
                      variant="body2"
                    >
                      Code
                    </Link>
                    {proj.productionLink && (
                      <Link
                        href={proj.productionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        variant="body2"
                      >
                        Production
                      </Link>
                    )}
                  </Stack>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
