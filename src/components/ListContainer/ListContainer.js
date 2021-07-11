import { makeStyles } from "@material-ui/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { ListCard } from "../ListCard/ListCard";

const useStyles = makeStyles((theme) => ({
  mainListContainer: {
    marginTop: "160px",
    padding: "20px",
    "&:nth-child(n+2)": {
      borderTop: "1px dotted gray",
      margin: "50px auto",
    },
  },
  countryName: {
    textAlign: "center",
    margin: "50px 0",
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

export const ListContainer = ({ list, maxSize, ...rest }) => {
  const classes = useStyles();
  return (
    <>
      {list.map((country) => (
        <Container key={country.id} className={classes.mainListContainer}>
          <Typography variant="h3" className={classes.countryName}>
            {country.section}
          </Typography>
          <Grid container spacing={3} wrap="wrap">
            {country.locations.map((location) => (
              <Grid
                className={`${
                  maxSize === 2 ? classes.gridItemsTwo : classes.gridItemsThree
                }`}
                item
                key={location.id}
              >
                <ListCard
                  title={location.title}
                  subtitle={location.subtitle}
                  picture={location.picture}
                  href={location.href}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      ))}
    </>
  );
};
