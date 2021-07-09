import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, Typography } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";

const validateSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
  },
  formBtn: {
    maxWidth: "200px",
  },
  formText: {
    marginRight: "20px",
    width: "600px",
    color: theme.palette.common.white,
  },
  titleText: {
    color: theme.palette.common.white,
    marginBottom: "30px",
  },
}));

export const NewsletterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Typography variant="body2" className={classes.titleText}>
        SUBSCRIBE TO OUR NEWSLETTER
      </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          id="email"
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
        <Button
          className={classes.formBtn}
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};
