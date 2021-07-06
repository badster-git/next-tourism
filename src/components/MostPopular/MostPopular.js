import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { CustomImgGrid } from "../CustomImgGrid/CustomImgGrid";
import { MOST_POPULAR_LINKS } from "../../../data/HOMEPAGE_LINKS";

const useStyles = makeStyles((theme) => ({
  containerWrap: {
    padding: "80px 10px",
    margin: "0 auto",
    borderBottom: "1px solid #ececec"
  },
  mostPopularContainer: {
    width: "88%",
    margin: "0 auto",
    padding: "0 15px",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "1140px",
    },
    [theme.breakpoints.down(576)]: {
      width: "100%",
      padding: "0",
    },
  },
  mostPopularTitle: {
    textAlign: "center",
    marginBottom: "80px",
  },
  mostPopularDesc: {
    lineHeight: "1.3",
    color: "#443d47",
    letterSpacing: ".03em",
    fontSize: "22px",
    fontWeight: 300,
    marginTop: "10px",
  },
  locationIcon: {
    color: theme.palette.common.lightBrown,
    marginBottom: "22px",
    overflow: "hidden",
  },
}));

export const MostPopular = ({ children, ...rest }) => {
  const locations = MOST_POPULAR_LINKS;
  const classes = useStyles();
  return (
    <Container maxWidth={false} disableGutters className={classes.containerWrap}>
      <Container maxWidth={false} disableGutters className={classes.mostPopularContainer}>
        <div className={classes.mostPopularTitle}>
          <LocationOnOutlinedIcon
            className={classes.locationIcon}
            style={{ width: "70px", height: "70px" }}
          />
          <Typography
            variant="h3"
            component="h1"
            style={{ fontWeight: 400, marginTop: "28px", marginBottom: "20px" }}
          >
            Most Popular Destinations
          </Typography>
          <Typography variant="subtitle1" className={classes.mostPopularDesc}>
            Wherever you&apos;re headed, we&apos;ve got you covered. These are
            just a few of our users favorite places to visit with us!
          </Typography>
        </div>
        <CustomImgGrid locations={locations} />
      </Container>
    </Container>
  );
};
