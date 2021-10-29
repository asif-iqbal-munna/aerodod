import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TourPlans = () => {
  const [tourPlans, setTourPlans] = useState([]);

  useEffect(() => {
    axios
      .get("https://radiant-cove-26466.herokuapp.com/tourplans")
      .then((res) => setTourPlans(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="py-28">
      <h2 className="text-3xl capitalize text-dark pb-6 font-bold">
        Tour Plans
      </h2>
      <Grid
        Grid
        container
        className="justify-center"
        sx={{
          columnGap: 3,
          rowGap: 2,
        }}
      >
        {tourPlans.map((tourPlan) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={tourPlan?.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  className="pt-2 text-lg capitalize font-bold"
                >
                  {tourPlan?.place}
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  className="text-xl font-bold"
                >
                  ${tourPlan?.price}/Night
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tourPlan?.description?.slice(0, 150)}
                </Typography>
              </CardContent>
              <div className="p-4">
                <Button variant="contained">Book Now</Button>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default TourPlans;
