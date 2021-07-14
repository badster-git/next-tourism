import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import { CustomTabMenu } from "../CustomTabMenu/CustomTabMenu";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "180px",
  },
  innerContainer: {
    width: "88%",
  },
  cityToursHeader: {
    display: "block",
    paddingTop: "60px",
    textAlign: "center",
    borderBottom: "1px solid #dbe0e6",
  },
  tourTitle: {
    display: "flex",
    alignItems: "center",
    paddingTop: "60px",
    transition: "padding-top .2s ease",
  },
  cityTourTabs: {
    marginTop: "30px",
    transition: "margin-top .2s ease",
    display: "flex",
    alignItems: "center",
  },
}));

export const TourTop = ({ title, menu, ...rest }) => {
  const classes = useStyles();

  return (
    <Container
      disableGutters
      maxWidth={false}
      className={classes.mainContainer}
    >
      <Container maxWidth={false} className={classes.cityToursHeader}>
        <Container maxWidth={false} className={classes.innerContainer}>
          <Container maxWidth={false} className={classes.tourTitle}>
            <Typography variant="h4" component="h3">
              {title}
            </Typography>
          </Container>
          <Container maxWidth={false} className={classes.cityTourTabs}>
            <CustomTabMenu menu={menu} />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
