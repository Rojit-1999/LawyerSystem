import React, { useState, useEffect } from "react";
import { db } from "../../Firebase";
import { useAuth } from "../../contexts/AuthContext";
import { format } from "date-fns";

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
import ChatIcon from "@mui/icons-material/Chat";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";

const StyledBox = styled(Box)({
  position: "fixed",
  bottom: 0,
  width: "100%",
  boxShadow: "0px -4px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  padding: "16px",
});

const Chat = (props) => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useAuth();
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();

    //PUSHING MESSAGE IN DATABASE
    db.collection("meetings")
      .doc(`${props.meetingID}`)
      .collection("chats")
      .add({
        message: message,
        senderEmail: currentUser.email,
        senderUid: currentUser.uid,
        sentAt: new Date(),
      });

    setMessage("");
  };

  //FUNCTIONS TO OPEN AND CLOSE DIALOG BOX
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //FETCHING ALL MESSAGES FROM DATABASE
  useEffect(() => {
    db.collection(`meetings/${props.meetingID}/chats`)
      .orderBy("sentAt", "asc")
      .onSnapshot((snapshot) => {
        setChats(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
  }, [`${props.meetingID}`]);
  

  return (
    <>
      {/* CHAT BUTTON */}

      <Tooltip title="Chat" placement="top">
        <IconButton onClick={handleClickOpen} style={{ color: "#ffffff" }}>
          <ChatIcon />
        </IconButton>
      </Tooltip>

      {/* CHAT DIALOG BOX */}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title">CHAT</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <List>
              {chats.map((chat) => {
                return (
                  <ListItem
                  key={chat.id}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems:
                      chat.senderUid === currentUser.uid ? "flex-end" : "flex-start",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      display: chat.senderUid === currentUser.uid ? "none" : "none",
                      marginRight: "8px",
                    }}
                  >
                    {chat.senderEmail}
                  </Typography>
                  <Box
                    sx={{
                      borderRadius: 8,
                      bgcolor: chat.senderUid === currentUser.uid ? "primary.main" : "#f2f2f2",
                      color: chat.senderUid === currentUser.uid ? "#fff" : "#000",
                      padding: "8px 12px",
                      marginTop: "4px",
                      maxWidth: "60%",
                    }}
                  >
                    <Typography variant="body2">{chat.message}</Typography>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      align={chat.senderUid === currentUser.uid ? "right" : "left"}
                    >
                      {/* {format(chat.sentAt.toDate(), "h:mm a")} */}
                    </Typography>
                  </Box>
                </ListItem>
                );
              })}
            </List>
          </DialogContentText>

          {/* FORM TO SEND MESSAGE */}

          <form onSubmit={sendMessage}>
  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
    <TextField
      id="filled-basic"
      color="primary"
      placeholder="Enter message..."
      value={message}
      onChange={(e) => {
        setMessage(e.target.value);
      }}
      fullWidth
      autoFocus
      sx={{ mr: 1 }}
    />
    <Button type="submit" startIcon={<SendIcon />} />
  </Box>
</form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Chat;