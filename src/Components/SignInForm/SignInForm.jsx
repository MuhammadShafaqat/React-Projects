import * as React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import styles from './styles.module.scss'

export const SignInForm = () => {
  const [data, setData] = React.useState("");

  const onSubmit = (data) => {
    setData(data);
    console.log("Values:::", data);
    console.log("Values:::", JSON.stringify(data));
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  return (
    <Container className={styles.container}>
      <Form onSubmit={handleSubmit(onSubmit)} className="">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="email"
            {...register("email", {
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <Form.Text className="text-danger">Email is required.</Form.Text>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <Form.Text className="text-danger">Email is not valid.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <Form.Text className="text-danger">Password is required.</Form.Text>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <Form.Text className="text-danger">
              Password should be at-least 6 characters.
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Button className="w-100" variant="success" type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form><br />
      <div className="h5  justify-content-center">
        <p className=""> Data: {JSON.stringify(data)}</p>
      </div>
    </Container>
  );
};
