import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@mui/system";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";

const useStyles = makeStyles({
  bgBlue: {
    backgroundColor: "#2196F3",
    "&:hover": {
      backgroundColor: "#2196F3",
    },
  },
});
const Login = () => {
  const classes = useStyles();
  const { signInWithGoogle, setIsLoading , setError } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirectURI = location.state?.from || "/";

  const handleSignIn = () => {
    setIsLoading(true);
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
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
    <Box className="w-4/5 md:w-1/3 mt-20 md:mt-40 p-20 h-42 mx-auto bg-gray-100">
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
