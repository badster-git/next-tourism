import { Container, Typography } from "@material-ui/core";
import { CustomButton } from "../CustomButton/CustomButton";

export const IndexTop = ({ children, ...rest }) => {
  return (
    <Container maxWidth="xl" style={{ marginTop: "120px" }} disableGutters>
      <div className="backgroundMain">
        <div className="backgroundImg">
          <div
            style={{
              textAlign: "center",
              padding: "2em",
            }}
          >
            <div style={{ maxWidth: "45em" }}>
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
              <div
                style={{
                  position: "relative",
                  width: "320px",
                  margin: "auto",
                }}
              >
                <CustomButton title="View Top Attractions" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
