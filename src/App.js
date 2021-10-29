import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from ".././src/pages/Shared/Header/Header";
import { colors } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MyBookedTours from "./pages/MyBookedTours/MyBookedTours";
import { NotFound } from "http-errors";
import BookTour from "./pages/BookTour/BookTour";
import Login from "./pages/Login/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.green[500],
    },
  },
});

function App() {
  return (
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
          <Route path="/mytours">
            <MyBookedTours />
          </Route>
          <Route path="/booktour">
            <BookTour />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
