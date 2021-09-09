import React, { useState, useEffect } from "react";
// import firebase from "./Firebase";
import {
  Container,
  Grid,
  Segment,
  Button,
  Form,
  Header,
  Table,
  Icon,
} from "semantic-ui-react";
// import './css/AddUserForm.css';
import "semantic-ui-css/semantic.min.css";
// import TopContainers from './TopContainers';
import InsertForm from './Product_Insert_Form';
import UpdateForm from './Product_Update_Form';
import ProductTable from '../Table/ProductTable';
// import './Forms.css'
// import '../App.css'




const Forms = () => {
  
  return (
    // The divider adds some padding to the top
    <div class="ui hidden divider">
      <Container className="b1">

        <Grid>          
          <Grid.Row columns="2" className="layout">
            <Grid.Column textAlign="left" >

              {/* --- Inserting Form START---- */}
              <InsertForm />
              {/* --- Inserting Form END---- */}

            </Grid.Column>
            <Grid.Column>

              {/* --- Updating Form START---- */}
              <UpdateForm />
              {/* --- Updating Form END---- */}

            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns="1">
            <Grid.Column>
              
              {/* --- Updating Form START---- */}
              <ProductTable />
              {/* --- Updating Form END---- */}

            </Grid.Column>
          </Grid.Row>
          
        </Grid>
      </Container>
    </div>
  );
};

export default Forms;
