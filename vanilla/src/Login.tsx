import React from 'react';
import './Login.css';

export function Login() {
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Email:
				<input type="email" name="email" placeholder="Email" />
			</label>

			<label>
				Password:
				<input type="password" name="password" placeholder="Password" />
			</label>

			<label>
				<input type="checkbox" name="remember" />
				Keep me signed in on this computer
			</label>

			<button type="submit">Submit</button>
		</form>
	)

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }
}