import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { default as BootForm } from "react-bootstrap/Form";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterForm = ({ handleSubmit }) => {
  const usernameField = useRef();

  useEffect(() => {
    usernameField.current.focus();
  }, []);

  return (
    <Formik
      initialValues={{ username: "", email: "", password2: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
      validateOnBlur={false}
    >
      {({ isSubmitting }) => (
        <Form as={BootForm}>
          <BootForm.Group>
            <BootForm.Label htmlFor="username">Username</BootForm.Label>
            <Field
              name="username"
              innerRef={usernameField}
              className="form-control"
              type="text"
            />
            <ErrorMessage
              name="username"
              className="text-danger"
              component="div"
            />
          </BootForm.Group>

          <BootForm.Group>
            <BootForm.Label htmlFor="email">Email</BootForm.Label>
            <Field name="email" className="form-control" type="email" />
            <ErrorMessage
              name="email"
              className="text-danger"
              component="div"
            />
          </BootForm.Group>

          <BootForm.Group>
            <BootForm.Label htmlFor="password">Password</BootForm.Label>
            <Field name="password" className="form-control" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </BootForm.Group>
          <BootForm.Group>
            <BootForm.Label htmlFor="password2">Password again</BootForm.Label>
            <Field name="password2" className="form-control" type="password" />
            <ErrorMessage
              name="password2"
              component="div"
              className="text-danger"
            />
          </BootForm.Group>

          <BootForm.Group>
            <BootForm.Label style={{ display: "block" }}></BootForm.Label>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Register"}
            </Button>
          </BootForm.Group>
          <ErrorMessage
            name="onsubmiterror"
            className="text-danger"
            component="div"
          />
        </Form>
      )}
    </Formik>
  );
};

const registerSchema = () => {
  return Yup.object({
    username: Yup.string().trim().required("User name is required"),
    email: Yup.string().email().required("A valid email is required"),
    password: Yup.string().trim().min(3).required("Password is required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords dont match!")
      .required("Password is required"),
  });
};
export default RegisterForm;
