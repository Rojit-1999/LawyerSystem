import * as React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { boldRaleway, button, cardMedia, raleway } from "./styles";

const Register = () => {
  return (
    <Grid container spacing={4} id="register">
      {/* REGISTER AS Lawyer */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1, fontFamily: "Raleway" }}>
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Register as a Lawyer
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
                Sign Up to provide consultations to clients
              </Typography>
              <Button sx={button}>
              <Link to="/lawyersignup">Sign Up</Link>
              </Button>

              <Button sx={button} href="/lawyersignin">
              <Link to="/lawyersignin">Sign In</Link>
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/lawyer1.png"
              alt="Lawyer"
            />
          </Card>
        </CardActionArea>
      </Grid>

      {/* REGISTER AS CLIENT */}
      <Grid item xs={12} md={6}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Register as a Client
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
                Sign Up to book appointments with lawyers
              </Typography>
              <Button sx={button}>
              <Link to="/clientsignup">Sign Up</Link>
              </Button>

              <Button sx={button}>
              <Link to="/clientsignin">Sign In</Link>
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/client.png"
              alt="client"
            />
          </Card>
        </CardActionArea>
      </Grid>

      {/* ADMIN LOGIN */}
      <Grid item xs={12}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: "flex" }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h1" variant="h4" sx={boldRaleway}>
                Sign in as an Admin
              </Typography>
              <Typography variant="h5" paragraph sx={raleway}>
                Only verified admins of HamroWakil can login using the email ID
                provided to them
              </Typography>

              <Button sx={button}>
              <Link to="/adminsignin">Sign In</Link>
              </Button>
            </CardContent>

            {/* Image */}
            <CardMedia
              component="img"
              sx={cardMedia}
              image="images/admin.png"
              alt="Admin"
            />
          </Card>
        </CardActionArea>
      </Grid>
    </Grid>
  );
};

export default Register;
