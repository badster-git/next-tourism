import { Container, Typography } from "@material-ui/core";
import { CustomTabs } from "../CustomTabs/CustomTabs";
import { makeStyles, useTheme } from "@material-ui/core";
import { Footsteps } from "@styled-icons/ionicons-outline";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down(1200)]: {
      maxWidth: "1140px",
    },
    [theme.breakpoints.down(576)]: {
      width: "100%",
      padding: "0",
    },
  },
  aboutInnerContainer: {
    [theme.breakpoints.down(576)]: {
      width: "100%",
      padding: "0",
    },
  },
  footIcon: {
    color: theme.palette.common.lightBrown,
    marginBottom: "22px",
  },
  aboutHeading: {
    marginTop: "28px",
    marginBottom: "20px",
    fontWeight: "400",
  },
}));

export const AboutIndex = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <section>
      <Container maxWidth={false} className={classes.aboutContainer}>
        <Container className={classes.aboutInnerContainer} style={{ textAlign: "center", marginBottom: "80px" }}>
          <Footsteps
            className={classes.footIcon}
            style={{ width: "60px", height: "60px" }}
          />
          <Typography
            variant="h4"
            component="h1"
            className={classes.aboutHeading}
          >
            Take Walks with Confidence
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: 400,
              color: theme.palette.common.blue,
              marginBottom: "8px",
            }}
          >
            OUR PROMISE TO YOU
          </Typography>
          <Typography
            variant="body1"
            compoonent="p"
            style={{
              lineHeight: 1.3,
              color: theme.palette.common.gray,
              letterSpacing: "0.04em",
              fontWeight: 300,
            }}
          >
            Wherever in the world you decide to walk with us, we&apos;ll be
            there every step of the way.
          </Typography>
        </Container>
        <CustomTabs />
        <div></div>
      </Container>
    </section>
  );
};
