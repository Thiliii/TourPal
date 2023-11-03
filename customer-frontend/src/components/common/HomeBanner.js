import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Banner from "../../assets/Images/Rectangle1.png";
import { Box, CardContent } from "@mui/material";
import colors from "../../assets/Style/colors";

const HomeBanner = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Card sx={{ height: "100vh" }}>
        <CardMedia component="img" alt="green iguana" image={Banner} />
        <Typography
          component="div"
          variant="h2"
          sx={{
            position: "absolute",
            top: "16%",
            width: "100%",
            fontWeight: "bold",
            textAlign: "center",
            color: colors.fontColor,
          }}
        >
          Enjoy Your Way.
        </Typography>
        <Card
          sx={{
            color: colors.cardColor,
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "80%",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: 5,
          }}
        >
          <CardContent sx={{ color: colors.fontColor, textAlign: "center" }}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
              sodales id, porttitor vitae est. Donec laoreet rutrum libero sed
              pharetra.
            </Typography>
          </CardContent>
        </Card>
      </Card>
    </Box>
  );
};

export default HomeBanner;
