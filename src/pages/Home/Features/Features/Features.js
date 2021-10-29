import { Container } from "@mui/material";
import React from "react";
import Category from "./Category";
import HostTour from "./HostTour";

const Features = () => {
  return (
    <Container className="my-28">
      <h2 className="text-3xl capitalize text-dark pb-6 font-bold">
        Live Anywhere
      </h2>
      <Category />
      <HostTour />
    </Container>
  );
};

export default Features;
