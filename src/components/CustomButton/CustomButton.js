import {
  Button,
  makeStyles,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
} from "@material-ui/core";
import { useState, createRef, useRef } from "react";
import Link from "next/link";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  TOP_ATTRACTIONS_DATA_EUROPE,
  TOP_ATTRACTIONS_DATA_USA,
} from "../../../data/TOP_ATTRACTIONS_DATA";

const useStyles = makeStyles((theme) => ({
  rootBtn: {
    borderRadius: "25px",
    width: "100%",
    padding: "10px 0",

    "&:hover": {
      "& $icon": {
        transform: "rotate(180deg)",
      },
    },
  },
  icon: {
    position: "absolute",
    right: "15px",
    transitionDuration: "0.3s",
    transitionProperty: "transform",
    "&:hover": {
      transform: "rotate(180deg)",
    },
  },
  popover: {
    pointerEvents: "none",
  },
  popoverContents: {
    pointerEvents: "auto",
    width: "33em",
    padding: "15px",
    right: 0,
    left: "calc(100% / 3.4) !important",
    [theme.breakpoints.between(500, 1024)]: {
      padding: "35px 10px",
      left: "calc(100% / 8) !important",
      width: "28em",
      padding: "10px",
    },
    [theme.breakpoints.down(500)]: {
      padding: "35px 10px",
      left: "5px !important",
      width: "28em",
      padding: "10px",
    },
  },
  table: {
    minWidth: "650",
  },
  tableName: {
    color: theme.palette.common.lightBlue,
  },
  cityList: {
    margin: "0 auto",
  },
  tableLink: {
    textDecoration: "none",
    "&.active": {
      color: theme.palette.common.lightBrown,
    },
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.common.lightBrown,
      transition:
        "background .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out",
    },
  },
}));

export const CustomButton = ({ children, title, ...rest }) => {
  const classes = useStyles();
  const europeData = TOP_ATTRACTIONS_DATA_EUROPE,
    usaData = TOP_ATTRACTIONS_DATA_USA;

  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef();

  const popoverEnter = () => {
    setOpenedPopover(true);
  };

  const popoverLeave = () => {
    setOpenedPopover(false);
  };

  return (
    <>
      <Button
        aria-owns={openedPopover ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        className={classes.rootBtn}
        ref={popoverAnchor}
        onMouseEnter={popoverEnter}
        onMouseLeave={popoverLeave}
      >
        {title ? title : children}
        <ExpandMoreIcon className={classes.icon} />
      </Button>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{ paper: classes.popoverContents }}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        <Box className={classes.cityList} style={{ display: "flex" }}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              aria-label="simple table"
              style={{ borderRight: "1px solid #ececec" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="h5" className={classes.tableName}>
                      Europe
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {europeData.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell>
                      <Link href={row.href} passHref>
                        <Typography
                          variant="body1"
                          className={classes.tableLink}
                        >
                          {row.title}
                        </Typography>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableName}>
                    <Typography variant="h5" className={classes.tableName}>
                      USA
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usaData.map((row) => (
                  <TableRow key={row.title}>
                    <TableCell>
                      <Link href={row.href} passHref>
                        <Typography
                          variant="body1"
                          className={classes.tableLink}
                        >
                          {row.title}
                        </Typography>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Popover>
    </>
  );
};
