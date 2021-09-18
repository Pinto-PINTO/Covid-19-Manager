import React from 'react';
import './App.css';

import NavBar from './components/Navigation/NavBar';
import InformationContainer from './components/Information/InformationContainer';
import Cards from './components/Cards/Cards';
import FormDesign from './components/Form/FormDesign';


function App() {

  return (
    <div className="App">

      <NavBar />
      <InformationContainer />
      <Cards />
      <FormDesign />

    </div>
  );
}

export default App;
