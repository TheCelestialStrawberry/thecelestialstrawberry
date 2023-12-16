import React from 'react';

import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';

import ImageIcon from '../ImageIcon/ImageIcon';

export default function ServiceDetails({ service, children}) {

  return (
    <Paper elevation={6} sx={{ margin: 4, padding: 3, backgroundColor: 'background.paper' }}> 

      <Grid container spacing={2} >
        <Grid xs={12}>
          <Typography 
            variant='h4' color="primary.main" display={'flex'} align='center' alignItems={'center'} justifyContent={'flex-start'} gutterBottom
            sx={{fontSize: {xs: 'h4.fontSize', sm: 'h3.fontSize', md: 'h2.fontSize', lg: 'h1.fontSize'}}}
          >
            <ImageIcon src={`symbols/${service.symbol}`} size={150} />
             {service.title}
          </Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="body1" >
            {service.overview}
          </Typography>
          <br/>
          <Typography variant="body1" >
            {service.purpose}
          </Typography>
        </Grid>

        <Grid xs={12}>
          <Typography variant="h6" color="secondary.dark">
            <b>Benefits</b>
          </Typography>

          {service.benefits.map((benefit) => (
            <Typography key={crypto.randomUUID()} variant="body2" >
              <b>-{benefit.name}</b>  - {benefit.description}
            </Typography>
          ))}

        </Grid>
        {children}
      </Grid>
      
    </Paper>
  );
};
