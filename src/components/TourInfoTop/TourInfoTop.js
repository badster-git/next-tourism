import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import Image from "next/image";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    marginTop: "25px",
    overflow: "hidden",
  },
  headerInfo: {
    display: "flex",
  },
  tourStats: {
    display: "flex",
    justifyContent: "flex-start",
    marginRight: "25px",
    marginTop: "0",
    padding: "0 0",
    alignItems: "center",
    [theme.breakpoints.up(640)]: {
      marginBottom: "30px",
    },
  },
  sep: {
    margin: "0 20px",
    width: "1px",
    height: "32px",
    backgroundColor: "#ebebeb",
  },
}));

export const TourInfoTop = ({ title, duration, max, picture }) => {
  const classes = useStyles();

  return (
    <Container
      className={classes.mainContainer}
      disableGutters
      maxWidth={false}
    >
      <Container disableGutters maxWidth={false}>
        <Typography variant="h4" style={{ marginBottom: "30px" }}>
          {title}
        </Typography>
        <Container
          disableGutters
          maxWidth={false}
          className={classes.headerInfo}
        >
          <Container
            disableGutters
            maxWidth={false}
            className={classes.tourStats}
          >
            <Container
              disableGutters
              maxWidth={false}
              style={{ display: "inherit" }}
            >
              <Typography variant="body2">
                <AccessTimeIcon
                  style={{ width: "23px", height: "23px", marginRight: "12px" }}
                />
                {duration}
              </Typography>
              <div className={classes.sep} />
              <Typography variant="body2">
                <GroupIcon
                  style={{ width: "23px", height: "23px", marginRight: "12px" }}
                />
                {max}
              </Typography>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container disableGutters maxWidth={false}>
        <Image src={picture} width={840} height={490} />
      </Container>
    </Container>
  );
};
