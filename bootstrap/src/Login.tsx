import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function Login() {
  return (
		<Form onSubmit={handleSubmit} style={{width: '50vw', maxWidth: '400px', margin: '5vh auto'}}>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>

			<Form.Group className="mb-3" controlId="formBasicCheckbox">
				<Form.Check type="checkbox" label="Keep me signed in on this computer" />
			</Form.Group>

			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }
}
