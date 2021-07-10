import { Container, Typography, Avatar, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    display: "flex",
    padding: "30px",
    justifyContent: "space-evenly",
    border: "1px solid gray",

    "&:hover": {
      boxShadow: "0 32px 50px 0 rgb(0 0 0 / 10%)",
			cursor: "pointer",
      border: "none",
      "& $title": {
        color: theme.palette.common.lightBrown,
      },
    },
  },
  largePicture: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  title: {

  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  viewTours: {
    color: theme.palette.common.lightBrown,
  },
}));

export const ListCard = ({ title, picture, href, ...rest }) => {
  const classes = useStyles();

  return (
    <Link href={href}>
      <Container maxWidth="sm" className={classes.mainCard}>
        <Avatar className={classes.largePicture} alt={title} src={picture} />
        <div className={classes.detailsContainer}>
          <Typography className={classes.title} variant="h5">
            {title}
          </Typography>
          <Typography className={classes.viewTours} variant="body1">
            View Tours
          </Typography>
        </div>
      </Container>
    </Link>
  );
};
