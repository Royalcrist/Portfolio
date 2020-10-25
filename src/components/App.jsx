import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../../assets/styles/App.scss';
import { ProjectsProvider } from './contexts/ProjectsProvider';
import Routes from './Routes';

const App = () => {
  let vh = window.innerHeight * 0.01;

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <ProjectsProvider>
      <BrowserRouter basename="/">
        <Routes />
      </BrowserRouter>
    </ProjectsProvider>
  );
};

export default App;
