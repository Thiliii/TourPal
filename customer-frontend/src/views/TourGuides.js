import React, { useState, useEffect } from "react";

import { Typography, Box, CardMedia } from "@mui/material";
import guideImage from "../assets/Images/guide1.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchBar from "../components/common/SearchBar";
import MediaCard from "../components/common/MediaCard";
import { useNavigate } from "react-router-dom";
import { getAllTourGuides } from "../service/tourGuides.service";

//images
import per1 from "../assets/Images/per1.png";

const TourGuides = () => {
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    orderBy: "desc",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [tourGuides, setTourGuides] = useState([]);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/tour-guides/${id}`);
  };

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) setIsLoading(true);

    const fetchAndSet = async () => {
      const response = await getAllTourGuides(
        pagination.page,
        pagination.limit,
        pagination.orderBy,
        keyword
      );

      if (response.success) {
        if (!response.data) return;
        console.log(response.data);
        setTourGuides(response.data.content);
      } else {
        console.error(response?.data);
      }
      if (!unmounted) setIsLoading(false);
    };

    fetchAndSet();

    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination, refresh, keyword]);

  return (
    <React.Fragment>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" image={guideImage} />
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
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              Tour Guides
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
            <Grid container spacing={4}>
              {tourGuides &&
                tourGuides.map((item) => (
                  <Grid
                    item
                    md={4}
                    lg={3}
                    key={item._id}
                    onClick={() => handleItemClick(item._id)}
                  >
                    <MediaCard image={per1} name={item.name} />
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default TourGuides;
