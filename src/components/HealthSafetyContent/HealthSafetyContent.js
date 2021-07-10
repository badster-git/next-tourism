import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "150px",
    width: "88%",
    [theme.breakpoints.down(860)]: {
			width: "100%",
			marginTop: "120px",
    },
  },
  rowContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 -15px",
  },
  title: {
    padding: "2em 0",
  },
  column: {
    position: "relative",
    padding: "0 15px",
    width: "100%",
  },
}));

export const HealthAndSafetyContent = ({ data }) => {
  const classes = useStyles((theme) => ({}));
  return (
    <Container maxWidth={false} className={classes.mainContainer}>
      {data
        .filter((item) => item.pos === "title")
        .map((elem) => (
          <>
            <Container maxWidth={false} className={classes.rowContainer}>
              <Container maxWidth={false}>
                <Typography variant="h4" className={classes.title}>
                  {elem.title}
                </Typography>
              </Container>
            </Container>
          </>
        ))}
      {data
        .filter((item) => item.pos === "top")
        .map((elem) => (
          <>
            <Container maxWidth={false} className={classes.rowContainer}>
              <Container maxWidth={false} className={classes.column}>
                {elem.text.map((paragraph) => (
                  <Typography
                    key={paragraph}
                    variant="body1"
                    component="p"
                    style={{
                      letterSpacing: "0.03em",
                      marginBottom: "1rem",
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Container>
            </Container>
          </>
        ))}
      <Container maxWidth={false} className={classes.rowContainer}>
        {data
          .filter((item) => item.pos === "middle")
          .map((elem) => (
            <Container key={elem.id} maxWidth={false}>
              <ul style={{ marginBottom: "1rem" }}>
                {elem.text.map((paragraph) => (
                  <li key={paragraph} style={{paddingBottom: ".5em"}}>
                    <Typography variant="body1" style={{letterSpacing: ".03em"}}>{paragraph}</Typography>
                  </li>
                ))}
              </ul>
            </Container>
          ))}
      </Container>
      {data
        .filter((item) => item.pos === "bottom")
        .map((elem) => (
          <>
            <Container
              maxWidth={false}
              className={classes.rowContainer}
              style={{ paddingBottom: "4em" }}
            >
              <Container maxWidth={false}>
                {elem.text.map((paragraph) => (
                  <Typography key={paragraph} variant="body1">
                    {paragraph}
                  </Typography>
                ))}
              </Container>
            </Container>
          </>
        ))}
    </Container>
  );
};
