import React from "react";
import HomeBanner from "../components/common/HomeBanner";
import { Grid, Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import colors from "../assets/Style/colors";
import attractionImg from "../assets/Images/img1.png";
import hotelImg from "../assets/Images/img2.png";
import guideImg from "../assets/Images/img3.png";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";

const Home = () => {
  return (
    <React.Fragment>
      <HomeBanner />
      <Box>
        <Grid
          container
          sx={{
            position: "absolute",
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <Grid item xs={4} sx={{ px: 2 }}>
            <Link to="/attractions">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: 3,
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={attractionImg}
                  alt="attraction"
                  sx={{
                    mt: 4,
                    width: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Attractions
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4} sx={{ px: 2 }}>
            <Link to="/hotels">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: 3,
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={hotelImg}
                  alt="attraction"
                  sx={{
                    mt: 4,
                    width: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Hotels
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item xs={4} sx={{ px: 2 }}>
            <Link to="/tour-guides">
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderRadius: 3,
                  backdropFilter: "blur(5px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  boxShadow: 10,
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  image={guideImg}
                  alt="attraction"
                  sx={{
                    mt: 4,
                    width: "40%",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Tour Guides
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Home;
