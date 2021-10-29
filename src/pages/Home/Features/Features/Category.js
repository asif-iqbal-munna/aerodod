import { Container, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/liveanywhere")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container className="my-28">
      <Grid Grid container spacing={8}>
        {categories.map((category) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className="flex justify-center rounded-2xl"
          >
            <div>
              <img
                src={category?.img}
                alt="Nature"
                className="w-100 h-96 rounded-2xl"
              />
              <div className="bg-gray-100 rounded-2xl">
                <h4 className="p-4 text-2xl capitalize font-bold">
                  {category?.title}
                </h4>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Category;
