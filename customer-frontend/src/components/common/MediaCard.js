import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import NotFoundImage from "../../assets/Images/image-not-found.webp";

const MediaCard = ({ name, location, image }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        boxshadow="0px 8px 25px rgba(0, 0, 0, 0.15)"
        image={image || NotFoundImage}
      />

      <CardActions sx={{ height: 55 }}>
        <Box sx={{ mb: 0, textAlign: "right", fontWeight: "bold" }}>
          <Typography gutterBottom variant="h7" component="div">
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            textAlign={"right"}
          >
            {location}
          </Typography>
        </Box>
      </CardActions>
    </Card>
  );
};
export default MediaCard;
