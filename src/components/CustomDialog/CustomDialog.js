import { Dialog, ListItem, List, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  btnLink: {
    "&:hover": {
      "& $headerLink": {
        color: theme.palette.common.lightBrown,
        transition:
          "background .3s ease-in-out, color .3s ease-in-out, border-color .3s ease-in-out",
      },
    },
  },
  headerLink: {
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
  borderBottom: {
    borderBottom: `2px solid ${theme.palette.common.lightBrown}`,
    position: "absolute",
    bottom: 0,
    left: "45%",
    width: "10%",
  },
}));

export const CustomDialog = (props) => {
  const classes = useStyles();
  const { onClose, selectedValue, open, router, links } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      maxWidth="sm"
      fullWidth
    >
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "80%",
        }}
      >
        {links.map((link) => (
          <ListItem
            button
            alignItems="center"
            onClick={() => handleListItemClick(link.href)}
            key={link.id}
            style={{
              textAlign: "center",
              justifyContent: "center",
            }}
            className={classes.btnLink}
          >
            <Link href={link.href} passHref>
              <Typography
                className={`${classes.headerLink} ${
                  router.pathname === link.href ? "active" : "hover-underline"
                }`}
                style={{ fontWeight: "600" }}
                variant="h5"
              >
                {link.title}
                {router.pathname === link.href ? (
                  <Box className={classes.borderBottom}></Box>
                ) : (
                  ""
                )}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};
