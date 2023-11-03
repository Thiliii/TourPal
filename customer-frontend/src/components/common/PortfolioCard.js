import { Typography, Button } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useSelector } from "react-redux";

const PortfolioCard = ({ image, description, handleDelete, handleUpdate }) => {
  const authState = useSelector((state) => state.auth);

  return (
    <Card sx={{}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {authState.user.type === "Tour Guide" ? (
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button size="small" color="success" onClick={handleUpdate}>
            Update
          </Button>
          <Button size="small" color="error" onClick={handleDelete}>
            Delete
          </Button>
        </CardActions>
      ) : (
        ""
      )}
    </Card>
  );
};

export default PortfolioCard;
