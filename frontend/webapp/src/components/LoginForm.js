import React, { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import { default as BootForm } from "react-bootstrap/Form";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = ({ handleSubmit }) => {
  const usernameField = useRef();

  useEffect(() => {
    usernameField.current.focus();
  }, []);

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}
      validateOnBlur={false}
    >
      {({ isSubmitting }) => (
        <Form as={BootForm}>
          <BootForm.Group>
            <BootForm.Label htmlFor="username">
              Username or email address
            </BootForm.Label>
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
            <BootForm.Label htmlFor="password">Password</BootForm.Label>
            <Field name="password" className="form-control" type="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="text-danger"
            />
          </BootForm.Group>

          <BootForm.Group>
            <BootForm.Label style={{ display: "block" }}></BootForm.Label>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Login"}
            </Button>
          </BootForm.Group>
        </Form>
      )}
    </Formik>
  );
};

const loginSchema = () => {
  return Yup.object({
    username: Yup.string().trim().required("User name is required"),
    password: Yup.string().trim().required("Password is required"),
  });
};
export default LoginForm;
