import { Box, Grid, Container, Typography } from '@material-ui/core';

import TotalProducts from './Total_Products_Card'
import TotalQuantity from './Total_Quantity_Card'
import CovidProducts from './Covid_Products_Card'
import LowStock from './Low_Stock_Card'

import '../../App.css'


// ----------------------------------------------------------------------

export default function Cards() {
  return (
    
      <Container maxWidth="xl" className="containerPadding">
        {/* <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box> */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <TotalProducts />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TotalQuantity />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CovidProducts />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <LowStock />
          </Grid>
        </Grid>
      </Container>
    
  );
}
