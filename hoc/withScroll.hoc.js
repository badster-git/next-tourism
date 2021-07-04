import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Slide, AppBar, Toolbar } from "@material-ui/core";
import React, { forwardRef } from "react";
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

export default function withScroll(Component) {
  class WithScroll extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const { forwardedRef, ...rest } = this.props;
      const links = HOMEPAGE_LINKS;
      return (
        <HideOnScroll>
          <AppBar style={{ boxShadow: "none", padding: "5px" }}>
            <Toolbar
              disableGutters
              style={{ display: "flex", padding: "5px" }}
            >
              <Component ref={forwardedRef} links={links} {...rest} />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      );
    }
  }
  // eslint-disable-next-line react/display-name
  return forwardRef((props, ref) => {
    return <WithScroll {...props} forwardedRef={ref} />;
  });
}

