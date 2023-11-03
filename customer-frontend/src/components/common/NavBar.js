import React, { useState, useEffect, useRef } from "react";
import {
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Avatar,
  Grow,
  Paper,
  Popper,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { Box } from "@mui/system";
import colors from "../../assets/Style/colors";
import navbarStyles from "../../components/navbar";
import Popup from "../../components/common/Popup";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/Images/Rectangle1.png";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const NavBar = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [showPopup, setShowPopup] = useState(false);
  const [showRegiserPopup, setshowRegiserPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState();
  const handlePopupClose = () => setShowPopup(false);
  const handleRegisterPopupClose = () => setshowRegiserPopup(false);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef < HTMLButtonElement > null;
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const Navigatehome = () => {
    navigate("/");
  };
  const NavigateAttraction = () => {
    navigate("/attractions");
  };

  const NavigateHotles = () => {
    navigate("/hotels");
  };

  const NavigateTourguide = () => {
    navigate("/tour-guides");
  };

  const NavigateSignIn = () => {
    navigate("sign-in");
  };

  const NavigateProfile = () => {
    navigate("profile");
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          px: 8,
          py: 1,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1,
          boxShadow: "0 2px 4px rgba(0,0,0,.2)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={2}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: colors.black }}
            >
              TourPal
            </Typography>
          </Grid>
          <Grid item xs={6} md={8}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-start"
              alignItems="center"
              sx={{ height: "100%", ml: 18 }}
            >
              <Typography
                sx={{
                  ...navbarStyles.NavbarHeading,
                  paddingRight: 2,
                  paddingLeft: 2,
                }}
                onClick={Navigatehome}
              >
                Home
              </Typography>
              <Typography
                sx={{
                  ...navbarStyles.NavbarHeading,
                  paddingRight: 2,
                  paddingLeft: 2,
                }}
                onClick={NavigateAttraction}
              >
                Attractions
              </Typography>
              <Typography
                sx={{
                  ...navbarStyles.NavbarHeading,
                  paddingRight: 2,
                  paddingLeft: 2,
                }}
                onClick={NavigateHotles}
              >
                Hotels
              </Typography>
              <Typography
                sx={{
                  ...navbarStyles.NavbarHeading,
                  ml: 5,
                  paddingRight: 2,
                  paddingLeft: 2,
                }}
                onClick={NavigateTourguide}
              >
                Tour Guides
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={2}>
            <Stack direction="row" spacing={2} sx={{ cursor: "pointer" }}>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Avatar variant="contained" {...bindTrigger(popupState)} />
                    <Menu {...bindMenu(popupState)}>
                      {authState.isLoggedIn == false ? (
                        <MenuItem onClick={NavigateSignIn}>Sign In</MenuItem>
                      ) : (
                        <MenuItem onClick={NavigateProfile}>Profile</MenuItem>
                      )}

                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default NavBar;
