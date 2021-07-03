import React, { useState } from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  Box,
  Dialog,
  ListItem,
  List,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Hamburger from "hamburger-react";
import SearchIcon from "@material-ui/icons/Search";
import withScroll from "../../../hoc/withScroll.hoc.js";
import logo from "../../../public/logo/logo.png";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.common.white,
    boxShadow: "none",
    padding: "25px",
    [theme.breakpoints.up("ml")]: {
      background: theme.palette.common.primary,
    },
  },
  headerInner: {
    position: "fixed",
    left: "0",
    width: "100%",
  },
  container: {
    display: "flex",
    padding: "0 15px",
    [theme.breakpoints.down(469)]: {
      flexWrap: "wrap",
      justifyContent: "center",
    },
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    [theme.breakpoints.down(469)]: {
      justifyContent: "center",
    },
  },
  bottomNav: {
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    padding: "8px",
  },
  headerLink: {
    textDecoration: "none",
    "&.active": {
      color: theme.palette.common.lightBrown,
    },
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.common.lightBrown,
      transition:
        "background .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out",
    },
  },
  borderBottom: {
    borderBottom: `2px solid ${theme.palette.common.lightBrown}`,
    position: "absolute",
    bottom: 0,
    left: "45%",
    width: "10%",
  },
  icon: {
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.common.lightBrown,
      transition:
        "background .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out",
    },
  },
}));

const SimpleDialog = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open, router, links } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth
      className={classes.mobileMenu}
    >
      <List>
        {links.map((link) => (
          <ListItem
            button
            alignItems="center"
            onClick={() => handleListItemClick(link.href)}
            key={link.id}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <Link href={link.href} passHref>
              <Typography
                className={`${classes.headerLink} ${
                  router.pathname === link.href ? "active" : "hover-underline"
                }`}
                style={{ fontWeight: "600" }}
                variant="body1"
              >
                {link.title}
                {router.pathname === link.href ? (
                  <Box className={classes.borderBottom}></Box>
                ) : (
                  ""
                )}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

const MobileHeader = ({ children, ...rest }) => {
  const classes = useStyles();
  const { links } = rest;
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(router.pathname);

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Box
      style={{ top: "0px", margin: "auto 0" }}
      className={classes.headerInner}
    >
      <Container className={classes.container}>
        <Box className={classes.imageContainer}>
          <Box
            style={{
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <Link href="/" passHref>
              <Image src={logo} alt="Logo of site" width={310} height={88} />
            </Link>
          </Box>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon className={classes.icon} />
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              hideOutline={true}
              distance="sm"
              size={22}
            />
          </Box>
        </Box>
      </Container>
      <SimpleDialog
        selectedValue={selectedValue}
        open={isOpen}
        onClose={handleClose}
        router={router}
        links={links}
      />
    </Box>
  );
};

export default withScroll(MobileHeader);
