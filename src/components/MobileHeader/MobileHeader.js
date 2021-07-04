import React, { useState } from "react";
import { useRouter } from "next/router";
import { Container, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import Image from "next/image";
import Hamburger from "hamburger-react";
import SearchIcon from "@material-ui/icons/Search";

import withScroll from "../../../hoc/withScroll.hoc.js";
import { CustomDialog } from "../CustomDialog/CustomDialog";
import logo from "../../../public/logo/logo.png";

const MobileHeader = ({ children, ...rest }) => {
  const { links } = rest;
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(router.pathname);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down(469));

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Container
      style={{
        top: "0px",
        margin: "auto 0",
        position: "fixed",
        left: "0",
        width: "100%",
        background: theme.palette.common.white,
      }}
      disableGutters
    >
      <div
        style={{
          display: "flex",
          padding: "0 15px",
          flexWrap: matchesSM ? "wrap" : "none",
          justifyContent: matchesSM ? "center" : "",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: matchesSM ? "center" : "flex-start",
          }}
        >
          <Container
            style={{
              alignItems: "center",
              display: "flex",
              cursor: "pointer",
            }}
            disableGutters
          >
            <Image src={logo} alt="Logo of site" width={310} height={88} />
          </Container>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <SearchIcon className="icon" />
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              direction="right"
              hideOutline={true}
              distance="sm"
              size={22}
            />
          </div>
        </div>
      </div>
      <CustomDialog
        selectedValue={selectedValue}
        open={isOpen}
        onClose={handleClose}
        router={router}
        links={links}
      />
    </Container>
  );
};

export default withScroll(MobileHeader);
