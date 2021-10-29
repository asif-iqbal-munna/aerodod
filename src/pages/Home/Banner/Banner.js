import React from "react";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  bannerImg: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/WWNfPMY/wojciech-then-Dij-A5f0vo-GQ-unsplash-1.jpg')`,
    backgroundPosition: "center",
    height: "90vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "coverF",
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerImg}>
      <Box className="flex justify-center items-center text-white">
        <div className="w-4/5 md:w-3/5 pt-40">
          <h1 className="text-3xl md:text-5xl">
            Travel is the only thing you buy that makes you richer
          </h1>
          <h3 className="text-lg md:text-2xl mt-6  md:px-12">
            It feels good to be lost in the right direction and also from right
            place
          </h3>
        </div>
      </Box>
    </Box>
  );
};

export default Banner;
