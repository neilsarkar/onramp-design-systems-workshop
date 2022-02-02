import React from 'react';

export function Login() {
	return (
		<form onSubmit={handleSubmit} className="flex flex-col m-auto mt-5 w-72">
			<label className="mb-3">
				Email
				<input className="block w-full border rounded-sm border-gray-200 p-2"
							 type="email" name="email" placeholder="Email" />
			</label>

			<label className="mb-3">
				Password
				<input className="block w-full border rounded-sm border-gray-200 p-2"
							 type="password" name="password" placeholder="Password" />
			</label>

			<label className="mb-3">
				<input className="mr-1" type="checkbox" name="remember" />
				Keep me signed in on this computer
			</label>

			<button type="submit"
				className="border rounded-lg w-full p-4 border-violet-400 text-violet-600 hover:text-white hover:bg-violet-600 hover:border-white">
					Submit
			</button>
		</form>
	)

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  }}