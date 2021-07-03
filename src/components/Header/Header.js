import React, { useState } from "react";
import { Typography, AppBar, Toolbar, Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
    [theme.breakpoints.up("md")]: {
      padding: "0 15px",
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
    left: "25%",
    width: "50%",
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

const Header = ({ children, ...rest }) => {
  const { links } = rest;
  console.log(rest);
  const classes = useStyles();
  const router = useRouter();

  return (
    <Box
      style={{ top: "0px", margin: "auto 0" }}
      className={classes.headerInner}
    >
      <Container className={classes.container}>
        <Box
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
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
          <SearchIcon
            style={{ position: "absolute" }}
            className={classes.icon}
          />
        </Box>
      </Container>
      <Container disableGutters style={{ marginTop: "10px" }}>
        <Box style={{ padding: "0 15px" }}>
          <Box style={{ paddingBottom: "15px" }}>
            <nav className={classes.bottomNav}>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {links.map((link) => (
                  <li
                    className={classes.listItem}
                    style={{
                      display: "inline-block",
                      position: "relative",
                      padding: "0 12px",
                    }}
                    key={link.id}
                  >
                    <Link href={link.href} passHref>
                      <Typography
                        className={`${classes.headerLink} ${
                          router.pathname === link.href
                            ? "active"
                            : "hover-underline"
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
                  </li>
                ))}
              </ul>
            </nav>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default withScroll(Header);
