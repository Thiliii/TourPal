import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";

import colors from "../../assets/Style/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.primary,
          color: colors.primary,
          height: "25vh",
          mt: 10,
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ width: "80%", py: 4 }}
          >
            <Grid item xs={3}>
              <Typography
                variant="h4"
                sx={{ fontWeight: "bold", color: colors.black, ml: 5 }}
              >
                TourPal
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 5 }}
              >
                Home
              </Typography>

              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 5 }}
              >
                Attractions
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 5 }}
              >
                Hotels
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 5 }}
              >
                Tour Guides
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 5 }}
              >
                Contact Us
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 7 }}
              >
                Phone - +94 77 125 1251
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 7 }}
              >
                E-mail - triptrekker@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                sx={{ fontWeight: "bold", color: colors.black, ml: 5 }}
              >
                Social Media
              </Typography>
              <Box sx={{ color: colors.black, ml: 5 }}>
                <FacebookIcon />

                <InstagramIcon />

                <TwitterIcon />

                <TelegramIcon />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: colors.secondary,
          color: "white",
          height: "7vh",
        }}
      >
        <Typography align="center" sx={{ pt: 2 }}>
          © {new Date().getFullYear()} SLIIT Team, Inc.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
