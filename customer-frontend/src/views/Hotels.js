import React from "react";
import { Typography, Box, CardMedia } from "@mui/material";
import hotelImage from "../assets/Images/Rectangle2.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchBar from "../components/common/SearchBar";
import MediaCard from "../components/common/MediaCard";
import { useNavigate } from "react-router-dom";

//images
import hotel1 from "../assets/Images/Rectangle3.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Hotels = () => {
  const navigate = useNavigate();
  const hotelbyId = () => {
    navigate("/hoteldetails");
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={hotelImage} />
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
          }}
        >
          <SearchBar />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 10,
          px: 10,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Hotels
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={4} lg={3} onClick={hotelbyId}>
              <MediaCard image={hotel1} name={"Name"} location={"Location"} />
            </Grid>
            <Grid item md={4} lg={3} onClick={hotelbyId}>
              <MediaCard image={hotel1} name={"Name"} location={"Location"} />
            </Grid>
            <Grid item md={4} lg={3} onClick={hotelbyId}>
              <MediaCard image={hotel1} name={"Name"} location={"Location"} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Hotels;
