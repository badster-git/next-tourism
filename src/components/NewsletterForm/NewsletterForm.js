import { FormikContext, useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import {
  Button,
  TextField,
  Typography,
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles, useTheme } from "@material-ui/styles";

const validateSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
  },
  form: {
    display: "flex",
  },
  formBtn: {
    maxWidth: "170px",
    maxHeight: "60px",
    height: "100%",
  },
  formText: {
    marginRight: "20px",
    width: "600px",
    color: theme.palette.common.white,
  },
  titleText: {
    color: theme.palette.common.white,
    marginBottom: "30px",
    [theme.breakpoints.down(640)]: {
      textAlign: "center",
    },
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "25%",
    left: "42%",
  },
}));

export const NewsletterForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    initialStatus: {
      sent: false,
      success: "",
    },
    validationSchema: validateSchema,
    onSubmit: async (values, actions) => {
      const res = await fetch("/api/subscribe", {
        body: JSON.stringify({
          email: values.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const { error } = await res.json();

      if (error) {
        actions.setStatus({
          success: "Error occured! Please try again later!",
          sent: false,
        });
        setOpen(true);
        return;
      }
      actions.resetForm();
      actions.setStatus({
        success: "Success! 🎉 You are now subscribed to the newsletter.",
        sent: true,
      });
      setOpen(true);
    },
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Typography variant="body2" className={classes.titleText}>
        SUBSCRIBE TO OUR NEWSLETTER
      </Typography>
      <form
        className={classes.form}
        onSubmit={formik.handleSubmit}
        method="post"
      >
        <TextField
          id="email"
          type="email"
          name="email"
          label="Email"
          variant="filled"
          color="secondary"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className={classes.formText}
        />
        <div className={classes.wrapper}>
          <Button
            className={classes.formBtn}
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            disabled={formik.isSubmitting || formik.status?.sent}
          >
            {formik.status
              ? formik.status.sent
                ? "Subscribed"
                : "Subscribe"
              : "Subscribe"}
          </Button>
          {formik.isSubmitting && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
          <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity={`${
                formik.status
                  ? formik.status.sent
                    ? "success"
                    : "error"
                  : "error"
              }`}
            >
              {formik.status ? formik.status.success : ""}
            </Alert>
          </Snackbar>
        </div>
      </form>
    </div>
  );
};
