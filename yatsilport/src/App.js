import "./App.css";
import { Container, Grid } from "@mui/material";
import Profile from "./component/Profile";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Router from "./Routes/Router";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} lg={4} md={3}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router />
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
