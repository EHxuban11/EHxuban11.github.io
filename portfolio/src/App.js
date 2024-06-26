import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, CssBaseline, Button, Container } from '@mui/material';
import About from './Pages/About';
import PersonalProjects from './Pages/PersonalProjects';
import HackathonsAndPrograms from './Pages/HackathonsAndPrograms';
import Tools from './Pages/Tools';

function App() {
  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <AppBar position="fixed" sx={{ backgroundColor: '#777', boxShadow: 'none' }}>
          <Container maxWidth="md">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Typography variant="h6" component="div">
                Xuban C.
              </Typography>
              <Box sx={{ display: 'flex' }}>
                <Button color="inherit" component={Link} to="/about">About</Button>
                <Button color="inherit" component={Link} to="/personal-projects">Personal Projects</Button>
                <Button color="inherit" component={Link} to="/hackathons-and-programs">Hackathons</Button>
                {/*<Button color="inherit" component={Link} to="/tools">Tools</Button>*/}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Box sx={{ pt: 10 }}>
          <Routes>
            <Route exact path="/" element={<About />} /> {/* Set Home to About */}
            <Route path="/personal-projects" element={<PersonalProjects />} />
            <Route path="/hackathons-and-programs" element={<HackathonsAndPrograms />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </div>
    </Router>
  );
}

export default App;
