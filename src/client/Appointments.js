import React, { useState, useEffect } from "react";
import { db } from "../Firebase";
import { Typography } from "@mui/material";

const Appointments = (props) => {
  const [suggestions, setSuggestions] = useState([]);

  ///FETCHING ALL SUGGESTIONS FROM DATABASE
  useEffect(() => {
    db.collection(
      `lawyers/${props.lawyerUID}/clients/${props.clientUID}/suggestions`
    )
      .orderBy("sentAt", "desc")
      .onSnapshot((snapshot) => {
        setSuggestions(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <>
      {suggestions.map((suggestion) => {
        if (suggestion.appointmentID === props.appointmentID)
          return <Typography>{suggestion.suggestion}</Typography>;
      })}
    </>
  );
};

export default Appointments;
