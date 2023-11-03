import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { getTimePassed } from "../../utils/common";
import { useSelector } from "react-redux";
import colors from "../../assets/Style/colors";

const PulseStreamDataRecord = ({
  record,
  image,
  onUpdateClick,
  onDeleteClick,
}) => {
  const authState = useSelector((state) => state.auth);

  const getBackgroudColorByTag = (tag) => {
    if (tag === "Hazard") return "#CC3300";
    else if (tag === "Warning") return "#ffcc00";
    else if (tag === "Info") return "#33FFE9";
  };

  return (
    <Box sx={{ mb: 1 }}>
      <Card>
        <CardMedia
          component="img"
          alt="green iguana"
          height={400}
          sx={{ objectFit: "cover" }}
          image={image}
        />
        <CardContent>
          <Box>
            <Grid container>
              <Grid item xs={8}>
                <Typography gutterBottom variant="h6" component="div">
                  {record?.user?.name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  gutterBottom
                  variant="body"
                  component="div"
                  textAlign={"right"}
                >
                  {getTimePassed(record.updatedAt)}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ width: "fit-content", mb: 2 }}>
            <Typography
              sx={{
                backgroundColor: getBackgroudColorByTag(record.tag),
                px: 2,
                borderRadius: 4,
                color: colors.white,
              }}
            >
              {record.tag}
            </Typography>
          </Box>

          <Typography variant="span" color="text.secondary">
            {record.description}
          </Typography>
        </CardContent>
        <CardActions>
          {authState?.user?._id === record?.user?._id && (
            <CardActions sx={{ justifyContent: "flex-end" }}>
              <Button
                size="small"
                color="success"
                onClick={() => onUpdateClick(record)}
              >
                Update
              </Button>
              <Button
                size="small"
                color="error"
                onClick={() => onDeleteClick(record)}
              >
                Delete
              </Button>
            </CardActions>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};

export default PulseStreamDataRecord;
