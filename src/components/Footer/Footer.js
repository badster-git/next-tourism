import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import { NewsletterForm } from "../NewsletterForm/NewsletterForm";
import { FOOTER_LINKS_UPPER } from "../../../data/FOOTER_LINKS";

const useStyles = makeStyles((theme) => ({
  upperFooter: {
    padding: "70px 98px 60px",
    display: "flex",
    alignItems: "flex-start",
    backgroundColor: theme.palette.common.gray,
    [theme.breakpoints.down(1490)]: {
      padding: "80px 5px 30px",
    },
    [theme.breakpoints.down(1024)]: {
      flexDirection: "column-reverse",
      padding: "70px 98px 60px",
    },
    [theme.breakpoints.down(860)]: {
      padding: "70px 28px 60px",
    },
    [theme.breakpoints.down(640)]: {
      padding: "70px 8px 60px",
    },
  },
  links: {
    display: "flex",
    marginTop: "-3px",
    [theme.breakpoints.down(1024)]: {
      justifyContent: "space-between",
      marginTop: "30px",
    },
  },
  footerLink: {
    textDecoration: "none",
    color: theme.palette.common.white,
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
  footerNewsletter: {
    marginLeft: "auto",
    width: "600px",
    [theme.breakpoints.down(1024)]: {
      width: "100%",
    },
    [theme.breakpoints.down(640)]: {
      padding: "0",
    },
  },
  linkColumn: {
    [theme.breakpoints.down(1240)]: {
      paddingLeft: "3px",
    },
  },
}));

export const Footer = () => {
  const classes = useStyles();
  const upperData = FOOTER_LINKS_UPPER;

  /**
   * Number of columns in the footer, each column will hold 3 links.
   * The data inside of upperData contains a col property that assigns
   * each link to the correct column.
   */
  const cols = [1, 2, 3];

  return (
    <footer>
      <Container maxWidth={false} className={classes.upperFooter}>
        <Container maxWidth={false} className={classes.links}>
          {/** Iterates through an array to set up 3
           * separate <ul> elements. The logic to create 3 list elements
           * that contain 3 links each.
           */}
          {cols.map((col) => (
            // Sets up the list elements for each column
            <ul
              key={col}
              className={classes.linkColumn}
              style={{ marginRight: "27px", listStyle: "none" }}
            >
              {upperData
                .filter((link) => link.col === col)
                .map((col_link) => (
                  <li key={col_link.id} style={{ marginBottom: "19px" }}>
                    {/* Filters each link to display them in correct column */}
                    <Link href={col_link.href}>
                      <Typography className={classes.footerLink}>
                        {col_link.title}
                      </Typography>
                    </Link>
                  </li>
                ))}
            </ul>
          ))}
        </Container>
        <Container maxWidth={false} className={classes.footerNewsletter}>
          <NewsletterForm />
        </Container>
      </Container>
    </footer>
  );
};
