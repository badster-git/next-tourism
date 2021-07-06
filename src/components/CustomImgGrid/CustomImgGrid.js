import Link from "next/link";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  places: {
    display: "flex",
    marginBottom: "20px",
    flexDirection: "column",
    [theme.breakpoints.up(1024)]: {
      flexFlow: "row wrap",
    },
  },
  place: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "10px",
    minHeight: "380px",
    cursor: "pointer",
    overflow: "hidden",
    "&:last-child": {
      marginRight: 0,
    },
    [theme.breakpoints.up(1024)]: {
      marginRight: "20px",
    },
    [theme.breakpoints.down(1440)]: {
      minHeight: "350px",
      marginBottom: "15px",
    },
  },
  placeSecond: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    padding: "10px",
    minHeight: "280px",
    cursor: "pointer",
    overflow: "hidden",
    "&:last-child": {
      marginRight: 0,
    },
    [theme.breakpoints.up(1024)]: {
      marginRight: "20px",
    },
    [theme.breakpoints.down(1440)]: {
      marginBottom: "15px",
      minHeight: "250px",
    },
  },
  placeImg: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
    transition: "transform .94s cubic-bezier(.07,1.13,.68,.94)",
    "&:hover": {
      transform: "scale(1.08) rotate(-.3deg)",
    },
  },
}));

export const CustomImgGrid = ({ children, locations, ...rest }) => {
  const classes = useStyles();
  return (
    <div>
      {/** First Row of Destinations */}
      <div className={classes.places}>
        {locations
          .filter((location) => location.size === "big")
          .map((bigLocation) => (
            <Link href={bigLocation.href} passHref key={bigLocation.id}>
              <>
                <div className={classes.place}>
                  <div
                    className={classes.placeImg}
                    style={{
                      backgroundImage: `url(${bigLocation.picture})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      className={classes.placeImg}
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1))",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      textShadow: "0 0 10px #202020",
                      pointerEvents: "none",
                    }}
                  >
                    <Typography variant="h3" component="h1" color="primary">
                      {bigLocation.title}
                    </Typography>
                  </div>
                </div>
              </>
            </Link>
          ))}
      </div>

      {/** Second Row of Destinations */}
      <div className={classes.places}>
        {locations
          .filter((location) => location.size === "small")
          .map((smallLocation) => (
            <Link href={smallLocation.href} passHref key={smallLocation.id}>
              <>
                <div className={classes.placeSecond}>
                  <div
                    className={classes.placeImg}
                    style={{
                      backgroundImage: `url(${smallLocation.picture})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      className={classes.placeImg}
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.1))",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      textShadow: "0 0 10px #202020",
                      pointerEvents: "none"
                    }}
                  >
                    <Typography variant="h3" component="h1" color="primary">
                      {smallLocation.title}
                    </Typography>
                  </div>
                </div>
              </>
            </Link>
          ))}
      </div>
    </div>
  );
};
