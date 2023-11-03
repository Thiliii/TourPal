import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import colors from "../assets/Style/colors";
import { Link, useNavigate } from "react-router-dom";
import signUp from "../models/signUp";
import { signUpUser } from "../service/signUp.service";
import { popAlert } from "../utils/alerts";
import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [RegInputs, setRegInputs] = useState(signUp);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [conError, setConError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await signUpUser(RegInputs);

    console.log(RegInputs);
    console.log(RegInputs.tourGuide);
    if (response.success) {
      setLoading(false);
      dispatch(authActions.login(response.data));
      response?.data &&
        popAlert(
          "Success!",
          `Welcome, ${response.data?.user.name}!`,
          "success"
        ).then((res) => {
          navigate("/");
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
      setLoading(false);
    }
  };

  const handleClear = () => {
    setRegInputs();
    setConfirmPassword("");
  };

  useEffect(() => {
    let unmounted = false;

    if (RegInputs.password !== confirmPassword) {
      if (!unmounted) setConError("Password does not match!");
    } else {
      if (!unmounted) setConError("");
    }
    return () => {
      unmounted = true;
    };
  }, [confirmPassword, RegInputs.password]);

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 5,
        }}
      >
        <Box
          sx={{
            my: 6,
            borderRadius: 6,
            backgroundColor: colors.white,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
            p: 3,
            width: 550,
          }}
        >
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="primary"
              textAlign={"center"}
              sx={{ mb: 3 }}
              style={{ color: "black" }}
            >
              Sign Up
            </Typography>
            <form onSubmit={handleRegisterSubmit} encType="multipart/form-data">
              <Box sx={{ mb: 2, m: 3 }}>
                <Typography>Register As :</Typography>
                <RadioGroup
                  row
                  aria-label="userType"
                  name="userType"
                  value={RegInputs.type}
                  onChange={(e) =>
                    setRegInputs({
                      ...RegInputs,
                      type: e.target.value,
                    })
                  }
                >
                  <FormControlLabel
                    value="Tourist"
                    control={<Radio />}
                    label="Tourist"
                  />
                  <FormControlLabel
                    value="Tour Guide"
                    control={<Radio />}
                    label="Tour Guide"
                  />
                </RadioGroup>
              </Box>
              <Box sx={{ mb: 2, m: 3 }}>
                <TextField
                  variant="filled"
                  label="Name"
                  fullWidth
                  value={RegInputs.name}
                  onChange={(e) =>
                    setRegInputs({
                      ...RegInputs,
                      name: e.target.value,
                    })
                  }
                />
                {errors["name"] && (
                  <Typography color="error">{errors["name"]}</Typography>
                )}
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                <TextField
                  variant="filled"
                  label="Address"
                  fullWidth
                  value={RegInputs.address}
                  onChange={(e) =>
                    setRegInputs({
                      ...RegInputs,
                      address: e.target.value,
                    })
                  }
                />
                {errors["address"] && (
                  <Typography color="error">{errors["address"]}</Typography>
                )}
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                <TextField
                  variant="filled"
                  label="Contact Number"
                  fullWidth
                  value={RegInputs.mobileNumber}
                  onChange={(e) =>
                    setRegInputs({
                      ...RegInputs,
                      mobileNumber: e.target.value,
                    })
                  }
                />
                {errors["mobileNumber"] && (
                  <Typography color="error">
                    {errors["mobileNumber"]}
                  </Typography>
                )}
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disableFuture
                    label="Birth Date"
                    fullWidth
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={RegInputs.birthday}
                    onChange={(nValue) =>
                      setRegInputs({
                        ...RegInputs,
                        birthday: nValue,
                      })
                    }
                    renderInput={(params) => (
                      <TextField {...params} fullWidth />
                    )}
                  />
                </LocalizationProvider>
                {errors["birthday"] && (
                  <Typography color="error">{errors["birthday"]}</Typography>
                )}
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                <Typography>Gender :</Typography>
                <RadioGroup
                  row
                  aria-label="GenderType"
                  name="GenderType"
                  value={RegInputs.gender}
                  onChange={(e) =>
                    setRegInputs({
                      ...RegInputs,
                      gender: e.target.value,
                    })
                  }
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                </RadioGroup>
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                <TextField
                  variant="filled"
                  label="E-mail"
                  type="email"
                  fullWidth
                  value={RegInputs.email}
                  onChange={(e) =>
                    setRegInputs({
                      ...RegInputs,
                      email: e.target.value,
                    })
                  }
                />
                {errors["email"] && (
                  <Typography color="error">{errors["email"]}</Typography>
                )}
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                <TextField
                  variant="filled"
                  label="Password"
                  type="password"
                  fullWidth
                  value={RegInputs.password}
                  onChange={(e) =>
                    setRegInputs({
                      ...RegInputs,
                      password: e.target.value,
                    })
                  }
                />
                {errors["password"] && (
                  <Typography color="error">{errors["password"]}</Typography>
                )}
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                <TextField
                  variant="filled"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {conError && <Typography color="error">{conError}</Typography>}
              </Box>

              <Box sx={{ mb: 2, m: 3 }}>
                {RegInputs.type === "Tour Guide" && (
                  <>
                    <Typography variant="h6">
                      Tour Guide Certificate Information
                    </Typography>

                    <Typography sx={{ mb: 2 }}>
                      Provide Your Tour Guide Certificate as a PDF.
                    </Typography>
                    <input
                      type="file"
                      accept="application/pdf"
                      onChange={(e) => {
                        const certificate = e.target.files[0];
                        setRegInputs({
                          ...RegInputs,
                          tourGuide: { certificate: certificate },
                        });
                      }}
                    />
                  </>
                )}
              </Box>

              <Box
                sx={{
                  mb: 2,
                  mr: 3,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  type="reset"
                  variant="contained"
                  onClick={handleClear}
                  sx={{ py: 2, px: 5, mr: 2, backgroundColor: colors.grey }}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ py: 2, px: 5 }}
                  disabled={loading}
                >
                  {loading ? <CircularProgress color="secondary" /> : "Save"}
                </Button>
              </Box>
            </form>
            <Box textAlign={"center"} sx={{ cursor: "pointer" }}>
              <Link to="/sign-in">
                <Typography variant="h7">Already have an account?</Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default SignUp;
