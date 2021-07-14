import { makeStyles } from "@material-ui/styles";
import { Container, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  tabItem: {
    padding: "17px 10px",
    color: theme.palette.common.lightGray,
    position: "relative",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.common.lightBrown,
    },
  },
  navTabs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const CustomTabMenu = ({ menu, ...rest }) => {
  const classes = useStyles();
  return (
    <Container className={classes.navTabs} maxWidth={false} disableGutters>
      {menu.map((item) => (
        <Link href={item.link} key={item.id}>
          <Typography className={classes.tabItem} variant="body1">
            {item.title}
          </Typography>
        </Link>
      ))}
    </Container>
  );
};
