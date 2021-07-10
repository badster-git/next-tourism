import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ABOUT_DATA } from "../../../data/ABOUT_DATA";
import { CustomTextImageContainer } from "../CustomTextImageContainer/CustomTextImageContainer";

const useStyles = makeStyles((theme) => ({
  mainContentContainer: {
    [theme.breakpoints.down(1024)]: {
      margin: 0,
      padding: 0,
    },
  },
  contentContainer: {
    margin: "20px 0",
    width: "88%",
    margin: "0 auto",
    padding: "0 15px",

    [theme.breakpoints.down(1024)]: {
      margin: 0,
      padding: 0,
      width: "100%",
    },
  },
}));

export const AboutContent = () => {
  const classes = useStyles();
  const data = ABOUT_DATA;

  return (
    <Container
      className={classes.mainContentContainer}
      maxWidth={false}
      style={{ marginTop: "190px" }}
    >
      {data.map((item) => (
        <Container
          key={item.id}
          className={classes.contentContainer}
          maxWidth={false}
        >
          {item.payload.map((new_data) => (
            <div key={new_data.id}>
              <CustomTextImageContainer
                title={new_data.title}
                description={new_data.description}
                picture={new_data.picture}
                pictureDesc={new_data.pictureDesc}
                direction={new_data.direction}
              />
            </div>
          ))}
        </Container>
      ))}
    </Container>
  );
};
