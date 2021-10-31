import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@mui/system";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const useStyles = makeStyles({
  bgBlue: {
    backgroundColor: "#2196F3",
    display: "block",
    margin: "0 auto",
    "&:hover": {
      backgroundColor: "#2196F3",
    },
  },
});
const Login = () => {
  const classes = useStyles();
  const { signInWithGoogle, setIsLoading, setError } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirectURI = location.state?.from || "/";

  const handleSignIn = () => {
    setIsLoading(true);
    signInWithGoogle()
      .then((result) => {
        // ...
        history.push(redirectURI);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
        // ...
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <Box className="w-4/5 md:w-2/3 my-20 md:my-40 p-6 mx-auto md:p-10 lg:p-20  h-42 bg-gray-100">
      <Box>
        <Button
          variant="contained"
          className={`${classes.bgBlue}`}
          onClick={handleSignIn}
        >
          <GoogleIcon className="text-white" />{" "}
          <span className="text-white ml-2">Sign In WIth Google</span>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
