import { Grid, makeStyles } from "@material-ui/core";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";

const useStyles = makeStyles({
  bgBlue: {
    color: "#2196F3",
    height: "50px",
    "&:hover": {
      color: "#2196F3",
    },
  },
  bgFb: {
    color: "#0E8CF1",
    height: "50px",
    "&:hover": {
      color: "#0E8CF1",
    },
  },
  bgInsta: {
    color: "#D32C83",
    height: "50px",
    "&:hover": {
      color: "#D32C83",
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="bg-gray-200 p-20">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <h5 className="text-xl font-bold">Download Our App From Playstore</h5>
          <img
            className="w-3/5 h-12 mt-2 cursor-pointer shadow-md"
            src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Google_Play_Store_3.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h5 className="text-xl font-bold">Office</h5>
          <address>
            MCC Building (2nd Floor) <br />
            76 Gulshan Avenue, <br />
            Dhaka-1212 <br />
            Bangladesh
          </address>
          <p>Phone: 09834784378</p>
          <p>Mail: help@aerodod.email.com</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h5 className="text-xl font-bold">Quick Links</h5>
          <ul className="w-4/5">
            <li className="cursor-pointer mb-2 border-b-2 border-gray-400">
              About Us
            </li>
            <li className="cursor-pointer mb-2 border-b-2 border-gray-400">
              Terms & Conditions
            </li>
            <li className="cursor-pointer mb-2 border-b-2 border-gray-400">
              Privacy
            </li>
            <li className="cursor-pointer mb-2 border-b-2 border-gray-400">
              Terms Of Use
            </li>
            <li className="cursor-pointer mb-2 border-b-2 border-gray-400">
              FAQ
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <h5 className="text-xl font-bold">Social Links</h5>
          <ul className="flex">
            <li className="mx-2 cursor-pointer">
              <GoogleIcon className={classes.bgBlue} />
            </li>
            <li className="mx-2 cursor-pointer">
              <FacebookIcon className={classes.bgFb} />
            </li>
            <li className="mx-2 cursor-pointer">
              <InstagramIcon className={classes.bgInsta} />
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
