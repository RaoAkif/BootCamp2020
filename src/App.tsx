import React from 'react';
import './App.css'
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';

const App = () => {
  return (
    <div className='App'>
      <Launch />
      <LaunchDetails />
    </div>
  )
}

export default App;