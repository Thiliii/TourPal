import React from "react";
import { Typography, Box, CardMedia, Card, Button, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import HotelSlider from "./HotelSlider";
import MapGoogle from "../components/common/MapGoogle";
import Facilities from "../components/common/Facilities";
import Promotions from "../components/common/Promotions";
import MiniCard from "../components/common/MiniCard";
import M1 from "../assets/Images/M1.png";
import M2 from "../assets/Images/M2.png";
import M3 from "../assets/Images/M3.png";
import M4 from "../assets/Images/M4.png";
import M5 from "../assets/Images/M5.png";
import M6 from "../assets/Images/M6.png";
import H1 from "../assets/Images/H1.png";
import H2 from "../assets/Images/H2.png";
import H3 from "../assets/Images/H3.png";
import H4 from "../assets/Images/H4.png";
import H5 from "../assets/Images/H5.png";
import H6 from "../assets/Images/H6.png";
import FeedbackForm from "../components/common/FeedbackForm";
import Feedbacks from "../components/common/Feedbacks";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const HotelDetails = () => {
  const navigate = useNavigate();
  const hotelbyId = () => {
    navigate('/')
  }
  return (
    <Box sx={{ width: "100%" }}>
      <HotelSlider />  

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
          <Grid item xs={6} sx={{mt:3,ml:8}}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
              Hotel Name
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id,
              porttitor vitae est. Donec laoreet rutrum libero sed pharetra.Donec vel egestas dolor, nec dignissim metus.
              Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra.
              Duis a arcu convallis, gravida purus eget, mollis diam.
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: "bold",mt:2}}>
              Location
            </Typography>
            <Box>
              <MapGoogle/>
            </Box>

             <Box>
            <Typography variant="h4" sx={{ fontWeight: "bold",mt:2}}>
              Facilities
            </Typography>
              <Box>
                <Facilities/>
              </Box>
            </Box> 

            <Typography variant="h4" sx={{ fontWeight: "bold",mt:2}}>
              Promotions & Offers
            </Typography>
            <Box sx={{mb:5}}>
              <Promotions  />
            </Box>
        </Grid>
        <Grid item xs={5} sx={{mt:3, ml:2}}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Nearby Attractions
            </Typography>
            <Box sx={{mb:5}}>
             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <MiniCard  image={M1} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={M2} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                   <MiniCard  image={M3} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={M4} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={M5} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={M6} name={"Name"}/>
                  </Grid>
                </Grid>
          </Box>
            </Box>

             <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Nearby Hotels
            </Typography>
            <Box sx={{mb:5}}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <MiniCard  image={H1} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={H2} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                   <MiniCard  image={H3} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={H4} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={H5} name={"Name"}/>
                  </Grid>
                  <Grid item xs={4}>
                    <MiniCard  image={H6} name={"Name"}/>
                  </Grid>
                </Grid>
          </Box>
          </Box>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
              Ratings & Reviews
            </Typography>
            <Box>
              <FeedbackForm />
              <Feedbacks />
              <Feedbacks />
              <Feedbacks />
            </Box>


        </Grid>
        
      </Grid>
      </Box>
      
   </Box> 
      
  );
};

export default HotelDetails;
