import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, makeStyles } from "@material-ui/core";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  btnDelete: {
    color: "red",
    height: "50px",
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
    btnStyle: {
      backgroundColor: "#6FBF73",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#6FBF73",
      },
    },
  },
});

const ManageTours = () => {
  const [tourData, setTourData] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:8080/mytours")
      .then((res) => setTourData(res.data));
  }, []);

  console.log(tourData);

  return (
    <Container className="my-20">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Update Status</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tourData.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row?.tour?.place}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">
                  <button className="py-2 px-4 rounded-lg bg-green-500 text-white">
                    Approved
                  </button>
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon className={classes.btnDelete} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ManageTours;
