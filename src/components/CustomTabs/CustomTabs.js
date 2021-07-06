import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { AppBar, Tabs, Tab, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { ImageCarousel } from "../ImageCarousel/ImageCarousel";
import { TAB_DATA } from "../../../data/TAB_DATA";

const TabPanel = (props) => {
  const { children, tabValue, idx, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== idx}
      id={`full-width-tabpanel-${idx}`}
      aria-labelledby={`full-width-tab-${idx}`}
      {...other}
    >
      {tabValue === idx && <div p={3}>{children}</div>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const useStyles = makeStyles((theme) => ({
  tab: {
    background: "transparent",
    fontSize: "12px",
    [theme.breakpoints.up(1024)]: {
      paddingTop: "50px",
      marginBottom: "16px",
      fontSize: "18px",
    },
  },
  tabSection: {
    display: "flex",
    [theme.breakpoints.down(1060)]: {
      marginTop: 0,
    },
  },
  tabSectionContent: {
    marginLeft: "auto",
    alignItems: "center",
    display: "flex",
    width: "92%",
    [theme.breakpoints.down(1060)]: {
      width: "100%",
      justifyContent: "center",
    },
  },
  tabSectionDescription: {
    marginRight: "72px",
    maxWidth: "490px",
    textAlign: "left",
    marginBottom: "80px",
    [theme.breakpoints.down(1060)]: {
      textAlign: "center",
      marginRight: "0",
      marginBottom: "10px",
    },
  },
  sectionTitle: {
    textAlign: "left",
    marginTop: "28px",
    marginBottom: "20px",
    fontWeight: "400",
    [theme.breakpoints.down(1060)]: {
      textAlign: "center",
    },
  },
  sectionDescription: {
    marginTop: 0,
    marginBottom: 0,
    letterSpacing: ".03em",
    fontWeight: 300,
    [theme.breakpoints.down(1060)]: {
      textAlign: "center",
    },
  },
  sectionContent: {
    [theme.breakpoints.down(1060)]: {
      flexDirection: "column",
      marginTop: 0,
    },
  },
}));

const TabSection = (props) => {
  const { children, title, ...other } = props;
  const classes = useStyles();

  return (
    <div className={classes.tabSection} {...other}>
      <div className={classes.tabSectionContent}>
        <div className={classes.tabSectionDescription}>
          <Typography
            variant="h5"
            component="h2"
            className={classes.sectionTitle}
          >
            {title}
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
};

export const CustomTabs = ({ children, ...rest }) => {
  // Variable to hold useStyles hook
  const classes = useStyles();

  // Variable to hold useTheme hook for access to material-ui custom theme
  const theme = useTheme();

  const [tabValue, setTabValue] = useState(0);

  // Variable to hold data array for each tab
  const tabs = TAB_DATA;

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setTabValue(index);
  };

  return (
    <div>
      <AppBar
        position="static"
        color="default"
        style={{
          boxShadow: "none",
          backgroundColor: "transparent",
          color: theme.palette.common.lightGray,
          borderBottom: `1px solid ${theme.palette.common.lightGray}`,
        }}
      >
        <Tabs
          className={classes.tabs}
          value={tabValue}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabs.map((tab, idx) => (
            <Tab
              key={tab.id}
              className={classes.tab}
              label={tab.title}
              icon={<PeopleAltIcon />}
              disableRipple
              {...a11yProps(`${idx}`)}
            />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={tabValue}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((tab, idx) => (
          <TabPanel
            key={tab.id}
            tabValue={tabValue}
            idx={idx}
            dir={theme.direction}
          >
            <div
              className={classes.sectionContent}
              style={{ display: "flex", marginTop: "64px" }}
            >
              <TabSection title={tab.title}>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.sectionDescription}
                >
                  {tab.description}
                </Typography>
              </TabSection>
              <ImageCarousel items={tab.images} />
            </div>
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  );
};
