import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { CustomSearch } from "../CustomSearch/CustomSearch";
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
}));

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
        <CustomSearch />
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
