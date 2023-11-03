import { Box, Typography, Rating, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import colors from "../../assets/Style/colors";
import RatingModel from "../../models/rating";
import {
  createAttractionRating,
  updateRating,
} from "../../service/rating.service";
import { popAlert } from "../../utils/alerts";

const FeedbackForm = ({
  attractionId,
  isUpdate,
  rating,
  onSubmit,
  onUpdateCancel,
}) => {
  const [inputs, setInputs] = useState(RatingModel);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let response;
    if (!isUpdate && attractionId) {
      response = await createAttractionRating(attractionId, inputs);
    }
    if (isUpdate && rating) {
      response = await updateRating(rating._id, inputs);
    }

    if (response?.success) {
      response?.data &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {
          setInputs(RatingModel);
          onSubmit();
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
    }

    setIsLoading(false);
  };

  const handleClearOrCanel = () => {
    if (isUpdate) {
      onUpdateCancel();
    }
    setInputs(RatingModel);
  };

  useEffect(() => {
    let unmounted = false;
    if (!rating) return;

    if (!unmounted && isUpdate) {
      setInputs({
        ...RatingModel,
        rating: rating.rating,
        review: rating.review,
      });
    }

    return () => {
      unmounted = true;
    };
  }, [rating, isUpdate]);

  return (
    <Box
      sx={{
        backgroundColor: "#F0F0F0",
        p: 2,
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
        borderRadius: 2,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box>
          <Typography>Rating</Typography>
          <Rating
            name="simple-controlled"
            value={inputs.rating}
            onChange={(event, value) => {
              setInputs({ ...inputs, rating: value });
            }}
          />
        </Box>
        <Box sx={{ mt: 1 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Your Review"
            multiline
            maxRows={4}
            fullWidth
            value={inputs.review}
            onChange={(e) => {
              setInputs({ ...inputs, review: e.target.value });
            }}
            sx={{ color: colors.grey }}
          />
          <Box sx={{ mt: 1, display: "flex", justifyContent: "flex-end" }}>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              sx={{
                backgroundColor: colors.secondary,
                color: colors.white,
                mr: 1,
              }}
              type="submit"
              disabled={isLoading}
            >
              {isUpdate ? "Update" : "Submit"}
            </Button>
            <Button
              size="small"
              color="primary"
              variant="outlined"
              sx={{ backgroundColor: colors.grey, color: colors.white }}
              disabled={isLoading}
              onClick={handleClearOrCanel}
            >
              {isUpdate ? "Cancel" : "Clear"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default FeedbackForm;
