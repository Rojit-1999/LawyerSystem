import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const ViewProfile = (props) => {
  return (
    <div>
      {/* VIEW CLIENT PROFILE BUTTON */}

      <Tooltip title="View Client Profile" placement="top">
        <IconButton
          target="_blank"
          href={`/clientprofile/${props.clientUID}`}
          style={{ color: "#ffffff" }}
        >
          <PersonIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default ViewProfile;
