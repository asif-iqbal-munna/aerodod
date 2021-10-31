import { Container, Grid, TextField } from "@material-ui/core";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";

const BookTour = () => {
  const [tour, setTour] = useState({});

  const { user } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    const URI = `https://radiant-cove-26466.herokuapp.com/tourplans/${id}`;
    axios.get(URI).then((res) => {
      setTour(res.data);
    });
  }, []);

  const onSubmit = (data) => {
    data.tour = tour;
    data.status = "pending";
    axios
      .post("https://radiant-cove-26466.herokuapp.com/mytours", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert(
            "Congraulations, you have booked your tour. Thanks for staying with us."
          );
          reset();
        }
      });
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box className="mt-12">
            <img className="h-96 block mx-auto" src={tour?.img} alt="" />
          </Box>
          <Box>
            <h2 className="text-3xl mt-4 capitalize text-dark font-bold">
              {tour?.place}
            </h2>
            <p className="text-base">{tour?.extraInfo}</p>
            <p className="text-2xl font-bolder mt-4">
              Cost ${tour?.price} per night
            </p>
            <p className="text-lg mt-4 pr-20">{tour?.description}</p>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="w-100 px-4 mx-auto bg-gray-100 py-12 mt-12 rounded-3xl ">
            <h2 className="text-3xl capitalize text-dark pb-6 font-bold">
              Book Tours
            </h2>
            {tour.place && user.displayName && (
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  required
                  label="Name"
                  fullWidth
                  type="text"
                  autoComplete="current-password"
                  variant="filled"
                  defaultValue={user?.displayName}
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
                  defaultValue={user?.email}
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
                <div className="flex justify-between">
                  <TextField
                    required
                    label="Check In"
                    type="date"
                    variant="filled"
                    size="small"
                    {...register("checkIn")}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    required
                    label="Check Out"
                    type="date"
                    variant="filled"
                    size="small"
                    {...register("checkOut")}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
                <TextField
                  required
                  label="Place"
                  fullWidth
                  type="text"
                  variant="filled"
                  defaultValue={tour?.place}
                  margin="dense"
                  {...register("place")}
                />
                <input
                  type="submit"
                  value="Place Order"
                  className="bg-blue-500 py-2 px-8 text-white cursor-pointer mt-4 block ml-auto rounded-lg"
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BookTour;
