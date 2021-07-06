import React from "react";
import { makeStyles } from "@material-ui/styles";
import ImageGallery from "react-image-gallery";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { FullScreenMaximize } from "@styled-icons/fluentui-system-filled";

const useStyles = makeStyles((theme) => ({
  imgGalleryWrapper: {
    marginLeft: "auto",
    width: "700px",
    padding: "40px",
    "&:hover": {
      "& $navBtns": {
        display: "inline-block",
        position: "absolute",
        "&:hover": {
          color: theme.palette.common.lightBrown,
        },
      },
    },
    [theme.breakpoints.down(1060)]: {
      width: "100%",
      padding: "5px",
      marginTop: "64px",
    },
  },
  navBtns: {
    display: "none",
  },
}));

export const ImageCarousel = ({ items, children, ...rest }) => {
  const classes = useStyles();
  return (
    <ImageGallery
      additionalClass={classes.imgGalleryWrapper}
      items={items}
      showThumbnails={false}
      autoPlay={true}
      slideInterval={9000}
      showPlayButton={false}
      // Custom left and right nav buttons that dissappear when not hovered over
      renderLeftNav={(onClick) => (
        <button
          className={`${classes.navBtns} image-gallery-left-nav image-gallery-icon`}
          disabled={false}
          onClick={onClick}
        >
          <ArrowBackIosIcon style={{ height: "80px", width: "50px" }} />
        </button>
      )}
      renderRightNav={(onClick) => (
        <button
          className={`${classes.navBtns} image-gallery-right-nav image-gallery-icon`}
          disabled={false}
          onClick={onClick}
        >
          <ArrowForwardIosIcon style={{ height: "80px", width: "50px" }} />
        </button>
      )}
      renderFullscreenButton={(onClick, isFullscreen) => (
        <button
          type="button"
          className={`${classes.navBtns} image-gallery-fullscreen-button${
            isFullscreen ? " active" : ""
          } image-gallery-icon`}
          onClick={onClick}
        >
          <FullScreenMaximize style={{ height: "30px", width: "30px" }} />
        </button>
      )}
    />
  );
};
