import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import SideMenu from "./components/SideMenu";
import NavBar from './components/NavBar';
import InStockSection from './components/InStockSection';
import UploadButtons from './components/t';
import ProductTable from './components/ProductTable';
import MTable from './components/t'
// import { makeStyles } from '@material-ui/styles';



function App() {

  return (
    <div className="App">      
      <NavBar/>
      {/* <SideMenu/> */}
      <InStockSection/>
      {/* <UploadButtons/> */}
      {/* <ProductTable/> */}
      <MTable/>
    </div>
  );
}

export default App;
