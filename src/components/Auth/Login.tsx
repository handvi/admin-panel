import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Link, Grid, Alert } from '@mui/material';
import AuthLayout from './AuthLayout';
import { motion } from 'framer-motion';
import LoadingScreen from '../LoadingScreen';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock validation
      if (email === 'user@example.com' && password === 'password') {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingScreen message="Signing in..." />;
  }

  return (
    <AuthLayout title="Welcome Back">
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {error && (
            <Alert severity="error" sx={{ mb: 3 }}>
              {error}
            </Alert>
          )}
          
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            autoFocus
          />
          
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
            required
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            Sign In
          </Button>
          
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link
                href="/register"
                variant="body2"
                sx={{ cursor: 'pointer' }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/register');
                }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </motion.div>
      </form>
    </AuthLayout>
  );
};

export default Login;