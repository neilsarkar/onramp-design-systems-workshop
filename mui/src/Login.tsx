import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
});

export function Login() {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

	return (
		<ThemeProvider theme={theme}>
			<Container component="main" maxWidth="xs">
				<Box
					sx={{
						mt: 8,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<Box component="form" onSubmit={handleSubmit} noValidate>
						<TextField
							required
							fullWidth
							name="email"
							label="Email Address"
							sx={{mb: 2}}/>
						<TextField
							required
							fullWidth
							name="password"
							label="Password"
							type="password" />

						<FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Keep me signed in on this computer"
            />
						<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
							Sign In
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	)
}