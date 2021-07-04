import { Container, Box, makeStyles, Typography } from "@material-ui/core";
import travelPicture from "../../../public/backgrounds/index-top.jpg";
import { CustomButton } from "../CustomButton/CustomButton";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: "linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3))",
    padding: "0 12px",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textShadow: "0 0 10px #202020",
    [theme.breakpoints.up("ml")]: {
      minHeight: "84vh",
    },
    [theme.breakpoints.down(1024)]: {
      padding: "35px 10px",
    },
  },
  backgroundInner: {
    textAlign: "center",
    padding: "2em",
  },
  backgroundMain: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(backgrounds/index-top.jpg)`,
  },
}));

export const IndexTop = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <Box>
      <Container maxWidth="xl" disableGutters>
        <Box className={classes.backgroundMain}>
          <Box className={classes.background}>
            <Box className={classes.backgroundInner}>
              <Box style={{ maxWidth: "45em" }}>
                <Typography
                  variant="h2"
                  color="primary"
                  style={{
                    fontWeight: 500,
                    letterSpacing: "1.75px",
                    lineHeight: "1.2",
                  }}
                >
                  Discover the World
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="primary"
                  style={{ fontWeight: 200, letterSpacing: "1.25px" }}
                  paragraph
                >
                  Beautifully designed tours in cities across the globe.
                </Typography>
                <Box
                  style={{
                    position: "relative",
                    width: "320px",
                    margin: "auto",
                  }}
                >
                  <CustomButton title="View Top Attractions" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
