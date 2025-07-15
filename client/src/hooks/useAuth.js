import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function useAuth() {
  const {
    user,
    loading,
    error,
    login,
    register,
    logout,
    checkAuth,
  } = useContext(AuthContext);

  return {
    user,
    isLoading: loading,
    error,
    login,
    register,
    logout,
    checkAuth,
  };
}