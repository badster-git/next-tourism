import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Slide, AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { HOMEPAGE_LINKS } from "../data/HOMEPAGE_LINKS";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

function withScroll(Component) {
  const links = HOMEPAGE_LINKS;
  return function wrappedWithScroll(props) {
    return (
      <HideOnScroll>
        <AppBar
          position="static"
          style={{ background: "white", boxShadow: "none", padding: "25px" }}
        >
          <Toolbar disableGutters style={{ display: "flex", padding: "15px" }}>
            <Component {...props} links={links} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    );
  };
}

export default withScroll;
