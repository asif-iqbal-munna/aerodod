import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const { user, logOut } = useAuth();

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        position="static"
        sx={{ bgcolor: "primary.light", color: "success.contrastText" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/">aerodod</Link>
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <li className="px-4 py-2">
                  {user?.displayName ? user.displayName : ""}
                </li>
                <li className="px-4 py-2">
                  <Link to="/mytours">My Tours</Link>
                </li>
                <li className="px-4 py-2">
                  <Link to="/managetours">Manage Tours</Link>
                </li>
                <li className="px-4 py-2">
                  <Link to="/tourhost">Host A Tour</Link>
                </li>
                {!user?.displayName ? (
                  <li className="px-4 py-2">
                    <Link to="/login">Log In</Link>
                  </li>
                ) : (
                  <li className="px-4 py-2 cursor-pointer" onClick={logOut}>
                    Log Out
                  </li>
                )}
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
