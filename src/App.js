import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from ".././src/pages/Shared/Header/Header";
import { colors } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyBookedTours from "./pages/MyBookedTours/MyBookedTours";
import NotFound from "../src/pages/NotFound/NotFound";
import BookTour from "./pages/BookTour/BookTour";
import Login from "./pages/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./pages/Login/PrivateRoute";
import Footer from "./pages/Shared/Footer/Footer";
import ManageTours from "./pages/ManageTours/ManageTours";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[500],
    },
  },
});

function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/mytours">
              <MyBookedTours />
            </PrivateRoute>
            <PrivateRoute path="/booktour/:id">
              <BookTour />
            </PrivateRoute>
            <PrivateRoute path="/managetours">
              <ManageTours />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
