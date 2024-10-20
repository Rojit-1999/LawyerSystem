import * as React from "react";
import { useHistory, Link } from "react-router-dom";
import firebase from "../Firebase";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Tooltip,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Divider,
  IconButton,
  Typography,
  List,
  Toolbar,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import GavelIcon from '@mui/icons-material/Gavel';
import PostAddIcon from "@mui/icons-material/PostAdd";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LogoutIcon from "@mui/icons-material/Logout";
import favicon from '../assets/favicon.png';

const Navbar = () => {
  const history = useHistory();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // OPEN AND CLOSE DRAWER FUNCTIONS
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // SIGN OUT FUNCTION
  const handleSignout = () => {
    firebase.auth().signOut();
    history.push("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* APPBAR */}
      <AppBar position="fixed" open={open} sx={{ backgroundColor: "#000300", color: "#00FFFF"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{display: "flex", justifyContent: "space-between"}}>
          <img src={favicon} className="w-20 pt-8 hover:scale-105 duration-300 cursor-pointer mx-auto mt-[-2.8rem] bg-transparent" alt='Logo' />
          <Typography variant="h6" noWrap component="div">
            Hamrowakil (Admin)
          </Typography></div>
        </Toolbar>
      </AppBar>

      {/* LEFT DRAWER */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* LIST OF NAVIGATIONS */}
        <List>
          {/* DASHBOARD */}
          <Link to="/admin/dashboard">
          <ListItem button component="a" href="/admin/dashboard">
            <Tooltip title="Dashboard" placement="right">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>
          </Link>

          {/* PROFILE */}
          <Link to="/lawyers">
          <ListItem button component="a" href="/lawyers">
            <Tooltip title="Lawyers" placement="right">
              <ListItemIcon>
                <GavelIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Lawyers</ListItemText>
          </ListItem>
          </Link>

          {/* YOUR PATIENTS */}
          <Link to="/clients">
          <ListItem button component="a" href="/clients">
            <Tooltip title="Clients" placement="right">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Clients</ListItemText>
          </ListItem>
          </Link>

          {/* CREATE POST */}
          <Link to="/createpost">
          <ListItem button component="a" href="/createpost">
            <Tooltip title="Create Post" placement="right">
              <ListItemIcon>
                <PostAddIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Create Post</ListItemText>
          </ListItem>
          </Link>

          {/* LATEST UPDATES */}
          <Link to="/latestupdates">
          <ListItem button component="a" href="/latestupdates">
            <Tooltip title="Latest Updates" placement="right">
              <ListItemIcon>
                <NewspaperIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Latest Updates</ListItemText>
          </ListItem>
          </Link>

          {/* NOTIFICATIONS */}
          {/* <Link to="/notifications">
          <ListItem button component="a" href="/notifications">
            <Tooltip title="Notifications" placement="right">
              <ListItemIcon>
                <NotificationsIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Notifications</ListItemText>
          </ListItem>
          </Link> */}

          {/* READ FEEDBACKS */}
          <Link to="/feedbacks">
          <ListItem button component="a" href="/feedbacks">
            <Tooltip title="Read Feedbacks" placement="right">
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Read Feedbacks</ListItemText>
          </ListItem>
          </Link>

          {/* SIGN OUT */}
          <ListItem button onClick={handleSignout}>
            <Tooltip title="Sign Out" placement="right">
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
            </Tooltip>
            <ListItemText>Sign Out</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;

const drawerWidth = 240;

// OPENED DRAWER STYLING
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

// CLOSED DRAWER STYLING
const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

// DRAWER HEADER STYLING
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// APPBAR STYLING
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// DRAWER STYLING
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
