import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  sectionTitle: {
    marginBottom: "30px",
    paddingBottom: "30px",
    borderBottom: "1px solid #d9dde2",
    [theme.breakpoints.up(640)]: {
      marginTop: "60px",
    },
  },
  sectionDescription: {
    marginBottom: "30px",
    margin: "12px 0",
    [theme.breakpoints.up(640)]: {
      marginTop: "30px",
      lineHeight: "1.4",
    },
  },
}));

export const TourInfoDescription = ({
  whyText,
  descriptionTitle,
  tourDescription,
}) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h4" className={classes.sectionTitle}>
        Why take this tour?
      </Typography>
      <Container maxWidth={false} disableGutters>
        <Typography
          variant="body1"
          className={classes.sectionDescription}
          color="textSecondary"
        >
          {whyText}
        </Typography>
      </Container>
      <Typography variant="h4" className={classes.sectionTitle}>
        {descriptionTitle}
      </Typography>
      <Container maxWidth={false} disableGutters>
        {tourDescription.map((p) => (
          <Typography
            key={p.id}
            variant="body1"
            className={classes.sectionDescription}
            color="textSecondary"
          >
            {p}
          </Typography>
        ))}
      </Container>
    </>
  );
};
