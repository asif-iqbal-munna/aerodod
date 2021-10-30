import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button, Container, Grid } from "@mui/material";

const useStyles = makeStyles({
  hostImg: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/WWNfPMY/wojciech-then-Dij-A5f0vo-GQ-unsplash-1.jpg')`,
    backgroundPosition: "center",
    height: "60vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "20px",
    marginBottom: "70px",
  },
});

const HostTour = () => {
  const classes = useStyles();
  return (
    <Container className="rounded-3xl">
      <Box className={`${classes.hostImg}`}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <div className="pt-20 pl-6">
              <div className="pb-6">
                <h2 className="text-3xl font-bold text-white">Try Hosting</h2>
                <p className="text-lg text-white">
                  Earn extra income and unlock new opportunities by sharing your
                  space
                </p>
              </div>
              <Button variant="contained">Host</Button>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HostTour;
