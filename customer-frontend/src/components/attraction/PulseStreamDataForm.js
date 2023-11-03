import pulseStreamData from "../../models/pulseStramData";
import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Button,
  TextField,
  CircularProgress,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import colors from "../../assets/Style/colors";
import {
  createPulseStreamRecord,
  updatePulseStreamRecord,
} from "../../service/pulseStreamData.service";
import { popAlert } from "../../utils/alerts";

const PulseStreamDataForm = ({
  attractionId,
  onSuccess,
  isUpdate,
  pulseStreamRecord,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState(pulseStreamData);
  const [errors, setErrors] = useState({});
  const [preview, setPreview] = useState("");

  const handleClear = () => {
    setInputs(pulseStreamData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let response;
    if (isUpdate)
      response = await updatePulseStreamRecord(pulseStreamRecord._id, inputs);
    else response = await createPulseStreamRecord(attractionId, inputs);

    if (response.success) {
      response?.data &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {
          onSuccess();
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let unmounted = false;
    if (!pulseStreamRecord) return;

    if (!unmounted && isUpdate) {
      setInputs({
        ...pulseStreamData,
        tag: pulseStreamRecord.tag,
        description: pulseStreamRecord.description,
      });
      setPreview(pulseStreamRecord.preview);
    }

    return () => {
      unmounted = true;
    };
  }, [pulseStreamRecord, isUpdate]);

  return (
    <Box sx={{ mb: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ mb: 2 }}>
            <Input
              sx={{ mb: 1 }}
              fullWidth
              type="file"
              onChange={(e) => {
                setInputs({ ...inputs, image: e.target.files[0] });
                setPreview(window.URL.createObjectURL(e.target.files[0]));
              }}
            />
            {preview && (
              <img
                src={preview}
                alt="pulse stream record image"
                height={100}
                style={{ objectFit: "cover" }}
              />
            )}
          </Box>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Tag</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={inputs.tag}
              label="Age"
              onChange={(e) =>
                setInputs({
                  ...inputs,
                  tag: e.target.value,
                })
              }
            >
              <MenuItem value={"Info"}>Info</MenuItem>
              <MenuItem value={"Warning"}>Warning</MenuItem>
              <MenuItem value={"Hazard"}>Hazard</MenuItem>
            </Select>
          </FormControl>

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
            sx={{ mb: 2 }}
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
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress color="secondary" /> : "Save"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PulseStreamDataForm;
