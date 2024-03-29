import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { useEffect, useState } from "react";
import { LinkNav, NavMobile } from "./Header.styled";
import { Link } from "react-router-dom";
import { ShopIcon } from "../ShopIcon/ShopIcon";

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [goods, setGoods] = useState([]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{ marginBottom: "98px" }}
      color="secondary"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <SmartphoneIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Link>

          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",

              textDecoration: "none",
            }}
            color="text"
          >
            <Link to="/">Phone Store</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem>
                <Typography textAlign="center" color="text">
                  <NavMobile to="/phones">Products</NavMobile>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" color="text">
                  <NavMobile to="favorites">Favorites</NavMobile>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" color="text">
                  <NavMobile to="about">About</NavMobile>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <SmartphoneIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "text",
              textDecoration: "none",
            }}
            color="text"
          >
            <Link to="/">Phone Store</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <LinkNav to="/phones">Products</LinkNav>

            <LinkNav to="favorites">Favorites</LinkNav>

            <LinkNav to="about">About</LinkNav>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Link to="/cart">
              <ShopIcon goods={goods} />
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
