import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import * as React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "../../images/logo.svg";
import "./Header.css";

// navbar
function Navigation(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: 3, px: 2 }}>
      {/* mobile menu  */}
      <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <NavHashLink smooth="true" className="nav-link" to="/home#about">
          About
        </NavHashLink>

        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#prizes">
          Prizes{" "}
        </NavHashLink>
        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#rules">
          Rules
        </NavHashLink>
        <Divider />

        <Divider />
        <NavHashLink smooth="true" className="nav-link" to="/home#leaderBoard">
          Leader board
        </NavHashLink>

        <Divider />

        <NavHashLink smooth="true" className="nav-link" to="/home#how">
          How
        </NavHashLink>

        <Divider />
      </nav>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="inherit"
        sx={{ bgcolor: "rgba(29, 29, 55, 0.7)", boxShadow: 2, py: 1 }}
      >
        <Toolbar>
          {/* desktop menu  */}
          <Container>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to="/">
                <img className="logo" src={logo} alt="" />
              </Link>

              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <nav
                  className="navbar"
                  style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#about"
                  >
                    About
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#prizes"
                  >
                    Prizes
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#rules"
                  >
                    Rules
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#leaderBoard"
                  >
                    Leader board
                  </NavHashLink>

                  <NavHashLink
                    smooth="true"
                    className="nav-link"
                    to="/home#how"
                  >
                    How
                  </NavHashLink>
                  <Button
                    sx={{
                      backgroundColor:
                        "linear-gradient(270deg, #885BFF 0.19%, #5977D6 100%)",
                      borderRadius: 50,
                      marginLeft: 3,
                      textTransform: "inherit",
                    }}
                    variant="contained"
                  >
                    Back to GEMS
                  </Button>
                </nav>
              </Box>
            </Box>
          </Container>
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            color="info"
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "70%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navigation.propTypes = {
  window: PropTypes.func,
};

export default Navigation;
