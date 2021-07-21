import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Stepper, Step, StepLabel } from "@material-ui/core";
import Calendar from 'react-calendar';

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    [theme.breakpoints.up(1024)]: {
      display: "block",
      height: "100%",
      paddingBottom: "20px",
      border: "1px solid #d9dde2",
			background: theme.palette.common.lightGray,
    },
    position: "relative",
  },
  sidebarHeader: {
    padding: "26px 38px",
    marginTop: "50px",
    display: "flex",
    alignItems: "center",
  },
  priceText: {
    color: theme.palette.common.lightBrown,
    marginLeft: "auto",
  },
}));

export const CalendarBooking = ({ price }) => {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth="sm">
      <Container
        disableGutters
        maxWidth={false}
        className={classes.headerContainer}
      >
        <Container
          disableGutters
          maxWidth={false}
          className={classes.sidebarHeader}
        >
          <Typography variant="h4">Price</Typography>
          <Typography variant="h4" className={classes.priceText}>
            {price}
          </Typography>
        </Container>
				<Container disableGutters maxWidth={false}>

				</Container>
      </Container>
    </Container>
  );
};
