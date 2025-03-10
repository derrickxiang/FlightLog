import axios from "axios";
import { useState } from "react"
import Cookies from "js-cookie";

interface LoginResponse {
    token: string;
    user: {
      id: string;
      name: string;
      email: string;
    };
}
  
export const useAccount = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [user, setUser] = useState<LoginResponse["user"] | null>(null);
  
    const login = async (email: string, password: string) => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await axios.post<LoginResponse>("http://localhost:5000/api/auth/login", {
          email,
          password,
        });
  
        const { token, user } = response.data;
  
        // Store token in a cookie (secure and HTTP-only in production)
        Cookies.set("authToken", token, { expires: 7, secure: true, sameSite: "Strict" });
  
        setUser(user);
      } catch (err) {
        setError("Login failed. Please check your credentials.");
      } finally {
        setLoading(false);
      }
    };
  
    const logout = () => {
      Cookies.remove("authToken");
      setUser(null);
    };
  
    return { login, logout, user, loading, error };
}