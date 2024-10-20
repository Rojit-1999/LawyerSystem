import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Navbar from "./Navbar";
import { db } from "../Firebase";
import {
  Button,
  Grid,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { container, listItem, typography } from "./styles";
import Appointments from "./Appointments";
import Feedback from "./Feedback";

const PastAppointments = () => {
  const [lawyers, setLawyers] = useState([]);
  const { currentUser } = useAuth();
  const [appointments, setAppointments] = useState([]);

  // FETCHING APPOINTMENTS' DATA FROM DB
  useEffect(() => {
    db.collection("appointments")
      .orderBy("timeSlot", "desc")
      .onSnapshot((snapshot) => {
        setAppointments(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });
  }, []);

  // FETCHING CLIENT'S DATA FROM DB
  useEffect(() => {
    db.collection("clients")
      .doc(currentUser.uid)
      .collection("lawyers")
      .onSnapshot((snapshot) => {
        setLawyers(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={container}>
        <Typography variant="h4" align="center" sx={typography}>
          Past Appointments
        </Typography>
        <List>
          {appointments.map((appointment) => {
            if (
              appointment.isConfirmed === "true" &&
              appointment.clientUID === currentUser.uid
            )
              return (
                <ListItem sx={listItem}>
                  <Grid container>
                    <Grid item xs={12} sm={6}>
                      <Typography>
                        <b>Mode:</b> {appointment.mode} <br />
                        <b>Slot:</b>{" "}
                        {new Date(
                          appointment.timeSlot.seconds * 1000
                        ).toLocaleDateString("en-US")}
                        ,
                        {new Date(
                          appointment.timeSlot.seconds * 1000
                        ).getHours()}
                        :
                        {new Date(
                          appointment.timeSlot.seconds * 1000
                        ).getMinutes()}
                        <br />
                        <b>CaseDetail:</b> {appointment.markings}
                      </Typography>
                      <Typography>
                        <b>Suggestion: </b>
                        <Appointments
                          appointmentID={appointment.id}
                          lawyerUID={appointment.lawyerUID}
                          clientUID={appointment.clientUID}
                        />
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <Typography>
                        <b>Feedback: </b>
                        <Feedback
                          appointmentID={appointment.id}
                          lawyerUID={appointment.lawyerUID}
                          clientUID={appointment.clientUID}
                        />
                      </Typography>

                      <Link to={`/lawyerprofile/${appointment.lawyerUID}`}>
                      <Button
                        variant="contained"
                        // href={`/lawyerprofile/${appointment.lawyerUID}`}
                        target="_blank"
                      >
                        See Lawyer
                      </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </ListItem>
              );
          })}
        </List>
      </Container>
    </>
  );
};

export default PastAppointments;
