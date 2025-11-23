import React, { useState } from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { useForm } from "react-hook-form";
import axiosInstance from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";

type FormValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const toggleMode = () => {
    setIsSignup((prev) => !prev);
    reset(); // Clear form on mode switch
  };

  const onSubmit = async (data: FormValues) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    if (isSignup) {
      console.log("Signup data:", data);
    } else {
      console.log("Login data:", {
        email: data.email,
        password: data.password,
      });

      const response = await axiosInstance.post(`/auth/login`, payload);
      console.log(response.data, " login");

      if (response.status == 200 || response.status == 201) {
        localStorage.setItem("authToken", response.data?.access_token);
        localStorage.setItem("role", response.data?.user.role);

        if (response.data.user.role == "user") {
          navigate(`/user`);
        } else if (response.data.user.role == "admin") {
          navigate(`/admin`);
        }
      }
    }
  };

  const password = watch("password");

  return (
    <div className="min-h-screen  w-full flex items-center justify-center ">
      <Paper elevation={3} className="p-8 max-w-md w-full">
        <Typography variant="h5" className="mb-6 text-center font-semibold">
          {isSignup ? "Sign Up" : "Login"}
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {isSignup && (
            <TextField
              fullWidth
              label="Name"
              {...register("name", { required: "Name is required" })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          )}
          <TextField
            fullWidth
            label="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          {isSignup && (
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          )}
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>

        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={toggleMode}
              className="text-blue-600 hover:underline font-medium"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Login;
