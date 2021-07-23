import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import { CustomBreadcrumbs } from "../CustomBreadcrumbs/CustomBreadcrumbs";
import { TourInfoTop } from "../TourInfoTop/TourInfoTop";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    position: "relative",
    justifyContent: "space-around",
  },
  mainTourInfoContainer: {
    marginTop: "120px",
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative",
    [theme.breakpoints.up(1250)]: {
      maxWidth: "1280px",
    },
    [theme.breakpoints.up(640)]: {
      marginTop: "180px",
      lineHeight: "1.4",
    },
  },
}));

export const TourProductInfo = ({ tour }) => {
  const classes = useStyles();
  const tourName = tour.root.split("-").reduce((acc, cv, idx) => {
    let name = (acc += cv.charAt(0).toUpperCase() + cv.slice(1));
    idx !== tour.root.length - 1 ? (name += " ") : (name += "");
    return name;
  }, "");

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={classes.mainContainer}
    >
      <Container
        maxWidth={false}
        disableGutters
        className={classes.mainTourInfoContainer}
      >
        <CustomBreadcrumbs
          path={"/[path]"}
          root={`/${tour.root}`}
          handleClick={handleClick}
          name={tourName}
          title={tour.title}
        />
        <Container maxWidth={false} disableGutters>
          <TourInfoTop
            title={tour.title}
            duration={tour.duration}
            max={tour.max}
            picture={tour.picture}
            why={tour.why}
            descriptionTitle={tour.descriptionTitle}
            tourDescription={tour.tourDescription}
          />
        </Container>
      </Container>
    </Container>
  );
};
