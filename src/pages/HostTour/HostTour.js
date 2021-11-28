import { Grid, TextField } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const HostTour = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://radiant-cove-26466.herokuapp.com/tourplans", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Your Tour Plan Has Been Added Successfully.");
          reset();
        }
      });
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box className="w-11/12 md:w-3/5 px-4 md:px-12 my-20 mx-auto bg-gray-100 py-12 rounded-3xl ">
          <h2 className="text-3xl capitalize text-dark pb-6 font-bold">
            Book Tours
          </h2>

          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <TextField
              required
              label="Host Name"
              fullWidth
              type="text"
              autoComplete="current-password"
              variant="filled"
              margin="dense"
              {...register("host", { required: true })}
            />
            {errors.name?.type === "required" && "First name is required"}
            <TextField
              required
              label="Location"
              fullWidth
              type="text"
              variant="filled"
              margin="dense"
              {...register("place", { required: true })}
            />
            {errors.email?.type === "required" && "email is required"}
            <TextField
              required
              label="Price Per Night"
              fullWidth
              type="number"
              variant="filled"
              margin="dense"
              {...register("price")}
            />
            <TextField
              required
              label="Rooms, Beds and Number Of People"
              fullWidth
              type="text"
              variant="filled"
              margin="dense"
              {...register("extraInfo")}
            />
            <TextField
              required
              label="Image URL"
              fullWidth
              type="url"
              variant="filled"
              margin="dense"
              {...register("img", { required: true })}
            />
            <TextField
              required
              label="Description"
              fullWidth
              multiline
              margin="dense"
              variant="filled"
              rows={4}
              {...register("description", { required: true })}
            />
            <input
              type="submit"
              value="Add To Plan"
              className="bg-blue-500 py-2 px-8 text-white cursor-pointer mt-4 block ml-auto rounded-lg"
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HostTour;
