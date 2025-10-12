import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Paper,
} from '@mui/material';

const Login: React.FC = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const toggleMode = () => {
        setIsSignup((prev) => !prev);
        setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isSignup) {
            console.log('Signup data:', formData);
        } else {
            console.log('Login data:', {
                email: formData.email,
                password: formData.password,
            });
        }
    };

    return (
        <div className="min-h-screen bg-sky-300 p-8 w-full flex items-center justify-center  px-4">

            <Paper elevation={3} className="p-8 max-w-md w-full">
                <Typography variant="h5" className="mb-6 text-center font-semibold">
                    {isSignup ? 'Sign Up' : 'Login'}
                </Typography>

                <form onSubmit={handleSubmit} className="space-y-4 w-6/12">
                    {isSignup && (
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {isSignup && (
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    )}
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        {isSignup ? 'Sign Up' : 'Login'}
                    </Button>
                </form>

                <Box mt={4} textAlign="center">
                    <Typography variant="body2">
                        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button
                            type="button"
                            onClick={toggleMode}
                            className="text-blue-600 hover:underline font-medium"
                        >
                            {isSignup ? 'Login' : 'Sign Up'}
                        </button>
                    </Typography>
                </Box>
            </Paper>
        </div>
    );
};

export default Login;
