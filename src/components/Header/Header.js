import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Typography, Container, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";
import withScroll from "../../../hoc/withScroll.hoc.js";
import logo from "../../../public/logo/logo.png";

const useStyles = makeStyles((theme) => ({
  headerInner: {
    left: "0",
    width: "100%",
    background: theme.palette.common.white,
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
    color: theme.palette.common.black,
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
    bottom: -4,
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
  // CustomSearchbar
  btnSearch: {
    backgroundColor: "transparent",
  },
}));

const validateSchema = yup.object({
  search: yup
    .string("Enter an item to search")
});

const CustomSearchbar = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values, actions) => {
      console.log(values);
    },
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <form onSubmit={formik.handleSubmit} method="post">
        <SearchIcon style={{ position: "absolute" }} className={classes.icon} />
        <TextField
          id="search"
          type="text"
          name="search"
          label="Search"
          variant="filled"
          color="secondary"
          value={formik.values.search}
          onChange={formik.handleChange}
          error={formik.touched.search && Boolean(formik.errors.search)}
          helperText={formik.touched.search && formik.errors.search}
        />
      </form>
    </div>
  );
};

const Header = ({ children, ...rest }) => {
  const { links } = rest;
  const classes = useStyles();
  const router = useRouter();

  return (
    <div
      style={{ top: "0px", margin: "auto 0" }}
      className={classes.headerInner}
    >
      <Container className={classes.container}>
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={logo} alt="Logo of site" width={310} height={88} />
          </div>
        </div>
        <CustomSearchbar />
      </Container>
      <Container disableGutters style={{ marginTop: "10px" }}>
        <div style={{ padding: "0 15px" }}>
          <div style={{ paddingBottom: "15px" }}>
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
                    <Link href={link.href}>
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
                          <span className={classes.borderBottom}></span>
                        ) : (
                          ""
                        )}
                      </Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default withScroll(Header);
