import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const DiscoverThings = () => {
  const [discoverThings, setdiscoverThings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/discoverthings")
      .then((res) => setdiscoverThings(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="pb-28">
      <h2 className="text-3xl capitalize text-dark pb-6 font-bold">
        Discover Things To DO
      </h2>
      <Grid Grid container spacing={{ xs: 2, md: 8 }}>
        {discoverThings.map((discoverthing) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="flex justify-center rounded-2xl"
          >
            <div>
              <img
                src={discoverthing?.img}
                alt="Nature"
                className="w-100 h-96 rounded-2xl"
              />
              <div className="bg-gray-100 rounded-2xl p-2">
                <h4 className="pt-2 text-xl capitalize font-bold">
                  {discoverthing?.title}
                </h4>
                <h4 className="pt-2 text-sm capitalize font-bold">
                  {discoverthing?.subtitle}
                </h4>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DiscoverThings;
