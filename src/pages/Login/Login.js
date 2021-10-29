import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import useFirebase from "../../hooks/useFirebase";

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
  const { signInWithGoogle } = useFirebase();

  const handleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className="w-4/5 md:w-1/3 mt-20 md:mt-40 p-20 h-42 mx-auto bg-gray-100">
      <div className="">
        <Button
          variant="contained"
          className={`${classes.bgBlue}`}
          onClick={handleSignIn}
        >
          <GoogleIcon className="text-white" />{" "}
          <span className="text-white ml-2">Sign In WIth Google</span>
        </Button>
      </div>
    </div>
  );
};

export default Login;
