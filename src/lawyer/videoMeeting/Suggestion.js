import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { useAuth } from "../../contexts/AuthContext";
import {
  Box,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  Typography,
  Divider,
  Tooltip,
} from "@mui/material";
import MedicationIcon from "@mui/icons-material/Medication";
import SendIcon from "@mui/icons-material/Send";


const Suggestion = (props) => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const [lawyers, setLawyers] = useState([]);
  const [clients, setClients] = useState([]);
  const [suggestion, setSuggestion] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  var lawyerName = "";
  var lawyerSpeciality = "";
  var clientName = "";
  var clientAge = "";
  var clientGender = "";

  var date = new Date().toLocaleDateString("en-US");



  // FETCH Lawyer'S DATA FROM DB
  useEffect(() => {
    db.collection("lawyers").onSnapshot((snapshot) => {
      setLawyers(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // FETCH Client'S DATA FROM DB
  useEffect(() => {
    db.collection("clients").onSnapshot((snapshot) => {
      setClients(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  //FETCHING ALL SuggestionS FROM DATABASE
  useEffect(() => {
    db.collection(
      `lawyers/${props.lawyerUID}/clients/${props.clientUID}/suggestions`
    )
      .orderBy("sentAt", "asc")
      .onSnapshot((snapshot) => {
        setSuggestions(snapshot.docs.map((doc) => doc.data()));
      });
  }, [props.meetingID]);

  {
    lawyers.map((lawyer) => {
      if (lawyer.uid === props.lawyerUID) {
        lawyerName = lawyer.name;
        lawyerSpeciality = lawyer.lawSpeciality;
      }
    });
  }

  {
    clients.map((client) => {
      if (client.uid === props.clientUID) {
        clientName = client.name;
        clientAge = client.age;
        clientGender = client.gender;
      }
    });
  }

  //FUNCTIONS TO OPEN AND CLOSE DIALOG BOX
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //SEND Suggestion FUNCTION
  const sendSuggestion = (e) => {
    e.preventDefault();

    //PUSHING MESSAGE IN DATABASE
    db.collection("lawyers")
      .doc(`${props.lawyerUID}`)
      .collection("clients")
      .doc(`${props.clientUID}`)
      .collection("suggestions")
      .add({
        suggestion: suggestion,
        senderUid: props.lawyerUID,
        senderEmail: currentUser.email,
        sentAt: new Date(),
        appointmentID: props.meetingID,
      });

    setSuggestion("");
  };



  return (
    <div>
      {/* Suggestion BUTTON */}

      <Tooltip title="Suggestion" placement="top">
        <IconButton onClick={handleClickOpen} style={{ color: "#ffffff" }}>
          <MedicationIcon />
        </IconButton>
      </Tooltip>

      {/* Suggestion DIALOG BOX */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
       
        maxHeight="sm"
      >
        <DialogTitle id="form-dialog-title">SUGGESTION</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <List>

              {suggestions.map((prescript) => {
                if (prescript.appointmentID === props.meetingID)
                  return (
                    <>
                      <ListItem style={{ margin: "0", display: "flex", justifyContent: "justify" }}>
                        <Typography
                          sx={{
                            maxWidth: "70%",
                            backgroundColor: "#f3f3f3",
                            borderRadius: "15px",
                            padding: "10px",
                            wordWrap: "break-word",
                            textAlign: "center",
                          }}
                        >
                          {prescript.suggestion}
                        </Typography>
                      </ListItem>

                    </>
                  );
              })}
            </List>
          </DialogContentText>

          {/* FORM TO WRITE Suggestion */}

          <form onSubmit={sendSuggestion}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
    <TextField
      id="filled-basic"
      color="primary"
      placeholder="Enter suggestion..."
      value={suggestion}
      onChange={(e) => {
        setSuggestion(e.target.value);
      }}
      fullWidth
      required
      autoFocus
      sx={{ mr: 1 }}
    />
    <Button type="submit" startIcon={<SendIcon />} />
  </Box>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" className="close-button">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Suggestion;