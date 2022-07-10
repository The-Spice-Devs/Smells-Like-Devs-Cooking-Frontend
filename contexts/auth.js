import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + "/api/token/";
import { useRouter } from "next/router";

const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider(props) {
  const router = useRouter();

  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  });
  console.log("AuthProvider State:", state);
  async function login(username, password) {
    const response = await axios.post(tokenUrl, { username, password });

    const decodedAccess = jwt.decode(response.data.access);

    const newState = {
      tokens: response.data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
      },
    };

    setState((prevState) => ({ ...prevState, ...newState }));
  }

  function logout() {
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));

    // this is needed for correct routing after logout
    try {
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
