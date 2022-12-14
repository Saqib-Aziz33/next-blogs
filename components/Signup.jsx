import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Stack, TextField } from "@mui/material";
import AvatarSelection from "./AvatarSelection";
import { useState } from "react";

const validationSchema = yup.object({
  name: yup
    .string("Enter your name")
    .required("Name is required")
    .min(3, "Minimun 3 characters")
    .max(20, "Maximum 20 characters"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Signup = () => {
  const [avatar, setAvatar] = useState();

  function changeAvatar(address) {
    setAvatar(address);
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Stack component="form" spacing={2} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          variant="standard"
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          variant="standard"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          variant="standard"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <AvatarSelection avatar={avatar} changeAvatar={changeAvatar} />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Next
        </Button>
      </Stack>
    </div>
  );
};

export default Signup;
