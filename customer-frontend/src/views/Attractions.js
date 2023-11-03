import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  CardMedia,
  Pagination,
  CircularProgress,
} from "@mui/material";
import Attraction1 from "../assets/Images/Attraction1.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import SearchBar from "../components/common/SearchBar";
import MediaCard from "../components/common/MediaCard";
import { useNavigate } from "react-router-dom";
import { getPaginatedAttractions } from "../service/attraction.service";
import { getDownloadURLFromFirebaseRef } from "../utils/firebase";

const Attractions = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [attractions, setAttractions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleClick = (id) => {
    navigate(`/attractions/${id}`);
  };

  const handleSearch = (input) => {
    setKeyword(input);
  };

  useEffect(() => {
    let unmounted = false;

    const fetchAndSet = async () => {
      setIsLoading(true);
      const response = await getPaginatedAttractions(page, 6, "desc", keyword);

      if (response.success) {
        // resolove firesbase images
        const pAttractions = response?.data?.content || [];

        for (const attraction of pAttractions) {
          const imageRef = attraction?.images[0]?.firebaseStorageRef;
          if (imageRef)
            attraction.preview = await getDownloadURLFromFirebaseRef(imageRef);
        }

        if (!unmounted) {
          setAttractions(pAttractions);
          setTotalPages(response?.data?.totalPages || 0);
          setIsLoading(false);
        }
      } else {
        console.log(response.data);
      }
    };

    fetchAndSet();

    return () => {
      unmounted = true;
    };
  }, [page, keyword]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={Attraction1} />
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%",
          }}
        >
          <SearchBar onSearch={handleSearch} />
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
            Attractions
          </Typography>
        </Box>
        {isLoading && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              my: 3,
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <Box
          sx={{
            flexGrow: 1,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container spacing={2} style={{}}>
            {attractions?.map((attraction) => (
              <Grid
                item
                key={attraction._id}
                md={4}
                lg={3}
                onClick={() => handleClick(attraction._id)}
              >
                <MediaCard image={attraction.preview} name={attraction.name} />
              </Grid>
            ))}

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
                mt: 4,
              }}
            >
              <Pagination
                count={totalPages}
                page={page}
                onChange={handleChange}
                fontWeight={"bold"}
              />
            </Box>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Attractions;
