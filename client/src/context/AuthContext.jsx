import { createContext, useContext, useState, useEffect } from "react";
import {
  login as loginApi,
  register as registerApi,
  logout as logoutApi,
  checkAuth,
} from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const { data } = await checkAuth();
        setUser(data);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    verifyAuth();
  }, []);

  const login = async (email, password) => {
    try {
      const { data } = await loginApi(email, password);
      setUser(data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      throw err;
    }
  };

  const register = async (name, email, password) => {
    try {
      const { data } = await registerApi(name, email, password);
      setUser(data);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      throw err;
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
      setUser(null);
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        register,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export { AuthContext }; // ✅ This fixes your import error
