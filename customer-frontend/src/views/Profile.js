import React, { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  Grid,
  Button,
  TextField,
  CircularProgress,
  Input,
} from "@mui/material";
import PortfolioCard from "../components/common/PortfolioCard";
import Popup from "../components/common/Popup";
import colors from "../assets/Style/colors";
import { useSelector } from "react-redux";
import {
  getPortfolios,
  createPortfolio,
  deletePortfolio,
  updatePortfolio,
  getPortfolioById,
} from "../service/portfolio.service";
import portfolio from "../models/portfolio";
import { popAlert, popDangerPrompt } from "../utils/alerts";

//image
import personImage from "../assets/Images/per3.png";
import portImg1 from "../assets/Images/po1.jpg";
import portImg2 from "../assets/Images/po2.jpg";

const Profile = () => {
  const authState = useSelector((state) => state.auth);
  const [inputs, setInputs] = useState(portfolio);
  const [portfolios, setPortfolios] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [updateShowPopup, setUpdateShowPopup] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    orderBy: "desc",
  });
  // const [selectedPortfolio, setSelectedPortfolio] = useState("");

  //create portfolio
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await createPortfolio(inputs);

    console.log(inputs);

    if (response.success) {
      response?.data &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {
          setShowPopup(false);
          window.location.reload();
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
      setLoading(false);
    }
  };

  const handleUpdatePopupClose = () => {
    setUpdateShowPopup(false);
    setInputs("");
  };

  const handleClear = () => {
    setInputs("");
  };

  //delete portfolio
  const handlePortfolioDelete = (id) => {
    setLoading(true);
    popDangerPrompt(
      "DELETE",
      "Do you want to delete this Portfolio?",
      "error"
    ).then(async (res) => {
      if (res.isConfirmed) {
        const response = await deletePortfolio(id);

        if (response.success) {
          popAlert(
            "Success!",
            "Portfolio Successfully Deleted!",
            "success"
          ).then((res) => {
            window.location.reload();
          });
        } else {
          response?.data?.message &&
            popAlert("Error!", response?.data?.message, "error");
          response?.data?.data && setErrors(response.data.data);
        }
      }
    });
    setLoading(false);
  };

  //update portfolio fetch data
  const handlePortfolioUpdate = async (item) => {
    setUpdateShowPopup(true);
    //   // setSelectedPortfolio(response.data);
    setInputs(item);
    // console.log("portID", id);
    // const response = await getPortfolioById(id);
    // if (response.success) {
    //   console.log("response", response?.data);
    //   setUpdateShowPopup(true);
    //   // setSelectedPortfolio(response.data);
    //   setInputs(response.data);
    // } else {
    //   console.error(response.data);
    // }
  };

  // console.log("selectedPortfolio", selectedPortfolio);
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log("selectedPortfolio.id ", selectedPortfolio._id);
    const response = await updatePortfolio(inputs, inputs._id);

    // console.log(selectedPortfolio);

    if (response.success) {
      response?.data &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {
          setLoading(false);
          setShowPopup(false);
          window.location.reload();
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
      setLoading(false);
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setInputs("");
  };

  //get birthday date
  const birthday = new Date(authState.user.birthday);
  const birthdate = birthday.toLocaleDateString();
  console.log("bdate", birthdate);

  //get all portfolios
  useEffect(() => {
    let unmounted = false;

    if (!unmounted) setIsLoading(true);

    const fetchAndSet = async () => {
      const response = await getPortfolios(
        authState.user._id,
        pagination.page,
        pagination.limit,
        pagination.orderBy
      );

      if (response.success) {
        if (!response.data) return;
        console.log(response.data);
        setPortfolios(response.data.content);
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
  }, [pagination, refresh]);

  // // get portfolio data for update
  // useEffect(() => {
  //   let unmounted = false;

  //   const fetchAndSet = async () => {
  //     const response = await getPortfolioById(id);
  //     console.log("pID", id);

  //     if (response.success) {
  //       console.log("response", response.data);
  //       if (!unmounted) {
  //         // setFeedback(response?.data);
  //       }
  //     }
  //   };

  //   fetchAndSet();
  //   return () => {
  //     unmounted = true;
  //   };
  // }, [id, loading]);

  return (
    <React.Fragment>
      <Box sx={{ mt: 10, px: 12 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Card sx={{ width: "50" }}>
              <CardMedia
                component="img"
                alt="person"
                height="200"
                boxshadow="0px 8px 25px rgba(0, 0, 0, 0.15)"
                image={personImage}
              />
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {authState.user.name}
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac
              sodales id, porttitor vitae est. Donec laoreet rutrum
            </Typography>
            <Typography sx={{ fontWeight: "bold", my: 1 }}>
              Address : {authState.user.name}
            </Typography>
            <Typography sx={{ fontWeight: "bold", my: 1 }}>
              Birthday : {birthdate}
            </Typography>
            <Typography sx={{ fontWeight: "bold", my: 1 }}>
              Contact : {authState.user.mobileNumber}
            </Typography>
            <Typography sx={{ fontWeight: "bold", my: 1 }}>
              Sex : {authState.user.gender}
            </Typography>
          </Grid>
        </Grid>
        {authState.user.type === "Tour Guide" ? (
          <Box sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={8} sx={{ mb: 2 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Guide Portfolio
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ textAlign: "right" }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => setShowPopup(true)}
                >
                  Add New
                </Button>
              </Grid>
              {portfolios &&
                portfolios.map((item) => (
                  <Grid item xs={6} key={item._id}>
                    <PortfolioCard
                      image={item.image.firebaseStorageRef}
                      description={item.description}
                      handleDelete={() => handlePortfolioDelete(item._id)}
                      handleUpdate={() => handlePortfolioUpdate(item)}
                    />
                  </Grid>
                ))}
            </Grid>
          </Box>
        ) : (
          ""
        )}
      </Box>

      {/* pop up for create portfolio*/}

      <Popup
        title="Create new Post"
        width={800}
        show={showPopup}
        onClose={handlePopupClose}
      >
        <Box sx={{ mb: 2 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ mb: 2 }}>
                <Input
                  fullWidth
                  type="file"
                  onChange={(e) =>
                    setInputs({ ...inputs, image: e.target.files[0] })
                  }
                />
              </Box>
              {/* <Box>
                {inputs.image && (
                  <CardMedia
                    component="img"
                    image={URL.createObjectURL(inputs.image)}
                    sx={{ my: 2, maxWidth: "100%" }}
                  />
                )}
              </Box> */}

              <TextField
                name="description"
                variant="filled"
                label="Description"
                fullWidth
                multiline
                maxRows={4}
                value={inputs.description}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    description: e.target.value,
                  })
                }
              />
              {errors["description"] && (
                <Typography color="error">{errors["description"]}</Typography>
              )}
            </Box>

            <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
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
        </Box>
      </Popup>

      {/* pop up for update portfolio*/}

      <Popup
        title="Update the Post"
        width={800}
        show={updateShowPopup}
        onClose={handleUpdatePopupClose}
      >
        <Box sx={{ mb: 2 }}>
          <form onSubmit={handleUpdateSubmit}>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ mb: 2 }}>
                <Input
                  fullWidth
                  type="file"
                  onChange={(e) =>
                    setInputs({ ...inputs, image: e.target.files[0] })
                  }
                />
              </Box>
              {/* <Box>
                {inputs.image && (
                  <CardMedia
                    component="img"
                    image={URL.createObjectURL(inputs.image)}
                    sx={{ my: 2, maxWidth: "100%" }}
                  />
                )}
              </Box> */}

              <TextField
                name="description"
                variant="filled"
                label="Description"
                fullWidth
                multiline
                maxRows={4}
                value={inputs.description}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    description: e.target.value,
                  })
                }
              />
              {errors["description"] && (
                <Typography color="error">{errors["description"]}</Typography>
              )}
            </Box>

            <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
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
        </Box>
      </Popup>
    </React.Fragment>
  );
};

export default Profile;
