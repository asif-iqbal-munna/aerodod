import { Button, Container, Grid } from "@material-ui/core";
import { Box } from "@mui/system";
import axios from "axios";
import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const useStyles = makeStyles({
  btnStyle: {
    backgroundColor: "red",
    alignSelf: "end",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#e02323",
    },
  },
});

const MyBookedTours = () => {
  const [myTours, setMyTours] = useState([]);
  const [load, setLoad] = useState();

  const classes = useStyles();
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://radiant-cove-26466.herokuapp.com/mytours/${user.email}`)
      .then((res) => setMyTours(res.data))
      .catch((err) => console.log(err));
  }, [user.email, load]);

  const handleDelete = (id) => {
    const procced = window.confirm("Are you sure you want to delete the user?");
    if (procced) {
      const URI = `https://radiant-cove-26466.herokuapp.com/mytours/${id}`;
      axios.delete(URI).then((res) => {
        alert("Succesfully deleted the tour");
      });
      setLoad(true);
    }
  };

  if (myTours.length > 0) {
    return (
      <Container className="my-20">
        <Grid container spacing={2}>
          {myTours.map((tour) => (
            <Grid item xs={12} sm={6} md={3} key={tour._id}>
              <Box className="mt-6">
                <img
                  className="h-40 block mx-auto"
                  src={tour?.tour?.img}
                  alt=""
                />
              </Box>
              <Box>
                <h2 className="text-xl mt-4 px-4 capitalize text-dark font-bold">
                  {tour?.tour?.place}
                </h2>
                <p className="text-base">{tour?.data?.extraInfo}</p>
                <div className="flex justify-between px-6 py-2">
                  <p className="text-base font-bolder mt-4 py-2 px-4 bg-red-200 rounded-lg text-blue-500 font-bold">
                    {tour?.status}
                  </p>
                  <Button
                    className={classes.btnStyle}
                    onClick={() => handleDelete(tour?._id)}
                  >
                    Cancel
                  </Button>
                </div>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  } else {
    return (
      <div className="my-20">
        <div className="bg-gray-200 p-20 w-3/5 mx-auto">
          <h3 className="text-2xl text-red-300">
            There is no tours booked by you. Your Tour List is empty
          </h3>
        </div>
      </div>
    );
  }
};

export default MyBookedTours;
