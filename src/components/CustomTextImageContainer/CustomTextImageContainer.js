import { makeStyles } from "@material-ui/styles";
import { Container,  Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
    padding: "10px 0",
    marginBottom: "40px",
    [theme.breakpoints.down(1024)]: {
      flexDirection: "column !important",
      padding: 0,
    },
  },
  textContainer: {
    flex: "0 0 65%",
  },
  textInnerContainer: {
    padding: "10px 0",
  },
  pictureContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  auxPicture: {
    position: "absolute",
    opacity: ".15",
  },
  title: {
    [theme.breakpoints.down(1024)]: {
      textAlign: "center",
    },
  },
}));

export const CustomTextImageContainer = ({
  title,
  description,
  picture,
  pictureDesc,
  direction,
}) => {
  const classes = useStyles();
  return (
    <Container
      className={classes.mainContainer}
      maxWidth={false}
      style={{ flexDirection: direction === "reverse" ? "row-reverse" : "row" }}
    >
      <Container className={classes.textContainer} maxWidth={false}>
        <div className={classes.textInnerContainer}>
          <Typography variant="h5" component="h5" className={classes.title}>
            {title}
          </Typography>
          <hr
            style={{
              marginTop: "1rem",
              marginBottom: "1rem",
              border: 0,
              borderTop: "1px solid rgba(0,0,0,.1)",
            }}
          />
          {description.map((desc) => (
            <Typography
              key={desc}
              component="p"
              variant="body2"
              style={{ marginBottom: "1rem" }}
            >
              {desc}
            </Typography>
          ))}
        </div>
      </Container>
      <Container className={classes.pictureContainer} maxWidth={false}>
        <div style={{ position: "relative" }}>
          <Image src={picture} alt={pictureDesc} width={800} height={600} />
        </div>
      </Container>
    </Container>
  );
};
