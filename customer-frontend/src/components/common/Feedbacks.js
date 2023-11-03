import { Box, Typography, Rating } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";

const Feedbacks = ({ rating, onUpdateClick, onDeleteClick }) => {
  const authState = useSelector((state) => state.auth);

  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        p: 2,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
        borderRadius: 2,
        mt: 2,
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>{rating?.rater?.user?.name}</Typography>
          {authState?.user?._id === rating?.rater?.user?._id && (
            <Box>
              <EditIcon
                sx={{ cursor: "pointer", mr: 1 }}
                onClick={() => onUpdateClick(rating)}
              />
              <DeleteIcon
                color="error"
                sx={{ cursor: "pointer" }}
                onClick={() => onDeleteClick(rating)}
              />
            </Box>
          )}
        </Box>

        <Rating name="read-only" value={rating?.rating} readOnly />
        <Typography>{rating?.review}</Typography>
      </Box>
    </Box>
  );
};

export default Feedbacks;
