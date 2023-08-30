import "./App.css";
import { Container, Grid } from "@mui/material";
import Profile from "./component/Profile";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Router from "./Routes/Router";

function App() {
  return (
    <Container className="main">
      <Grid container spacing={7}>
        <Grid item sm={12} xs={12} lg={3} md={4} className=" container_shadow">
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <Router />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
