import { makeStyles } from "@material-ui/styles";
import { Breadcrumbs, Typography } from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  link: {
    cursor: "pointer",
    color: theme.palette.common.lightGray,
    transition: "all .3s",
    "&:hover": {
      transform: "translateY(-5px)",
      color: theme.palette.common.lightBrown,
    },
  },
}));

export const CustomBreadcrumbs = ({ path, root, handleClick, name, title }) => {
  const classes = useStyles();
  return (
    <Breadcrumbs separator="<" aria-label="breadcrumb">
      <Link
        href={path}
        as={root}
        onClick={handleClick}
        className={classes.link}
      >
        <Typography
          className={classes.link}
          variant="body2"
        >{`All ${name}`}</Typography>
      </Link>
      <Typography color="textPrimary" variant="body2">
        {title.length > 28
          ? title.replace(/^(.{28}[^\s]*).*/, "$1") // Char limit without cutting off word
          : title}
      </Typography>
    </Breadcrumbs>
  );
};
