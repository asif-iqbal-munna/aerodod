import { Container, Grid, TextField } from "@material-ui/core";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";

const BookTour = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          gdfhd
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="w-100 px-4 mx-auto bg-gray-100 py-12 mt-12 rounded-3xl ">
            <h2 className="text-3xl capitalize text-dark pb-6 font-bold">
              Book Tours
            </h2>
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <TextField
                required
                label="Name"
                fullWidth
                type="text"
                autoComplete="current-password"
                variant="filled"
                defaultValue="Hello World"
                margin="dense"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && "First name is required"}
              <TextField
                required
                label="Email"
                fullWidth
                type="email"
                variant="filled"
                margin="dense"
                defaultValue="example@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && "email is required"}
              <TextField
                label="Phone Number"
                fullWidth
                type="number"
                variant="filled"
                margin="dense"
                {...register("phone")}
              />
              <TextField
                required
                label="Address"
                fullWidth
                type="text"
                variant="filled"
                margin="dense"
                {...register("address", { required: true })}
              />
              <input
                type="submit"
                value="Place Order"
                className="bg-blue-500 py-2 px-8 text-white cursor-pointer mt-4 block ml-auto"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookTour;
