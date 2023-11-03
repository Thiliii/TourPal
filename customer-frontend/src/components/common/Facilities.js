import { Box, Button, Grid } from "@mui/material";

const Facilities = () => { 

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <Button variant="contained" size="large">
                    Kitchen
                  </Button>  
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained" size="large">
                   Parking
                  </Button>  
                </Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" size="large">
                    Media & Technology
                  </Button>  
                 
                </Grid>
                <Grid item xs={4}>
                  {/* <Item>xs=8</Item> */}
                  </Grid>
                   <Grid item xs={2}>
                  <Button variant="contained" size="large">
                    Bedroom
                  </Button>
                  </Grid>
                   <Grid item xs={4}>
                  <Button variant="contained" size="large">
                    Cleaning Services
                  </Button>
                  </Grid>
                  <Grid item xs={4}>
                  <Button variant="contained" size="large">
                    Room Amenities
                  </Button>
                  </Grid>
                  <Grid item xs={4}>
                  <Button variant="contained" size="large">
                   Internet
                  </Button>
                </Grid>
              </Grid>
           </Box>
        </Box>
    );
}
export default Facilities;