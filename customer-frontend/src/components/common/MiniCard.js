import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";
import colors from "../../assets/Style/colors";

const MiniCard = ({ name, distance, image }) => {
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
        height="150"
        boxshadow="0px 8px 25px rgba(0, 0, 0, 0.15)"
        image={image}
      />

      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "fit-content",
          py: 1,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h7"
          justifyContent={"center"}
          textAlign="left"
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {name}
        </Typography>

        <Typography
          gutterBottom
          variant="h7"
          textAlign={"right"}
          sx={{
            whiteSpace: "nowrap",
            color: colors.grey,
          }}
        >
          {distance} km
        </Typography>
      </CardContent>
    </Card>
  );
};
export default MiniCard;
