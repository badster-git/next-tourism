import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import ExploreIcon from "@material-ui/icons/Explore";
import { CONTACT_DATA, CONTACT_MENU_DATA } from "../../../data/CONTACT_DATA";
import { ListCard } from "../ListCard/ListCard";
import { CustomTabMenu } from "../CustomTabMenu/CustomTabMenu";

const useStyles = makeStyles((theme) => ({
  mainContactContainer: {
    marginTop: "190px",
    width: "88%",
    margin: "0 auto",
    [theme.breakpoints.down(640)]: {
      width: "100%",
    },
  },
  title: {
    [theme.breakpoints.down(640)]: {
      textAlign: "center",
    },
  },
  mainCustomServiceContainer: {
    marginTop: "40px",
    margin: "0 auto",
    backgroundColor: "#f7f7f7",
    padding: "50px 10px",
    [theme.breakpoints.down(640)]: {
      padding: "50px 0",
    },
  },
  customerServiceTitle: {
    textAlign: "center",
    marginBottom: "20px",
  },
  icon: {
    color: theme.palette.common.lightBrown,
    width: "50px",
    height: "50px",
    marginBottom: "22px",
  },
  text: {
    textAlign: "center",
    maxWidth: "70%",
    margin: "0 auto",
    [theme.breakpoints.down(640)]: {
      maxWidth: "90%",
    },
  },
  textSeparated: {
    textAlign: "center",
    maxWidth: "70%",
    margin: "22px auto",
    [theme.breakpoints.down(640)]: {
      maxWidth: "90%",
    },
  },
  problemsContainer: {
    margin: "0 auto",
    padding: "30px 10px",
  },
  gridItemsThree: {
    width: "calc(100% / 3)",
    [theme.breakpoints.down(1120)]: {
      width: "calc(100% / 2)",
    },
    [theme.breakpoints.down(860)]: {
      flexShrink: 1,
      width: "100%",
    },
  },
  gridItemsTwo: {
    width: "calc(100% / 2)",
    [theme.breakpoints.down(860)]: {
      flexShrink: 1,
      width: "100%",
    },
  },
}));

export const ContactContent = () => {
  const classes = useStyles();
  const data = CONTACT_DATA;
  const menu_data = CONTACT_MENU_DATA;
  return (
    <Container className={classes.mainContactContainer} maxWidth={false}>
      <Container maxWidth={false}>
        <Typography className={classes.title} variant="h4" component="h1">
          Contact
        </Typography>
      </Container>
      <CustomTabMenu menu={menu_data} />
      <Container
        component="section"
        id="customerservice"
        maxWidth={false}
        disableGutters
      >
        <Container
          className={classes.mainCustomServiceContainer}
          maxWidth={false}
          disableGutters
        >
          <Container
            className={classes.customerServiceTitle}
            maxWidth={false}
            disableGutters
          >
            <PermPhoneMsgIcon className={classes.icon} />
            <Typography variant="h4">Call Customer Service</Typography>
          </Container>
          <Typography variant="body1" className={classes.text}>
            At this time, we ask if you have an inquiry that you please send an
            email to info@takewalks.com for our team to look after. If an agent
            is online, we encourage you to use our chat feature, however, if no
            one is online, please fill it out the form in the chat box and we
            will get back to as soon as we can. We appreciate your patience and
            understanding.
          </Typography>
          <Typography variant="body1" className={classes.textSeparated}>
            Opening Hours: Monday to Friday;
          </Typography>
          <Typography variant="body1" className={classes.textSeparated}>
            3.30am - 6pm US Eastern Time
          </Typography>
          <Typography variant="body1" className={classes.textSeparated}>
            8:30am - 11pm UK &amp; Ireland Time
          </Typography>
        </Container>
      </Container>
      <Container
        id="problems"
        component="section"
        maxWidth={false}
        disableGutters
      >
        <Container
          className={classes.problemsContainer}
          maxWidth={false}
          disableGutters
        >
          <Container
            className={classes.customerServiceTitle}
            maxWidth={false}
            disableGutters
          >
            <ExploreIcon className={classes.icon} />
            <Typography variant="h4">Problems While Travelling</Typography>
          </Container>
          <Typography
            variant="body1"
            className={classes.textSeparated}
            style={{ margin: "50px auto" }}
          >
            If you have a problem with your tour or finding a location, you can
            get in touch with our local teams (office hours are in local time):
          </Typography>
        </Container>
        <Container
          className={classes.customerServiceTitle}
          maxWidth={false}
          disableGutters
        >
          <Grid container spacing={3} wrap="wrap">
            {data
              .filter((type) => type.pos === "top")
              .map((location) => (
                <Grid className={classes.gridItemsThree} item key={location.id}>
                  <ListCard
                    title={location.title}
                    subtitle={location.subtitle}
                    picture={location.picture}
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </Grid>
              ))}

            {data
              .filter((type) => type.pos === "bottom")
              .map((location) => (
                <Grid className={classes.gridItemsTwo} item key={location.id}>
                  <ListCard
                    title={location.title}
                    subtitle={location.subtitle}
                    picture={location.picture}
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Container>
    </Container>
  );
};
