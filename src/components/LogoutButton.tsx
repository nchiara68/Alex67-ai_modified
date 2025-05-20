// src/components/LogoutButton.tsx

import { Button } from '@mui/material';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { FC } from 'react';

const LogoutButton: FC = () => {
  const { signOut } = useAuthenticator();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Button variant="outlined" color="error" onClick={handleLogout}>
      Sign Out
    </Button>
  );
};

export default LogoutButton;
