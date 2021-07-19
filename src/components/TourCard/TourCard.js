import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles((theme) => ({
  mainCard: {
    display: "flex",
    padding: "0 20px",
    marginBottom: "35px",
    marginLeft: "0",
    marginRight: "0",
    flex: "0 1 calc(100% / 3)",
    width: "calc(100% / 3)",
    [theme.breakpoints.down(1024)]: {
      width: "calc(100% / 2)",
      flex: "0 1 calc(100% / 2)",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    [theme.breakpoints.down(640)]: {
      width: "calc(100% / 1)",
      flex: "0 1 calc(100% / 1)",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  title: {
    width: "100%",
    margin: "0 0 22px",
    transition: "all .2s ease",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    border: "1px solid #d8d8d8",
    transition: "box-shadow .2s ease,border-color .2s ease",
    cursor: "pointer",
    paddingBottom: "25px",
    "&:hover": {
      boxShadow: "0 32px 50px 0 rgb(0 0 0 / 10%)",
      "& $title": {
        color: theme.palette.common.lightBrown,
      },
    },
  },
  viewTours: {
    color: theme.palette.common.lightBrown,
  },
  tourItem: {
    minHeight: "15vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50%",
    position: "relative",
    [theme.breakpoints.down(1023)]: {
      minHeight: "240px",
    },
  },
  tourPrice: {
    right: 0,
    top: 0,
    width: "90px",
    height: "75px",
    backgroundColor: theme.palette.common.lightBrown,
    color: theme.palette.common.white,
    position: "absolute",
    textAlign: "center",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 5px 13px 0 rgb(0 0 0 / 10%)",
  },
  tourDetails: {
    flex: "1",
    position: "relative",
    paddingBottom: "83px",
    padding: "31.2px 23.4px",
  },
  tourStats: {
    position: "absolute",
    bottom: "15px",
    width: "calc(100% - 32px)",
    left: 0,
    right: 0,
    margin: "auto",
    padding: "0 15.6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export const TourCard = ({
  id,
  title,
  description,
  duration,
  max,
  price,
  picture,
  path,
  href,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Link href="/[path]/[tour]" as={`/${path}/${href}`}>
      <Container
        maxWidth={false}
        className={classes.mainCard}
        {...rest}
        disableGutters
      >
        <div className={classes.detailsContainer}>
          <Container maxWidth={false} disableGutters>
            <Container
              maxWidth={false}
              style={{
                backgroundImage: `url(${picture})`,
                backgroundSize: "cover",
              }}
              className={classes.tourItem}
              disableGutters
            >
              <div className={classes.tourPrice}>
                <Typography variant="h6">{price}</Typography>
              </div>
            </Container>
          </Container>
          <Container
            maxWidth={false}
            disableGutters
            className={classes.tourDetails}
          >
            <Link href="/[path]/[tour]" as={`/${path}/${href}`}>
              <Typography className={classes.title} variant="h5">
                {title}
              </Typography>
            </Link>
            <Typography variant="body1" component="p">
              {description}
            </Typography>
            <Container
              maxWidth={false}
              disableGutters
              className={classes.tourStats}
            >
              <Typography variant="body2">
                <AccessTimeIcon
                  style={{ verticalAlign: "middle", marginRight: "12px" }}
                />
                {duration}
              </Typography>
              <Typography variant="body2">
                <GroupIcon
                  style={{ verticalAlign: "middle", marginRight: "12px" }}
                />
                {max}
              </Typography>
            </Container>
          </Container>
        </div>
      </Container>
    </Link>
  );
};
