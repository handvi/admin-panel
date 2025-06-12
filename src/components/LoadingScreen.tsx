import { Box, CircularProgress, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface LoadingScreenProps {
  message?: ReactNode;
}

const LoadingScreen = ({ message = 'Loading...' }: LoadingScreenProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: 2,
        backgroundColor: 'background.default',
      }}
    >
      <CircularProgress size={60} thickness={4} color="primary" />
      <Typography variant="h6" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingScreen;