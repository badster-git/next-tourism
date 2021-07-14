import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import { TourCard } from "../TourCard/TourCard";

const useStyles = makeStyles((theme) => ({
  tourListSection: {
    paddingBottom: 0,
    padding: "78px 0",
    borderBottom: "1px solid #d8d8d8",
  },
  tourListTitle: {
    textAlign: "center",
    width: "88%",
    [theme.breakpoints.down(1024)]: {
      width: "100%",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
  },
  tourListData: {
    paddingTop: "3em",
    width: "88%",
    margin: "0 auto",
    [theme.breakpoints.down(1024)]: {
      width: "100%",
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    [theme.breakpoints.down(640)]: {
      paddingLeft: "0",
      paddingRight: "0",
    },
  },
  tourListItems: {
    display: "flex",
    margin: "0 -11px",
    justifyContent: "center",
    flexFlow: "row wrap",
    alignItems: "stretch",
    [theme.breakpoints.down(1024)]: {
      flexFlow: "row wrap",
      margin: "0 auto",
    },
  },
  icon: {
    height: "75px",
    width: "75px",
    color: theme.palette.common.lightBrown,
  },
}));

export const TourContainer = ({ data }) => {
  const classes = useStyles();

  return (
    <Container maxWidth={false} disableGutters>
      {data.map((item) => (
        <Container
          id={item.id}
          key={item.id}
          className={classes.tourListSection}
          maxWidth={false}
          disableGutters
        >
          <Container
            maxWidth={false}
            style={{ padding: 0, width: "100%" }}
            disableGutters
          >
            <Container
              maxWidth={false}
              className={classes.tourListTitle}
              disableGutters
            >
              <FavoriteBorderIcon className={classes.icon} />
              <Typography
                variant="h4"
                style={{ marginTop: "28px", marginBottom: "20px" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" component="p">
                {item.subtitle}
              </Typography>
            </Container>
            <Container
              maxWidth={false}
              className={classes.tourListData}
              disableGutters
            >
              <Container
                maxWidth={false}
                className={classes.tourListItems}
                disableGutters
              >
                {item.tours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    id={tour.id}
                    title={tour.title}
                    description={tour.description}
                    duration={tour.duration}
                    max={tour.max}
                    price={tour.price}
                    picture={tour.picture}
                    href={tour.href}
                  />
                ))}
              </Container>
            </Container>
          </Container>
        </Container>
      ))}
    </Container>
  );
};
