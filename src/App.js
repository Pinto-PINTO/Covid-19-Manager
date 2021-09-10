import React from 'react';
import './App.css';
// import Button from '@material-ui/core/Button';
// import SideMenu from "./components/SideMenu";
import NavBar from './components/Navigation/NavBar';
// import InStockSection from './components/InStockSection';
// import UploadButtons from './components/t';
// import ProductTable from './components/ProductTable';
import MTable from './components/t';
import LineSection from './components/LineSection';
// import { makeStyles } from '@material-ui/styles';
// import NavSideBar from './components/NavSideBar';
import Chart from './components/Chart';
import StyleSheet from './components/StyleSheet';
import Cards from './components/Cards/Cards';
import Forms from './components/Form/Forms';
// import Form_Table from './components/Form/Form_And_Table';



function App() {

  return (
    <div className="App">      
      <NavBar />
      <Cards />
      {/* <Form_Table /> */}
      <Forms />

      {/* <LineSection/>
      <MTable/>
      <Chart/> */}
    </div>
  );
}

export default App;
