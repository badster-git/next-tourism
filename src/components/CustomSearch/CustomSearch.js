import { useState, useRef, useCallback } from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
  },
  searchBox: {
    width: "fit-content",
    height: "fit-content",
    position: "relative",
  },
  inputSearch: {
    height: "50px",
    width: "50px",
    borderStyle: "none",
    padding: "10px",
    fontSize: "18px",
    letterSpacing: "2px",
    outline: "none",
    borderRadius: "25px",
    transition: "all .5s ease-in-out",
    backgroundColor: theme.palette.common.lightBrown,
    paddingRight: "40px",
    "&:focus": {
      width: "250px",
      borderRadius: "0px",
      backgroundColor: "transparent",
      borderBottom: `1px solid ${theme.palette.common.lightBrown}`,
      transition: "all 500ms cubic-bezier(0, 0.110, 0.35, 2)",
    },
  },
  btnSearch: {
    height: "50px",
    top: "2px",
    width: "50px",
    borderStyle: "none",
    outline: "none",
    cursor: "pointer",
    borderRadius: "50%",
    position: "absolute",
    right: "0px",
    backgroundColor: "transparent",
    color: theme.palette.common.white,
    pointerEvents: "painted",
    "&:focus ~ $inputSearch": {
      width: "250px",
      borderRadius: "0px",
      backgroundColor: "transparent",
      color: theme.palette.common.lightBrown,
      borderBottom: `1px solid ${theme.palette.common.lightBrown}`,
      transition: "all 500ms cubic-bezier(0, 0.110, 0.35, 2)",
    },
  },
  results: {
    listStyle: "none",
    overflow: "hidden",
    margin: "9px 0 0",
    padding: 0,
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: "190",
  },
  result: {
    cursor: "pointer",
    backgroundColor: theme.palette.common.lightBrown,
    margin: "0 0 9px",
    padding: "18px",
    borderTopRightRadius: "5px",
    borderTopLeftRadius: "5px",
    "&:hover": {
      "& $resultText": {
        transform: "translateY(-5px)",
      },
    },
  },
  resultText: {
    transition: "all .3s",
    textAlign: "center",
    color: theme.palette.common.white,
  },
}));

const CustomIcon = ({ query, onChange, onFocus }) => {
  const classes = useStyles();
  return (
    <div className={classes.searchBox}>
      <button className={classes.btnSearch}>
        <SearchIcon />
      </button>
      <input
        type="text"
        id="search"
        className={classes.inputSearch}
        name="search"
        label="Search"
        variant="filled"
        color="secondary"
        value={query}
        onChange={onChange}
        onFocus={onFocus}
        placeholder="Search tours"
        autoComplete="off"
        autoCorrect="off"
      />
    </div>
  );
};

// Search component that utilizes pages/api/search to find values from
//  cached tours file
export const CustomSearch = () => {
  const classes = useStyles();

  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback((e) => {
    const query = e.target.value;
    setQuery(query);
    if (query.length) {
      fetch(searchEndpoint(query))
        .then((res) => res.json())
        .then((res) => {
          setResults(res.result);
        });
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <div
      ref={searchRef}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <div className={classes.container}>
        <CustomIcon query={query} onChange={onChange} onFocus={onFocus} />
        {active && results.length > 0 && (
          <ul className={classes.results}>
            {results.map(({ id, title, path }) => (
              <li key={id} className={classes.result}>
                <Link href="/[path]" as={`/${path}`}>
                  <Typography className={classes.resultText} variant="body2">
                    {title}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
