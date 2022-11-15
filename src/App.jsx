import React from 'react';
import './App.css';
import {
  BrowserRouter,
} from 'react-router-dom'
import Home from "./Layouts/Home";
import Contact from "./Layouts/Contact";
import Education from "./Layouts/Education";
import customTheme from "./Utils/customTheme";
import { ThemeProvider } from '@mui/material/styles';
import WorkExperience from './Layouts/WorkExperience';
import Accomplishments from './Layouts/Accomplishments';
import ErrorPage from './Layouts/ErrorPage';
import ScrollToTop from './Utils/ScrollToTop';
import GitHub from './Github/Github';
import Stats from './Github/Stats';


function App() {

  // Custom theme set
  const theme = customTheme;

  return (
    // Theme is used in the ThemeProvider
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Home />
      <Education />
      <WorkExperience />
      <GitHub/>
      <Stats/>
      <Accomplishments />
      <Contact />

        <ScrollToTop />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
